const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");

const sauceCtrl = require("../controllers/sauce");

router.get("/", auth, sauceCtrl.getAllsauces);

module.exports = router;