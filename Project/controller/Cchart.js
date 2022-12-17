const youtubeFileFunction = require('./youtubeFileFunction');

exports.youtubeRealChartMain = (req, res) => {
    youtubeFileFunction.youtubeFileList((filelist) => {
        youtubeFileFunction.youtubeFileRead(filelist, (data) => {
            // console.log(data);
            if(data) {
                // 파일에서 읽어온 데이터를 전달
                res.render('youtubeRealChart', {data: data, filelist: filelist, fileHour: req.params.num});
                // res.render('test-menu', {data: data, filelist: filelist});
            } else {
                res.send('false');
            }
        });
    });
}

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
                // res.render('test-menu', {data: data, filelist: filelist});
            } else {
                res.send('false');
            }
        });
    });
}