window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }


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







    // 각 사이트 차트 데이터 저장용 및 페이지 이동 시 사용하는 변수
    let ejsDataMelon, ejsDataGenie, ejsDataYoutube;
    // 모든 차트보기 페이지
    window.allChartPage = (allchartpage) => {
        // 데이터 변경 부분
        const container = document.getElementById('layoutSidenav_content');

        axios({
            method: 'get',
            url: '/allChart'
        }).then((response) => {
            // console.log(response.data);
            ejsDataMelon = response.data.melondata.data;
            ejsDataGenie = response.data.geniedata.data;
            ejsDataYoutube = response.data.youtubedata.data;

            // head 태그 변수 설정
            let head = document.getElementsByTagName("head")[0];

            // head 태그 내의 css, cdn, script 개수 확인
            // main 페이지에서 사용하는 기본 값 13개는 냅두고, 추가되는 14부터 변경 작업
            if(head.children.length >= 16) {
                let headlength = head.children.length;
                // console.log(headlength);
                for(let i = headlength-1; i > 15; i--) {
                    head.children[i].remove();
                }
            }

            // ejs 파일의 html 태그 가져오기
            container.innerHTML = allchartpage;

            // css 추가
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "/static/css/allChart.css";
            head.appendChild(link);

            // script 추가
            let script = document.createElement('script');
            script.src = '/static/js/allChart.js';
            script.type = 'text/javascript';
            head.appendChild(script);


            const dayTag = document.getElementById('dayTag');
            const fileday = response.data.youtubedata.filelist[response.data.youtubedata.filelist.length-1].slice(17, -8);
            dayTag.textContent = fileday;
            
        });
    }

});
// 멜론 차트 딜레이

$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon0').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(0).animate({'margin-left':'0px','opacity': '1'},1000);
            }
            
        });       
    });
});



$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon1').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(50).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon2').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(100).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon3').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(150).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon4').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(200).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon5').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(250).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon6').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(300).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon7').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(350).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.melon8').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(400).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
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





// 지니 차트 딜레이

$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie0').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(600).animate({'margin-left':'0px','opacity': '1'},1000);
            }
            
        });       
    });
});



$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie1').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(650).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});

$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie2').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(700).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie3').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(750).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie4').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(800).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie5').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(850).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie6').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(900).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie7').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(950).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie8').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(1000).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});
$(document).ready(function() {
    $(window).scroll( function(){
        $('.genie9').each( function(){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
              //$(this).addClass('anim');
                $(this).delay(1050).animate({'margin-left':'0px', 'opacity': '1'},1000);
            }
            
        });       
    });
});