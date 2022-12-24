const fs = require('fs').promises;

// function melonFileList(cb) {
exports.melonFileList = function (cb) {
    fs.readdir('./static/res/chart_data/Melon')
    .then((filelist) => {
        const lastFile = filelist.length - 1;
        // 'melonChartHour-2022-12-16-17.json' => 2022-12-16-17
        // console.log(filelist[lastFile].slice(15, -8));
        // 2022-12-16
        // console.log(filelist[lastFile].slice(15, -8));

        const date = new Date();
        // 비교용 날짜, ex) 2022-12-17
        const compareDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);

        // 임시 변수 설정 (현재 날짜 파일 저장 변수)
        const temp = [];

        // 리스트에서 현재 날짜 파일만 추출
        filelist.forEach((file, index) => {
            if(compareDate == file.slice(15, -8)) {
                // console.log('b: ', file.slice(15, -8));
                temp[index] = file;
            }
        });
        // 00시 이후 크롤링 실행 전인 경우 현재 날짜 파일이 없을 수 있으므로, 제일 최신 파일 저장
        if(temp.length == 0) {
            temp[0] = filelist[lastFile];
        }
        
        // temp 리스트 내부의 undefined 값 제거
        for(let i = 0; i < temp.length; i++){ 
            if (temp[i] === undefined) { 
              temp.splice(i, 1); 
              i--; 
            }
        }
        cb(temp);
    })
    .catch((err) => {
        throw err;
    });
}


// json 파일 데이터 읽어오는 함수
// function melonFileRead(filelist, cb) {
exports.melonFileRead = function (filelist, cb) {
    const date = new Date();
    // console.log(filelist[filelist.length-1]);
    fs.readFile('./static/res/chart_data/Melon/'+filelist[filelist.length-1], 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        // console.log(response.data);
        cb(response.data);
    })
    .catch((err) => {
        // res.send('에러 발생');
        throw err;
    });
}


// 시간 변경 함수를 위한 File List 함수 재생성 (동일 함수 변경해서 사용해도 되지만, 지금은 안정성을 위해 새로 생성)
exports.melonFileListHourChange = function (cb) {
    fs.readdir('./static/res/chart_data/Melon')
    .then((filelist) => {
        const lastFile = filelist.length - 1;
        // 'melonChartHour-2022-12-16-17.json' => 2022-12-16-17
        // console.log(filelist[lastFile].slice(15, -5));
        // 2022-12-16
        // console.log(filelist[lastFile].slice(15, -8));

        const date = new Date();
        // 비교용 날짜, ex) 2022-12-17
        const compareDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);

        // 임시 변수 설정 (현재 날짜 파일 저장 변수)
        const temp = [];

        // 리스트에서 현재 날짜 파일만 추출
        filelist.forEach((file, index) => {
            if(compareDate == file.slice(15, -8)) {
                // console.log('b: ', file.slice(17, -8));
                temp[index] = file;
            }
        });
        // 00시 이후 크롤링 실행 전인 경우 현재 날짜 파일이 없을 수 있으므로, 제일 최신 파일 저장
        if(temp.length == 0) {
            temp[0] = filelist[lastFile];
        }
        
        // temp 리스트 내부의 undefined 값 제거
        for(let i = 0; i < temp.length; i++){ 
            if (temp[i] === undefined) { 
                temp.splice(i, 1); 
                i--; 
            }
        }
        cb(temp);
    })
    .catch((err) => {
        throw err;
    });
}




// json 파일 데이터 읽어오는 함수
exports.melonFileReadHourChange = function (filelist, fileHour, cb) {
    // console.log('fileHour', fileHour);
    const date = new Date();
    console.log(filelist[filelist.length-1]);
    // console.log(filelist[0].slice(26, -5));

    let fileName = '';
    for(let i = 0; i < filelist.length; i++) {
        if(fileHour == filelist[i].slice(26, -5)) {
            fileName = filelist[i];
        }
    }
    if(fileName == undefined) {
        fileName = filelist[filelist.length-1];
    }

    console.log('fileName: ', fileName);

    fs.readFile('./static/res/chart_data/Melon/'+fileName, 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        // console.log(response.data);
        cb(response.data);
    })
    .catch((err) => {
        // res.send('에러 발생');
        throw err;
    });
}





