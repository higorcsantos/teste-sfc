const fakeData = require("./fakeData");

module.exports = function(req, res) {
    const id = req.query.id;
  
    if (!id) {
      return res.status(400).send("Id is required.");
    }
  
    const index = fakeData.findIndex(obj => obj.id === id);
  
    if (index !== -1) {
      data.splice(index, 1);
      res.status(200).send({message: "User successfully deleted"});
    } else {
      res.status(404).send({message: "User not found."});
    }
  };