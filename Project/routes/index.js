const express = require("express");
const controllerUser = require("../controller/Cuser");
const controllerChart = require("../controller/Cchart");
const router = express.Router();

// 메인 페이지 및 세션 체크
router.get("/", controllerUser.main);

// 로그인 and 회원가입 페이지
router.get("/login", controllerUser.login_main);
router.post("/signin", controllerUser.user_login);
router.get('/signup', controllerUser.register);
router.post('/signup', controllerUser.post_signup);
// 로그아웃
router.delete('/logout', controllerUser.user_logout);

// 회원가입 중복 검사
router.post('/check_id', controllerUser.check_id);
router.post('/check_name', controllerUser.check_name);
router.post('/check_mail', controllerUser.check_mail);

// 개인정보 수정
router.get('/Edit_info', controllerUser.Edit_info);
router.patch('/Edit_info_update', controllerUser.Edit_info_update);

// 회원 탈퇴
router.delete('/user_delete', controllerUser.user_delete);

// 마이 페이지
router.get('/mypage', controllerUser.mypage);


// 유튜브 차트 페이지
router.get("/youtubeRealChart", controllerChart.youtubeRealChartMain);
router.get("/youtubeRealChart/:num", controllerChart.youtubeRealChartMainType);




module.exports = router;