// 멜론 일간 함수

exports.melonDayFileList = function (cb) {
    fs.readdir('./static/res/chart_data/MelonDay')
    .then((filelist) => {
        const lastFile = filelist.length - 1;
        // 'melonChartHour-2022-12-16-17.json' => 2022-12-16-17
        // console.log(filelist[lastFile].slice(15, -8));
        // 2022-12-16
        // console.log(filelist[lastFile].slice(15, -8));

        const date = new Date();
        // 비교용 날짜, ex) 2022-12-17
        const compareDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);

        // 임시 변수 설정 (현재 날짜 파일 저장 변수)
        const temp = [];

        // 리스트에서 현재 날짜 파일만 추출
        filelist.forEach((file, index) => {
            if(compareDate == file.slice(14, -8)) {
                // console.log('b: ', file.slice(14, -8));
                temp[index] = file;
            }
        });
        // 00시 이후 크롤링 실행 전인 경우 현재 날짜 파일이 없을 수 있으므로, 제일 최신 파일 저장
        if(temp.length == 0) {
            temp[0] = filelist[lastFile];
        }
        
        // temp 리스트 내부의 undefined 값 제거
        for(let i = 0; i < temp.length; i++){ 
            if (temp[i] === undefined) { 
                temp.splice(i, 1); 
                i--; 
            }
        }
        cb(temp);
    })
    .catch((err) => {
        throw err;
    });
}
    

// json 파일 데이터 읽어오는 함수
exports.melonDayFileRead = function (filelist, cb) {
    const date = new Date();
    // console.log(filelist[filelist.length-1]);
    fs.readFile('./static/res/chart_data/MelonDay/'+filelist[filelist.length-1], 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        // console.log(response.data);
        cb(response.data);
    })
    .catch((err) => {
        // res.send('에러 발생');
        throw err;
    });
}






// 멜론 일간 함수 - 시간변경
    
// 시간 변경 함수를 위한 File List 함수 재생성 (동일 함수 변경해서 사용해도 되지만, 지금은 안정성을 위해 새로 생성)
exports.melonDayFileListHourChange = function (cb) {
    fs.readdir('./static/res/chart_data/MelonDay')
    .then((filelist) => {
        const lastFile = filelist.length - 1;
        // 'melonChartHour-2022-12-16-17.json' => 2022-12-16-17
        // console.log(filelist[lastFile].slice(15, -5));
        // 2022-12-16
        // console.log(filelist[lastFile].slice(15, -8));

        const date = new Date();
        // 비교용 날짜, ex) 2022-12-17
        const compareDate = date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);

        // 임시 변수 설정 (현재 날짜 파일 저장 변수)
        const temp = [];

        // 리스트에서 현재 날짜 파일만 추출
        filelist.forEach((file, index) => {
            if(compareDate == file.slice(14, -8)) {
                // console.log('b: ', file.slice(17, -8));
                temp[index] = file;
            }
        });
        // 00시 이후 크롤링 실행 전인 경우 현재 날짜 파일이 없을 수 있으므로, 제일 최신 파일 저장
        if(temp.length == 0) {
            temp[0] = filelist[lastFile];
        }
        
        // temp 리스트 내부의 undefined 값 제거
        for(let i = 0; i < temp.length; i++){ 
            if (temp[i] === undefined) { 
                temp.splice(i, 1); 
                i--; 
            }
        }
        cb(temp);
    })
    .catch((err) => {
        throw err;
    });
}




// json 파일 데이터 읽어오는 함수
exports.melonDayFileReadHourChange = function (filelist, fileHour, cb) {
    // console.log('fileHour', fileHour);
    const date = new Date();
    console.log(filelist[filelist.length-1]);
    console.log('asd123 ', filelist[0].slice(25, -5));

    let fileName = '';
    for(let i = 0; i < filelist.length; i++) {
        if(fileHour == filelist[i].slice(25, -5)) {
            fileName = filelist[i];
        }
    }
    if(fileName == undefined) {
        fileName = filelist[filelist.length-1];
    }

    console.log('fileName: ', fileName);

    fs.readFile('./static/res/chart_data/MelonDay/'+fileName, 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        // console.log(response.data);
        cb(response.data);
    })
    .catch((err) => {
        // res.send('에러 발생');
        throw err;
    });
}
