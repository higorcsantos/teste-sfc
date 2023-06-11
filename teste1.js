const data = require("./fakeData");
const searchCount = require("./teste5")

const getUser = (req, res, next) => {
  const name = req.query.name;
  const user = data.find((user) => user.name === name);

  if (user) {
    searchCount.incrementCount(name);
    res.status(200).send({
      data: user,
      message: "User found",
    });
  } else {
    res.status(404).send("User not found");
  }
};

const getUsers = (req, res, next) => {
  res.status(200).send({
    data: data,
    message: "Users retrieved successfully",
  });
};

module.exports = {
  getUser,
  getUsers,
};