// iImport
const jwt = require("jsonwebtoken");

// export d'un middleware d'authentification
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedtoken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedtoken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "User Id non valable";
    } else {
      next();
    }
  } catch (error) {
    res.status(403).json({ error: error | "unauthorized request." });
  }
};
