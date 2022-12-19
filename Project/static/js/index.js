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






    let head = document.getElementsByTagName("head")[0];
        console.log(head.children.length);
        console.log(head.children[14]);
        console.log(head.children[18]);



    
    
    
    //     let melondata;
    //     let youtubedata;
    // function test() {
    //     const layoutSidenav_content = document.getElementById('layoutSidenav_content');
    //     axios({
    //         method: 'get',
    //         url: '/allChart'
    //     }).then((response) => {
    //         // console.log(response.data.youtubedata.data[0]);
    //         melondata = response.data.melondata.data;
    //         youtubedata = response.data.youtubedata.data;
            
    
            
    //         let script = document.createElement('script');
    //         script.src = '/static/js/youtubeAllChart.js';
    //         script.type = 'text/javascript';
    //         document.head.appendChild(script);
    
    //         var head = document.getElementsByTagName("head")[0];
    //         var link = document.createElement("link");
    //         link.rel = "stylesheet";
    //         link.type = "text/css";
    //         link.href = "/static/css/allChart.css";
    //         document.head.appendChild(link);
    
    //         setTimeout(() => {
    //             console.log('스크립트 제거');
    //             // 메인 페이지 head 태그 + nav 정보 포함일거라 판단
    //             // 개수 16개 - 2022-12-18 기준
    //             if(head.children.length > 16) {
    //                 for(let ii = 16; ii < head.children.length; ii++) {
    //                     head.children[ii].remove();
    //                     console.log(ii);
    //                 }
    //             }
    //         }, 5000);
    //     });
    // }
});
