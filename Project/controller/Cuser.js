// 샘플용

const { User } = require('../model/indexUser');
// const session = require('express-session');

exports.main = (req, res) => {
    if(req.session.user) {
        console.log('로그인 한 상태');
        res.render('index', {isLogin: true});
    } else {
        res.render('index', {isLogin: false});
    }
}

exports.loginPage = (req, res) => {
    res.render('login');
}

// const user = {'id': 'test', 'pw': '1234'};
exports.login = (req, res) => {
    // if(req.body.id == user.id && req.body.pw == user.pw) {
    if(req.body.id == 'test' && req.body.pw == '1234') {
        req.session.user = req.body.id;
        res.send('로그인 성공');
    } else {
        res.send('로그인 실패');
    }
}

exports.logout = (req, res) => {
    req.session.destroy(function(err) {
        if(err) throw err;
        
        res.send('로그아웃 성공');
    });
}



exports.login = async (req, res) => {
    let result = await User.findOne({
        where: {
            id: req.body.id,
            pw: req.body.pw
        }
    });
    if(result) {
        req.session.user = req.body.id;
        res.send(true);
    } else {
        res.send(false);
    }
    console.log('session: ', req.session.user);
}


exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        
        res.send('로그아웃 성공');
    });
}


