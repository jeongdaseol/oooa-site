document.addEventListener('DOMContentLoaded', () => {
    // 네비게이션 및 푸터 로드
    loadComponents();
    
    function loadComponents() {
        // 네비게이션 컴포넌트 로드
        fetch('nav.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('nav-container').innerHTML = data;

                // 네비게이션 활성화
                setTimeout(() => {
                    const navbar = document.querySelector('.navbar');
                    if (navbar) {
                        navbar.classList.add('animate');
    }

                    // About 메뉴 활성화
                    const aboutLink = document.querySelector('a[href="about.html"]');
                    if (aboutLink) {
                        aboutLink.classList.add('active');
                    }
                }, 100);
        });

        // 푸터 컴포넌트 로드
        fetch('footer.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer-container').innerHTML = data;
            });
    }
}); 