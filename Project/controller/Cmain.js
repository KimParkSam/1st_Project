const youtubeFileFunction = require('./musicFileFunction/youtubeFileFunction');
const melonFileFunction = require('./musicFileFunction/melonFileFunction');
const genieFileFunction = require('./musicFileFunction/genieFileFunction');
// const fs = require('fs').promises;

// exports.home = (req, res) => {
//     let result = {id : req.session.user};
//     if(req.session.user) {
//         result["isLogin"] = true;
//     } else {
//         result["isLogin"] = false;
//     }

//     let view = '';
//     fs.readFile('./views/main.ejs')
//     .then((response) => {
//         console.log(response.toString());
//         view = response.toString();
//         result['view'] = 'main';

//         res.render("home", {result});
//     });
// }

exports.main = (req, res) => {
    let result = {id : req.session.user};

    // 1차 멜론 데이터 함수 실행
    melonFileFunction.melonFileList( (melonfilelist) => {
        melonFileFunction.melonFileRead(melonfilelist, (melondata) => {
            // console.log(data);
            if(melondata) {
                // 파일에서 읽어온 멜론 데이터 저장
                result["melondata"] = {data: melondata, filelist: melonfilelist};

                // 2차 멜론 함수 종료 후 지니 데이터 함수 실행
                genieFileFunction.genieFileList( (geniefilelist) => {
                    genieFileFunction.genieFileRead(geniefilelist, (geniedata) => {
                        // console.log(data);
                        if(geniedata) {
                            // 파일에서 읽어온 지니 데이터 저장
                            result["geniedata"] = {data: geniedata, filelist: geniefilelist};


                            // 3차 멜론 함수 종료 + 지니 함수 종료 후 유튜브 데이터 함수 실행
                            youtubeFileFunction.youtubeFileList( (youtubefilelist) => {
                                youtubeFileFunction.youtubeFileRead(youtubefilelist, (youtubedata) => {
                                    // console.log(data);
                                    if(youtubedata) {
                                        // 파일에서 읽어온 유튜브 데이터 저장
                                        result["youtubedata"] = {data: youtubedata, filelist: youtubefilelist};

                                        // 세션 체크
                                        if(req.session.user) {
                                            result["isLogin"] = true;
                                        } else {
                                            result["isLogin"] = false;
                                        }

                                        // 메인 페이지의 내용 출력
                                        // let view = '';
                                        // fs.readFile('./views/main.ejs')
                                        // .then((response) => {
                                        //     // console.log(response.toString());
                                        //     // view = response.toString();
                                        //     // result['view'] = 'main';
                                        //     // result['viewdata'] = view;
                                        //     // console.log(result.view.main);
                                        //     // console.log(result.view[0].main);

                                        //     res.render("index", {result});
                                        // });

                                        res.render("index", {result});

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
