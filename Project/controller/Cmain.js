const youtubeFileFunction = require('./youtubeFileFunction');
const melonFileFunction = require('./melonFileFunction');
const genieFileFunction = require('./genieFileFunction');

// exports.main = (req, res) => {
//     if(req.session.user){
//         res.render("index", { isLogin : true, id : req.session.user });
//     }  else {
//         res.render("index", { isLogin : false });
//     }
// }


exports.main = (req, res) => {
    let melondata = {};
    let geniedata = {};
    let youtubedata = {};

    // 1차 멜론 데이터 함수 실행
    melonFileFunction.melonFileList( (melonfilelist) => {
        melonFileFunction.melonFileRead(melonfilelist, (melondata) => {
            // console.log(data);
            if(melondata) {
                // 파일에서 읽어온 데이터를 전달
                // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                // console.log(melondata);
                melondata = {data: melondata, filelist: melonfilelist};

                // 2차 멜론 함수 종료 후 지니 데이터 함수 실행
                genieFileFunction.genieFileList( (geniefilelist) => {
                    genieFileFunction.genieFileRead(geniefilelist, (geniedata) => {
                        // console.log(data);
                        if(geniedata) {
                            // 파일에서 읽어온 데이터를 전달
                            // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                            // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                            geniedata = {data: geniedata, filelist: geniefilelist};


                            // 3차 멜론 함수 종료 + 지니 함수 종료 후 유튜브 데이터 함수 실행
                            youtubeFileFunction.youtubeFileList( (youtubefilelist) => {
                                youtubeFileFunction.youtubeFileRead(youtubefilelist, (youtubedata) => {
                                    // console.log(data);
                                    if(youtubedata) {
                                        // 파일에서 읽어온 데이터를 전달
                                        // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                                        // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                                        youtubedata = {data: youtubedata, filelist: youtubefilelist};

                                        if(req.session.user){
                                            res.render("index", { isLogin : true, id : req.session.user, melondata: melondata, geniedata: geniedata, youtubedata: youtubedata });
                                            // res.render('allchart', {melondata: melondata, geniedata: geniedata, youtubedata: youtubedata});
                                        }  else {
                                            res.render("index", { isLogin : false, id : req.session.user, melondata: melondata, geniedata: geniedata, youtubedata: youtubedata });
                                        }

                                    } else {
                                        res.send('false');
                                    }
                                });
                            });
                        } else {
                            res.send('false');
                        }
                    });
                });
            } else {
                res.send('false');
            }
        });
    });
}
