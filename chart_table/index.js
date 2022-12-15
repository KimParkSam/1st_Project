const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/static", express.static(__dirname+"/static"));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/table', (req, res) => {
    const date = new Date();
    const fileName = './static/chart_data/Youtube/youtubeCharHour-' + date.getFullYear() + '-' + ('00' + (date.getMonth()+1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2) + '-' + ('00' + date.getHours()).slice(-2) + '.json';
    // fs.readFile(fileName, 'utf8')
    // 나중에 사용예정, 지금은 파일 지정해서 사용
    fs.readFile('./static/chart_data/Youtube/youtubeChartHour-2022-12-14-17.json', 'utf8')
    .then((response) => {
        // 불러온 파일의 데이터를 json으로 다시 parse 작업 해준다.
        response = JSON.parse(response);
        console.log(response.data);
        res.render('table', {data: response});
    })
    .catch((err) => {
        res.send('에러 발생');
        throw err;
    });

    // res.render('table');
})

app.listen(port, () => {
    console.log('server open : ', port);
});



