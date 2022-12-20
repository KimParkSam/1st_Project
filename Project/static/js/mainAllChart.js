// JQuery의 document.ready와 거의 비슷한 기능의 함수
// ie8 이하 버전에서는 지원하지 않는다.
// 바로 함수 및 태그 가져오는 이벤트를 실행하면 html 로드가 되지 않은 상태로 불러오기 때문에
// 해당 이벤트를 추가해서 안에다가 코드를 작성한다.
// html 파일이나 ejs 파일의 script 태그 안에 작성을 할 수는 있지만 분리해서 사용하는 것이 코드 관리 및 가독성에 좋다고 판단하였다.
window.addEventListener('DOMContentLoaded', () => {

    // ***********멜론************

    // 차트 모아보기에서는 기본 설정 값 10 설정
    let viewCount = 10;

    // 스크립트 데이터로 테이블 출력하는 함수
    tableDataMelon = (data, viewCount, btnId) => {
        const melonTable = document.querySelectorAll('tbody')[0];
        let temp = '';
        
        // 데이터가 딱 맞게 viewCount에 나눠지는 데이터면 정상 출력이 되지만
        // 99개 처럼 나머지가 생기는 경우에는 데이터 부족으로 에러 호출 확인
        // if문 설정하여 btnId*viewCount가 data.length 보다 크면 조건문을 다르게 실행하도록 분기
        if(btnId*viewCount > data.length) {
            // viewCount에 따라 데이터 출력 실행
            // btnId = 페이지 하단의 버튼에 따라서 페이지 데이터 호출,  스타트 번호 페이지번호 * 1페이지 표시 개수
            for(let i=btnId*viewCount-viewCount; i < data.length; i++) {
                temp += `<tr class='melon${i}'>
                    <td rowspan="2">${data[i].rank}</td>
                    <td rowspan="2"><img src='${data[i].albumImg}'></td>
                    <td>${data[i].singer}</td>
                    </tr>
                    <tr>
                    <td>${data[i].title}</td>
                    </tr>`;
            }
        } else {
            // viewCount에 따라 데이터 출력 실행
            // btnId = 페이지 하단의 버튼에 따라서 페이지 데이터 호출,  스타트 번호 페이지번호 * 1페이지 표시 개수
            for(let i=btnId*viewCount-viewCount; i < btnId*viewCount; i++) {
                temp += `<tr class='melon${i}'>
                    <td rowspan="2">${data[i].rank}</td>
                    <td rowspan="2"><img src='${data[i].albumImg}'></td>
                    <td>${data[i].singer}</td>
                    </tr>
                    <tr>
                    <td>${data[i].title}</td>
                    </tr>`;
            }
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
        

        // 데이터가 딱 맞게 viewCount에 나눠지는 데이터면 정상 출력이 되지만
        // 99개 처럼 나머지가 생기는 경우에는 데이터 부족으로 에러 호출 확인
        // if문 설정하여 btnId*viewCount가 data.length 보다 크면 조건문을 다르게 실행하도록 분기
        if(btnId*viewCount > data.length) {
            // viewCount에 따라 데이터 출력 실행
            // btnId = 페이지 하단의 버튼에 따라서 페이지 데이터 호출,  스타트 번호 페이지번호 * 1페이지 표시 개수
            for(let i=btnId*viewCount-viewCount; i < data.length; i++) {
                temp += `<tr>
                    <td rowspan="2">${data[i].rank}</td>
                    <td rowspan="2"><img src='${data[i].albumImg}'></td>
                    <td>${data[i].singer}</td>
                    </tr>
                    <tr>
                    <td>${data[i].title}</td>
                    </tr>`;
            }
        } else {
            // viewCount에 따라 데이터 출력 실행
            // btnId = 페이지 하단의 버튼에 따라서 페이지 데이터 호출,  스타트 번호 페이지번호 * 1페이지 표시 개수
            for(let i=btnId*viewCount-viewCount; i < btnId*viewCount; i++) {
                temp += `<tr>
                    <td rowspan="2">${data[i].rank}</td>
                    <td rowspan="2"><img src='${data[i].albumImg}'></td>
                    <td>${data[i].singer}</td>
                    </tr>
                    <tr>
                    <td>${data[i].title}</td>
                    </tr>`;
            }
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
        

        // 데이터가 딱 맞게 viewCount에 나눠지는 데이터면 정상 출력이 되지만
        // 99개 처럼 나머지가 생기는 경우에는 데이터 부족으로 에러 호출 확인
        // if문 설정하여 btnId*viewCount가 data.length 보다 크면 조건문을 다르게 실행하도록 분기
        if(btnId*viewCount > data.length) {
            // viewCount에 따라 데이터 출력 실행
            // btnId = 페이지 하단의 버튼에 따라서 페이지 데이터 호출,  스타트 번호 페이지번호 * 1페이지 표시 개수
            for(let i=btnId*viewCount-viewCount; i < data.length; i++) {
                temp += `<tr>
                    <td rowspan="2">${data[i].rank}</td>
                    <td rowspan="2"><img src='${data[i].albumImg}'></td>
                    <td>${data[i].singer}</td>
                    </tr>
                    <tr>
                    <td>${data[i].title}</td>
                    </tr>`;
            }
        } else {
            // viewCount에 따라 데이터 출력 실행
            // btnId = 페이지 하단의 버튼에 따라서 페이지 데이터 호출,  스타트 번호 페이지번호 * 1페이지 표시 개수
            for(let i=btnId*viewCount-viewCount; i < btnId*viewCount; i++) {
                temp += `<tr>
                    <td rowspan="2">${data[i].rank}</td>
                    <td rowspan="2"><img src='${data[i].albumImg}'></td>
                    <td>${data[i].singer}</td>
                    </tr>
                    <tr>
                    <td>${data[i].title}</td>
                    </tr>`;
            }
        }
        youtubeTable.innerHTML = temp;
    }

    // ******처음 출력을 위한 초기 실행 함수******
    // 1번 실행해서 데이터 출력
    // 초기 실행이라서 btnId 변수 대신에 1값 고정
    tableDataYoutube(ejsDataYoutube, viewCount, 1);

});
