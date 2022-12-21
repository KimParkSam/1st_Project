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








    // // 각 사이트 차트 데이터 저장용 및 페이지 이동 시 사용하는 변수
    // let ejsDataMelon, ejsDataGenie, ejsDataYoutube;
    // // 모든 차트보기 페이지
    // window.allChartPageFunction = (allChartPage) => {
    //     // 데이터 변경 부분
    //     const container = document.getElementById('layoutSidenav_content');

    //     // console.log('a', allChartPage);
    //     let html = allChartPage;
    //     // let html = '';


    //     axios({
    //         method: 'get',
    //         url: '/allChart'
    //     }).then((response) => {
    //         // console.log(response.data.result);
    //         ejsDataMelon = response.data.result.melondata.data;
    //         ejsDataGenie = response.data.result.geniedata.data;
    //         ejsDataYoutube = response.data.result.youtubedata.data;

    //         // head 태그 변수 설정
    //         let head = document.getElementsByTagName("head")[0];

    //         // head 태그 내의 css, cdn, script 개수 확인
    //         // main 페이지에서 사용하는 기본 값 18개는 냅두고, 추가되는 19부터 변경 작업
    //         // index 0부터라서 1개 차이
    //         // console.log(head.children.length);
    //         if(head.children.length > 17) {
    //             let headlength = head.children.length;
    //             // console.log(headlength);
    //             for(let i = headlength-1; i > 17; i--) {
    //                 head.children[i].remove();
    //             }
    //         }

    //         // ejs 파일의 html 태그 가져오기
    //         // let html = allchartpage;
    //         // container.innerHTML = allchartpage;
    //         container.innerHTML = html;

    //         // css 추가
    //         let link = document.createElement("link");
    //         link.rel = "stylesheet";
    //         link.type = "text/css";
    //         link.href = "/static/css/allChart.css";
    //         head.appendChild(link);

    //         // script 추가
    //         let script = document.createElement('script');
    //         script.src = '/static/js/allChart.js';
    //         script.type = 'text/javascript';
    //         head.appendChild(script);


    //         const dayTag = document.getElementById('dayTag');
    //         const fileday = response.data.result.youtubedata.filelist[response.data.result.youtubedata.filelist.length-1].slice(17, -8);
    //         dayTag.textContent = fileday;

    //     });
    // }

    // // 유튜브 실시간 차트 페이지
    // window.yotubueRealChartPage = (youtubechartrealpage) => {
    //     // 데이터 변경 부분
    //     const container = document.getElementById('layoutSidenav_content');

    //     axios({
    //         method: 'get',
    //         url: '/youtubeRealChart'
    //     }).then((response) => {
    //         // console.log(youtubechartrealpage);
    //         // console.log(response.data.fileHour);
    //         // console.log(response.data.data);
    //         ejsDataYoutube = response.data.data;

    //         // head 태그 변수 설정
    //         let head = document.getElementsByTagName("head")[0];

    //         // head 태그 내의 css, cdn, script 개수 확인
    //         // main 페이지에서 사용하는 기본 값 13개는 냅두고, 추가되는 14부터 변경 작업
    //         if(head.children.length >= 16) {
    //             let headlength = head.children.length;
    //             // console.log(headlength);
    //             for(let i = headlength-1; i > 15; i--) {
    //                 head.children[i].remove();
    //             }
    //         }

    //         // ejs 파일의 html 태그 가져오기
    //         container.innerHTML = youtubechartrealpage;

    //         // css 추가
    //         let link = document.createElement("link");
    //         link.rel = "stylesheet";
    //         link.type = "text/css";
    //         link.href = "/static/css/youtbeRealChart.css";
    //         head.appendChild(link);

    //         // script 추가
    //         let script = document.createElement('script');
    //         script.src = '/static/js/youtbeRealChart.js';
    //         script.type = 'text/javascript';
    //         head.appendChild(script);


    //         const dayTag = document.getElementById('dayTag');
    //         const fileday = response.data.filelist[response.data.filelist.length-1].slice(17, -8);
    //         dayTag.textContent = fileday;

    //         let fileHour = response.data.fileHour;
    //         if (fileHour == undefined) {
    //             fileHour = response.data.filelist[response.data.filelist.length-1].slice(28, -5);
    //         }

    //         // 메뉴 항목에 파일 리스트 출력
    //         let selectoption = '';

    //         for (let i = 0; i < response.data.filelist.length; i++) {
    //             if (fileHour == response.data.filelist[i].slice(28, -5)) {
    //                 selectoption += `<option value="${response.data.filelist[i].slice(28, -5)}" selected>${response.data.filelist[i].slice(28, -5)}:00</option>`
    //             } else {
    //                 selectoption += `<option value="${response.data.filelist[i].slice(28, -5)}">${response.data.filelist[i].slice(28, -5)}:00</option>`
    //             }
    //         }
    //         const selectDay = document.querySelectorAll('select')[0]
    //         selectDay.innerHTML = selectoption;

    //     });
    // }









    // 멜론 차트 딜레이

    // $(window).scroll(function(){
    //     $('.melon0').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //           //$(this).addClass('anim');
    //             $(this).delay(0).animate({'margin-left':'0px','opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon1').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(50).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon2').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(100).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon3').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(150).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon4').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(200).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon5').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(250).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon6').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(300).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon7').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(350).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon8').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(400).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });

    //     $('.melon9').each( function(){
    //         var bottom_of_element = $(this).offset().top + $(this).outerHeight();
    //         var bottom_of_window = $(window).scrollTop() + $(window).height();

    //         if( bottom_of_window > bottom_of_element ){
    //             //$(this).addClass('anim');
    //             $(this).delay(450).animate({'margin-left':'0px', 'opacity': '1'},1000);
    //         }
    //     });
    // });

});

