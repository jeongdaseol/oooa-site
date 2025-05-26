document.addEventListener('DOMContentLoaded', function() {
    // Nav 컴포넌트 로드
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-container').innerHTML = data;
        })
        .catch(error => console.error('Nav 로딩 오류:', error));

    // Footer 컴포넌트 로드
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Footer 로딩 오류:', error));
}); 