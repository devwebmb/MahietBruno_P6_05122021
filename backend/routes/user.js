// Import
const express = require("express");
const checkPassword = require("../middleware/password-validator");
const checkMail = require("../middleware/email-validator.js");
const router = express.Router();

const userCtrl = require("../controllers/user");

// Création des routes
router.post("/signup", checkPassword, checkMail, userCtrl.signup);
router.post("/login", userCtrl.login);

// Export
module.exports = router;
