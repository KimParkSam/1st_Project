function register() {
    var form = document.getElementById("form_write");
    var formData = new FormData(form);              
    
    axios({
        method: 'post',
        url: '/board/write',
        data :  formData,
        headers : {
        'Content-Type': 'multipart/form-data'

    }
    }).then((rep) => {return rep.data;} )
        .then((data) => {
        if( data ) {
            alert( "작성 완료" );
            document.location.href='/board';
        }                                    //mp3파일이들어오면 작성완료
    })
    // .then((rep) => {
    //     if( rep.data ) {
    //         alert( "작성 완료" );
    //         document.location.href='/board';
    //     }                                    //위에 방식이랑 같은건데 다른 표현방법
    // })
    .catch((err) => {
        alert( "알 수 없는 문제가 발생했습니다." );
        //다른파일이 들어오면 catch로 오류발생!
    })
}
