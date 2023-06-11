const fakeData = require("./fakeData");

module.exports = function(req, res) {
    const id = req.query.id;
  
    if (!id) {
      return res.status(400).send("Id is a obrigatory parameter.");
    }
  
    const user = fakeData.find(obj => obj.id == id);
  
    if (!user) {
      return res.status(404).send("User not found.");
    }
  
    user.name = req.body.name;
    user.job = req.body.job;
  
    res.send(user).status(200);
  };