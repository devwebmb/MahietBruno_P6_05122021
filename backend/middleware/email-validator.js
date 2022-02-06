const checkMail = require("email-validator");

module.exports = (req, res, next) => {
  if (!checkMail.validate(req.body.email)) {
    const message = "Votre adresse mail doit avoir un format valide";
    res.status(400).json({ message });
  } else {
    next();
  }
};
