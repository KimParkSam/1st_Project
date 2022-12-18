const youtubeFileFunction = require('./youtubeFileFunction');
const melonFileFunction = require('./melonFileFunction');
// const genieFileFunction = require('./genieFileFunction');



// 유튜브 실시간 차트 - 1
exports.youtubeRealChartMain = (req, res) => {
    youtubeFileFunction.youtubeFileList((filelist) => {
        youtubeFileFunction.youtubeFileRead(filelist, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
            } else {
                res.send('false');
            }
        });
    });
}

// 유튜브 실시간 차트 - 2
exports.youtubeRealChartMainType = (req, res) => {
    // console.log('num: ', req.params.num);
    youtubeFileFunction.youtubeFileListHourChange((filelist) => {
        // console.log(filelist[1].slice(28, -5));
        // console.log(filelist[0]);
        youtubeFileFunction.youtubeFileReadHourChange(filelist, req.params.num, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
            } else {
                res.send('false');
            }
        });
    });
}



// 차트 모아보기
// exports.allChartYoutube = (req, res) => {
//     youtubeFileFunction.youtubeFileList((filelist) => {
//         youtubeFileFunction.youtubeFileRead(filelist, (data) => {
//             // console.log(data);
//             if(data) {
//                 // 파일에서 읽어온 데이터를 전달
//                 // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
//                 // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외

//                 const youtubedata = {data: data, filelist: filelist};
//                 // return res.send({youtubedata: data, youtubefilelist: filelist});
//                 // return res.send(youtubedata);
//                 // next();
//             } else {
//                 res.send('false');
//             }
//         });
//     });
// }

// exports.allChartMelmon = (req, res) => {
//     melonFileFunction.melonFileList((filelist) => {
//         melonFileFunction.melonFileRead(filelist, (data) => {
//             // console.log(data);
//             if(data) {
//                 // 파일에서 읽어온 데이터를 전달
//                 // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
//                 // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외
                

//                 const melondata = {data: data, filelist: filelist};
//                 // return res.send({data: data, filelist: filelist});
//                 // return res.send(melondata);
//                 // next();
//             } else {
//                 res.send('false');
//             }
//         });
//     });
// }



exports.allChart = (req, res) => {
    let melondata = {};
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
                // return res.send({data: data, filelist: filelist});
                // return res.send(melondata);
                // next();
                // console.log(melondata);
                // return melondata;



                // 2차 멜론 함수 종료 후 유튜브 데이터 함수 실행
    youtubeFileFunction.youtubeFileList( (youtubefilelist) => {
        youtubeFileFunction.youtubeFileRead(youtubefilelist, (youtubedata) => {
            // console.log(data);
            if(youtubedata) {
                // 파일에서 읽어온 데이터를 전달
                // res.render('allchart', {data: data, filelist: filelist, fileHour: req.params.num});
                // 모아보기 페이지에서는 시간 변경이 없으므로 fileHour 변수는 제외

                youtubedata = {data: youtubedata, filelist: youtubefilelist};
                // return res.send({youtubedata: data, youtubefilelist: filelist});
                // return res.send(youtubedata);
                // next();
                // console.log(youtubedata);
                // return youtubedata;

                res.render('allchart', {melondata: melondata, youtubedata: youtubedata});
                console.log('melondata: ' + melondata.data[0].title );
                // console.log(' ');
                // console.log('youtubedata: ' + youtubedata.data);

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
