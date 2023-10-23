const button = document.querySelector('.switch')
let userTheme = localStorage.getItem('theme')

// 기본 테마를 'light'로 설정
if (userTheme === null) {
    userTheme = 'light'
    localStorage.setItem('theme', 'light')
}

let stat = userTheme === 'dark'

// 페이지 로드 시 테마 적용
document.addEventListener('DOMContentLoaded', () => {
    if (userTheme === 'dark') {
        clickDarkMode()
    } else {
        clickLightMode()
    }
})

// 버튼 클릭 이벤트 처리
button.addEventListener('click', () => {
    if (stat) {
        clickLightMode()
    } else {
        clickDarkMode()
    }
})

// 다크 모드 적용 함수
function clickDarkMode() {
    localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark-mode')
    stat = true
}

// 라이트 모드 적용 함수
function clickLightMode() {
    localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light-mode')
    stat = false
}