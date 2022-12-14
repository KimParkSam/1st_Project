// 샘플용

const express = require("express");
const controllerUser = require("../controller/Cuser");
const router = express.Router();

router.get("/", controllerUser.main);
router.get("/login", controllerUser.loginPage);
router.post("/login", controllerUser.login);
router.delete("/logout", controllerUser.logout);


module.exports = router;
