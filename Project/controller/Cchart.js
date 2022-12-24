const youtubeFileFunction = require('./musicFileFunction/youtubeFileFunction');
const melonFileFunction = require('./musicFileFunction/melonFileFunction');
const genieFileFunction = require('./musicFileFunction/genieFileFunction');
const ClikeSingFunction = require('./ClikeSing');
const { LikeSing } = require('../model/indexLikeSing');

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
                                            res.render('allChart', {result});
                                        } else {
                                            result["isLogin"] = false;
                                            res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
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



// 유튜브 실시간 차트 - 1
exports.youtubeRealChartMain = (req, res) => {
    let result = {id : req.session.user};

    youtubeFileFunction.youtubeFileList((filelist) => {
        youtubeFileFunction.youtubeFileRead(filelist, (data) => {
            // console.log(data);
            // 세션 체크
            if(req.session.user) {
                result["isLogin"] = true;
            } else {
                result["isLogin"] = false;
            }

            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: ''};

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.render('youtubeRealChart', {result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }
            } else {
                res.send('false');
            }
        });
    });
}

// 유튜브 실시간 차트 - 2 - 시간변경
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
                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.send({result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}


// 유튜브 뮤직비디오 차트 - 1
exports.youtubeMovieChart = (req, res) => {
    let result = {id : req.session.user};

    youtubeFileFunction.youtubeMovieFileList((filelist) => {
        youtubeFileFunction.youtubeMovieFileRead(filelist, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubeMoviedata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                // result['geniedata'] = {data: ''};
                // result['melondata'] = {data: ''};

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        console.log('asdasd', rows);
                        result['likeSing'] = {data: rows};
                        res.render('youtubeMovieChart', {result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}

// 유튜브 뮤직비디오 차트 - 2 - 시간변경
exports.youtubeMovieChartType = (req, res) => {
    let result = {id : req.session.user};
    // console.log('num: ', req.params.num);
    youtubeFileFunction.youtubeMovieFileListHourChange((filelist) => {
        // console.log(filelist[1].slice(28, -5));
        // console.log(filelist[0]);
        youtubeFileFunction.youtubeMovieFileReadHourChange(filelist, req.params.num, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubeMoviedata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                // result['geniedata'] = {data: ''};
                // result['melondata'] = {data: ''};
                // res.render('youtubeRealChart', {result});
                // res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({result});

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.send({result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}


// 멜론 실시간 차트
exports.melonRealChartMain = (req, res) => {
    let result = {id : req.session.user};

    melonFileFunction.melonFileList((filelist) => {
        melonFileFunction.melonFileRead(filelist, (data) => {
            // console.log(data);
            
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: ''};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: data, filelist: filelist, fileHour: req.params.num};

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.render('melonRealChart', {result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}

// 멜론 실시간 차트 - 2 - 시간변경
exports.melonRealChartMainType = (req, res) => {
    let result = {id : req.session.user};
    // console.log('num: ', req.params.num);
    melonFileFunction.melonFileListHourChange((filelist) => {
        // console.log(filelist[1].slice(28, -5));
        // console.log(filelist[0]);
        melonFileFunction.melonFileReadHourChange(filelist, req.params.num, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: ''};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                // res.render('youtubeRealChart', {result});
                // res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({result});

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.send({result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}


// 멜론 일간 차트

exports.melonDayChartMain = (req, res) => {
    let result = {id : req.session.user};

    melonFileFunction.melonDayFileList((filelist) => {
        melonFileFunction.melonDayFileRead(filelist, (data) => {
            // console.log(data);
            
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: ''};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: data, filelist: filelist, fileHour: req.params.num};

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.render('melonDayChart', {result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}


// 멜론 일간 차트 - 2 - 시간변경
exports.melonDayChartMainType = (req, res) => {
    let result = {id : req.session.user};
    // console.log('num: ', req.params.num);
    melonFileFunction.melonDayFileListHourChange((filelist) => {

        melonFileFunction.melonDayFileReadHourChange(filelist, req.params.num, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                result['youtubedata'] = {data: ''};
                result['geniedata'] = {data: ''};
                result['melondata'] = {data: data, filelist: filelist, fileHour: req.params.num};
                // res.render('youtubeRealChart', {result});
                // res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({data: data, filelist: filelist, fileHour: req.params.num});
                // res.send({result});

                // 세션 체크
                if(req.session.user) {
                    result["isLogin"] = true;
                    ClikeSingFunction.LikeSingSearch(req.session.user, (rows) => {
                        result['likeSing'] = {data: rows};
                        res.send({result});
                    });
                } else {
                    result["isLogin"] = false;
                    res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
                }

            } else {
                res.send('false');
            }
        });
    });
}
