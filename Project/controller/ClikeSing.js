const { LikeSing } = require('../model/indexLikeSing');

exports.LikeSingSearch = (userSession, cb) => {
    if(userSession === undefined) {
        cb('');
    } else {
        LikeSing.findAll({
            where: {
                user_id: userSession
            }
        }).then((rows) => {
            // console.log(rows);
            // console.log(rows[0].title);
            // 처음 사용자는 좋아요 등록이 없으므로 Error 발생확인
            // 초기 값으로 데이터 저장
            if(rows[0] === undefined) {
                const data = {
                    "albumImg": '',
                    "title": '',
                    "singer": '',
                }
                rows.push(data);
            }
            cb(rows);
        });
    }
};

// 좋아요 등록
exports.LikeSingRegister = (req, res) => {
    // console.log(req.body);
    // console.log(req.session.user);

    LikeSing.create({
        user_id: req.session.user,
        title: req.body.likeTitle,
        singer: req.body.likeSinger,
        album_img: req.body.likeImg
    })
    .then((result) => {
        // console.log(result);
        if(result) {
            res.send(true);
        }
    })
    .catch((err) => {
        throw err;
    });
}

// 좋아요 삭제
exports.LikeSingDelete = (req, res) => {
    // console.log(req.body);
    // console.log(req.session.user);

    LikeSing.destroy({
        where: {
            user_id: req.session.user,
            title: req.body.likeTitle,
            singer: req.body.likeSinger
        }
    })
    .then((result) => {
        // console.log(result);
        if(result) {
            res.send(true);
        }
    })
    .catch((err) => {
        throw err;
    });
}
