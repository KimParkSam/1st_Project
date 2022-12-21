const express = require("express");
const controllerMain = require("../controller/Cmain");
const controllerUser = require("../controller/Cuser");
const controllerChart = require("../controller/Cchart");
const controllerCrawling = require("../controller/Ccrawling");
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')

// 메인 페이지 및 세션 체크
router.get("/", controllerMain.main);

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

// 마이 페이지 업로드 설정
const upload = multer({
    storage: multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, 'static/uploads/');
      },
      filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        cb(null, req.session.user + ext);
      }
    })
  });

// 마이 페이지 파일 업로드
router.post('/upload_file', upload.single('img'), controllerUser.upload_file);

// 차트 모아보기 페이지
router.get("/allChart", controllerChart.allChart);
// 유튜브 차트 페이지
router.get("/youtubeRealChart", controllerChart.youtubeRealChartMain);
router.get("/youtubeRealChart/:num", controllerChart.youtubeRealChartMainType);


// 크롤링 요청 페이지
router.get("/crawling/melon", controllerCrawling.melonCrawlingPage);
router.get("/crawling/melonday", controllerCrawling.melonDayCrawlingPage);
router.get("/crawling/genie", controllerCrawling.genieCrawlingPage);
router.get("/crawling/geniemovie", controllerCrawling.genieMovieCrawlingPage);
router.get("/crawling/youtube", controllerCrawling.youtubeCrawlingPage);
router.get("/crawling/youtubemovie", controllerCrawling.youtubeMovieCrawlingPage);


module.exports = router;
