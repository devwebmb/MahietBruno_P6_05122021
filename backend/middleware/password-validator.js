const passwordSchema = require("../models/Password");

module.exports = (req, res, next) => {
  if (!passwordSchema.validate(req.body.password)) {
    const message =
      "Votre mot de passe doit comporter au minimum 8 caractères, dont une majuscule, une minuscule et un chiffre.";
    res.status(400).json({ message });
  } else {
    next();
  }
};
