const { LikeSing } = require('../model/indexLikeSing');
const { User } = require('../model/indexUser');

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



// 마이 페이지 좋아요 삭제
exports.Mypage_LikeSingDelete = (req, res) => {
    let result = {id : req.session.user};
    // console.log(req.body);
    // console.log(req.session.user);

    // 좋아요 삭제
    LikeSing.destroy({
        where: {
            user_id: req.session.user,
            title: req.body.likeTitle,
            singer: req.body.likeSinger
        }
    })
    .then(() => {
        // 마이 페이지 좋아요 리스트(4개) 재출력
        LikeSing.findAll({
            where: {
                user_id: `${req.session.user}`
            },
            order: [['no', 'DESC']]
        }).then((rows) => {
            // console.log(rows);
        
            if(rows.length < 4) {
                // console.log('4개이하');
                for(let i = 0; i < 4; i++) {
                    if(rows[i] === undefined) {
                        let likeData = {
                            user_id : '정보 없음',
                            title : '정보 없음',
                            singer : '정보 없음',
                            album_img : '/static/res/image/empty_list.jpg'
                        };
        
                        rows.push(likeData);
                        console.log('test', rows);
                    }
                }
                result["likesing"] = rows;
                // console.log(result.likesing[0].title);
                res.send({result});
            
            } else {
                // 좋아요 4개 이상인 경우
                result["likesing"] = rows;
                // console.log(result.likesing[0].title);
                res.send({result});
            }
        })
        .catch((err) => {
            throw err;
        });

    })
    .catch((err) => {
        throw err;
    });
}












//마이페이지
exports.mypage = async (req, res) => {
    let result = {id : req.session.user};

    // 세션 체크
    if(req.session.user) {
        result["isLogin"] = true;

        // 유저 name 체크
        let result2 = await User.findOne({
            where : { id : `${req.session.user}`}
        });
        // console.log(result2.user_img);

        // 프로필 이미지 파일이 없으면 기본 이미지 설정
        if(!result2.user_img) {
            result2.user_img = 'd_img.png';
        }

        LikeSing.findAll({
            where: {
                user_id: `${req.session.user}`
            },
            order: [['no', 'DESC']]
        }).then((rows) => {
            // console.log(rows);
            // console.log(rows[0].album_img);

            if(rows.length < 4) {
                // console.log('4개이하');
                for(let i = 0; i < 4; i++) {
                    if(rows[i] === undefined) {
                        let likeData = {
                            user_id : '정보 없음',
                            title : '정보 없음',
                            singer : '정보 없음',
                            album_img : '/static/res/image/empty_list.jpg'
                        };

                        rows.push(likeData);
                        console.log('test', rows);
                    }
                }


                result["likesing"] = rows;
                // console.log(result.likesing[0].title);
                // res.render('mypage', { data : result2, result});
            
            } else {
                // 좋아요 4개 이상인 경우
                result["likesing"] = rows;
                // console.log(result.likesing[0].title);
                // res.render('mypage', { data : result2, result});

            }

        }).then(() => {
            Board.findAll({
                where: {
                    id: `${req.session.user}`
                },
                order: [["number", "DESC"]],
            }).then((rows)=>{
                if(rows.length < 5) {
                    for(let i=0; i < 5; i++ ){
                        if((rows[i] === undefined)){
                            let boardData = {
                                number : '정보 없음',
                                title : '정보 없음',
                                id : '정보 없음',
                                content : '정보 없음',
                                filename : '정보 없음',
                                date : '정보 없음',
                                hit : '정보 없음'
                            };
                            rows.push(boardData);
                            console.log('boardData : ', boardData);
                        }
                    }
        
                    result["Board"] = rows;
                    res.render('mypage', { data : result2, result});
                }
                else {
                    result["Board"] = rows;
                    res.render('mypage', { data : result2, result});
                }
            });
        });
    } else {
        result["isLogin"] = false;
        res.send("<script>alert('로그인 후 이용가능합니다.');location.href='/login';</script>");
    }
  
};