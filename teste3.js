const fakeData = require("./fakeData");

module.exports = function(req, res) {
    const id = req.query.id;
  
    if (!name) {
      return res.status(400).send("O parâmetro 'name' é obrigatório.");
    }
  
    const index = fakeData.findIndex(obj => obj.id === id);
  
    if (index !== -1) {
      data.splice(index, 1);
      res.status(200).send({message: "User successfully deleted"});
    } else {
      res.status(404).send({message: "User not found."});
    }
  };