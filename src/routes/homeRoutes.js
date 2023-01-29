const express = require("express");
const router = express.Router();
const HomeController = require("../controllers/HomeController");
const accessAuthAdmin = require("../middlewares/accessAuthAdmin");


router.get("/", HomeController.showHome);
router.get("/register", HomeController.showRegister);
router.get("/login", HomeController.showLogin);

router.get("/admin", accessAuthAdmin, HomeController.showAdminPage);


module.exports = router;