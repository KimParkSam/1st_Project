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

    // 유튜브 실시간 차트 페이지
    window.yotubueRealChartPage = (youtubechartrealpage) => {
        // 데이터 변경 부분
        const container = document.getElementById('layoutSidenav_content');

        axios({
            method: 'get',
            url: '/youtubeRealChart'
        }).then((response) => {
            // console.log(youtubechartrealpage);
            // console.log(response.data.fileHour);
            // console.log(response.data.data);
            ejsDataYoutube = response.data.data;

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
            container.innerHTML = youtubechartrealpage;

            // css 추가
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.type = "text/css";
            link.href = "/static/css/youtbeRealChart.css";
            head.appendChild(link);

            // script 추가
            let script = document.createElement('script');
            script.src = '/static/js/youtbeRealChart.js';
            script.type = 'text/javascript';
            head.appendChild(script);


            const dayTag = document.getElementById('dayTag');
            const fileday = response.data.filelist[response.data.filelist.length-1].slice(17, -8);
            dayTag.textContent = fileday;

            let fileHour = response.data.fileHour;
            if (fileHour == undefined) {
                fileHour = response.data.filelist[response.data.filelist.length-1].slice(28, -5);
            }

            // 메뉴 항목에 파일 리스트 출력
            let selectoption = '';

            for (let i = 0; i < response.data.filelist.length; i++) {
                if (fileHour == response.data.filelist[i].slice(28, -5)) {
                    selectoption += `<option value="${response.data.filelist[i].slice(28, -5)}" selected>${response.data.filelist[i].slice(28, -5)}:00</option>`
                } else {
                    selectoption += `<option value="${response.data.filelist[i].slice(28, -5)}">${response.data.filelist[i].slice(28, -5)}:00</option>`
                }
            }
            const selectDay = document.querySelectorAll('select')[0]
            selectDay.innerHTML = selectoption;

        });
    }

});
