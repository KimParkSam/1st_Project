window.addEventListener('DOMContentLoaded', event => {
    //뮤직비디오 랜덤재생 함수 및 변수 설정
    const musicData = [
        "afterLike",
        "attention",
        "shutDown",
        "antifragile",
        "dreamers"
    ];

    function randomValueFromArray(array) {
        const random = Math.floor(Math.random() * array.length);

        return array[random];
    }

    let randomMusic = randomValueFromArray(musicData);

    var source = document.querySelector("#source");
    source.setAttribute('src', `static/res/video/${randomMusic}.mp4`);
    var video = document.querySelector("#myVideo");
    video.load();

    

    // ***********멜론************
    // 차트 모아보기에서는 기본 설정 값 10 설정
    let viewCount = 10;

    // 스크립트 데이터로 테이블 출력하는 함수
    tableDataMelon = (data, viewCount, btnId) => {
        const melonTable = document.querySelectorAll('tbody')[0];
        let temp = '';
        
        for(let i = 0; i < 10; i++) {
            temp += `<tr class='melon${i}'>
                <td rowspan="2">${data[i].rank}</td>
                <td rowspan="2"><img src='${data[i].albumImg}'></td>
                <td>${data[i].singer}</td>
                </tr>
                <tr>
                <td>${data[i].title}</td>
                </tr>`;
        }
        melonTable.innerHTML = temp;
    }

    // ******처음 출력을 위한 초기 실행 함수******
    // 1번 실행해서 데이터 출력
    // 초기 실행이라서 btnId 변수 대신에 1값 고정
    tableDataMelon(ejsDataMelon, viewCount, 1);

    //  ***********지니************
    // 차트 모아보기에서는 기본 설정 값 10 설정

    // 스크립트 데이터로 테이블 출력하는 함수
    tableDataGenie = (data, viewCount, btnId) => {
        const genieTable = document.querySelectorAll('tbody')[1];
        let temp = '';
        
        for(let i = 0; i < 10; i++) {
            temp += `<tr class='genie${i}'>
                <td rowspan="2">${data[i].rank}</td>
                <td rowspan="2"><img src='${data[i].albumImg}'></td>
                <td>${data[i].singer}</td>
                </tr>
                <tr>
                <td>${data[i].title}</td>
                </tr>`;
        }
        genieTable.innerHTML = temp;
    }

    // ******처음 출력을 위한 초기 실행 함수******
    // 1번 실행해서 데이터 출력
    // 초기 실행이라서 btnId 변수 대신에 1값 고정
    tableDataGenie(ejsDataGenie, viewCount, 1);


    // ***********유튜브************
    // 스크립트 데이터로 테이블 출력하는 함수
    tableDataYoutube = (data, viewCount, btnId) => {
        const youtubeTable = document.querySelectorAll('tbody')[2];
        let temp = '';
    
        for(let i = 0; i < 10; i++) {
            temp += `<tr class='youtube${i}'>
                <td rowspan="2">${data[i].rank}</td>
                <td rowspan="2"><img src='${data[i].albumImg}'></td>
                <td>${data[i].singer}</td>
                </tr>
                <tr>
                <td>${data[i].title}</td>
                </tr>`;
        }
        youtubeTable.innerHTML = temp;
    }

    // ******처음 출력을 위한 초기 실행 함수******
    // 1번 실행해서 데이터 출력
    // 초기 실행이라서 btnId 변수 대신에 1값 고정
    tableDataYoutube(ejsDataYoutube, viewCount, 1);

    

    // 멜론 차트 딜레이
    $(window).scroll(function(){
        $('.melon0').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(0).animate({'margin-left':'0px','opacity': '1'},1000);
            }
        });

        $('.melon1').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(50).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon2').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(100).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon3').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(150).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon4').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(200).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon5').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(250).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon6').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(300).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon7').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(350).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon8').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(400).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });

        $('.melon9').each( function(){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                //$(this).addClass('anim');
                $(this).delay(450).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
        });
    });

});
