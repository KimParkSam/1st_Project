const melonCrawling = require('./crawlingFunction/puppeteer_Melon');
const genieCrawling = require('./crawlingFunction/puppeteer_Genie');
const youtubeCrawling = require('./crawlingFunction/puppeteer_Youtube');

// 멜론 크롤링 - top 100
exports.melonCrawlingPage = (req, res) => {
    melonCrawling.melonCrawlingFunction((result) => {
        if(result === true) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}

// 멜론 크롤링 - 일간
exports.melonDayCrawlingPage = (req, res) => {
    melonCrawling.melonDayCrawlingFunction((result) => {
        if(result === true) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}

// 지니 크롤링 - top 100
exports.genieCrawlingPage = (req, res) => {
    genieCrawling.genieCrawlingFunction((result) => {
        if(result === true) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}

// 지니 크롤링 - 뮤직비디오
exports.genieMovieCrawlingPage = (req, res) => {
    genieCrawling.genieMovieCrawlingFunction((result) => {
        if(result === true) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}




// 유튜브 크롤링 - top 100
exports.youtubeCrawlingPage = (req, res) => {
    youtubeCrawling.youtubeCrawlingFunction((result) => {
        if(result === true) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}


// 유튜브 크롤링 - 뮤직비디오
exports.youtubeMovieCrawlingPage = (req, res) => {
    youtubeCrawling.youtubeMovieCrawlingFunction((result) => {
        if(result === true) {
            res.send(true);
        } else {
            res.send(false);
        }
    });
}

