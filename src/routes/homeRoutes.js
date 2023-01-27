const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeCntroller");



router.get("/", HomeController.showHome);
router.get("/register", HomeController.showRegister);
router.get("/login", HomeController.showLogin);


module.exports = router;