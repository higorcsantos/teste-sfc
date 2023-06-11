const jwt = require("jsonwebtoken");
require("dotenv").config();

function checkUserPermission(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send("Authetication token not provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    if (decoded.job === "admin") {
      req.user = decoded;
      next();
    } else if (decoded.job === "user") {
      req.user = decoded;
      next();
    } else {
      res.status(403).send({message: "Access denied. Insufficient permission."});
    }
  } catch (error) {
    res.status(401).send("Invalid authentication token.");
  }
}

module.exports = checkUserPermission;