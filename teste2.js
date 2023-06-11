const fakeData = require("./fakeData");

module.exports = function(req, res) {
  const { name, job } = req.body;

  if (!name || !job) {
    return res.status(400).send('Name and job has been provided.');
  }

  const lastId = fakeData.length > 0 ? fakeData[fakeData.length - 1].id : 0;
  const newId = lastId + 1;

  const newUser = {
    id: newId,
    name,
    job,
  };

  fakeData.push(newUser);

  return res.status(201).send({
        data: newUser, 
        message: "User Successfully created"
    });
};