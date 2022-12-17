const express = require("express");
const controllerUser = require("../controller/Cuser");
const controllerChart = require("../controller/Cchart");
const router = express.Router();

router.get("/", controllerUser.main);
router.get("/login", controllerUser.loginPage);
router.post("/login", controllerUser.login);
router.delete("/logout", controllerUser.logout);


// 멜론 차트 페이지
router.get("/youtubeRealChart", controllerChart.youtubeRealChartMain);
router.get("/youtubeRealChart/:num", controllerChart.youtubeRealChartMainType);

module.exports = router;
