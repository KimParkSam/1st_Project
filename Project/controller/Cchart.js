const youtubeFileFunction = require('./musicFileFunction/youtubeFileFunction');
const melonFileFunction = require('./musicFileFunction/melonFileFunction');
const genieFileFunction = require('./musicFileFunction/genieFileFunction');
const ClikeSingFunction = require('./ClikeSing');
const { LikeSing } = require('../model/indexLikeSing');

// 유튜브 실시간 차트 - 1
exports.youtubeRealChartMain = (req, res) => {
    let result = {id : req.session.user};

    youtubeFileFunction.youtubeFileList((filelist) => {
        youtubeFileFunction.youtubeFileRead(filelist, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: ''};
                ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                    result['likeSing'] = {data: rows};
                    res.render('youtubeRealChart', {result});
                });
            } else {
                res.send('false');
            }
        });
    });
}

// 유튜브 실시간 차트 - 2
exports.youtubeRealChartMainType = (req, res) => {
    let result = {id : req.session.user};
    // console.log('num: ', req.params.num);
    youtubeFileFunction.youtubeFileListHourChange((filelist) => {
        // console.log(filelist[1].slice(28, -5));
        // console.log(filelist[0]);
        youtubeFileFunction.youtubeFileReadHourChange(filelist, req.params.num, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: ''};
                // res.render('youtubeRealChart', {result});
                // res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({result});
                ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                    result['likeSing'] = {data: rows};
                    res.send({result});
                    // res.render('youtubeRealChart', {result});
                });
            } else {
                res.send('false');
            }
        });
    });
}


// 차트 모아보기
exports.allChart = (req, res) => {
    let result = {id : req.session.user};

    // 1차 멜론 데이터 함수 실행
    melonFileFunction.melonFileList( (melonfilelist) => {
        melonFileFunction.melonFileRead(melonfilelist, (melondata) => {
            // console.log(data);
            if(melondata) {
                // 파일에서 읽어온 데이터를 전달
                // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                // console.log(melondata);
                result["melondata"] = {data: melondata, filelist: melonfilelist};

                // 2차 멜론 함수 종료 후 지니 데이터 함수 실행
                genieFileFunction.genieFileList( (geniefilelist) => {
                    genieFileFunction.genieFileRead(geniefilelist, (geniedata) => {
                        // console.log(data);
                        if(geniedata) {
                            // 파일에서 읽어온 데이터를 전달
                            // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                            // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                            result["geniedata"] = {data: geniedata, filelist: geniefilelist};


                            // 3차 멜론 함수 종료 + 지니 함수 종료 후 유튜브 데이터 함수 실행
                            youtubeFileFunction.youtubeFileList( (youtubefilelist) => {
                                youtubeFileFunction.youtubeFileRead(youtubefilelist, (youtubedata) => {
                                    // console.log(data);
                                    if(youtubedata) {
                                        // 파일에서 읽어온 데이터를 전달
                                        // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                                        // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                                        result["youtubedata"] = {data: youtubedata, filelist: youtubefilelist};

                                        // 세션 체크
                                        if(req.session.user) {
                                            result["isLogin"] = true;
                                        } else {
                                            result["isLogin"] = false;
                                        }

                                        res.render('allChart', {result});

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

