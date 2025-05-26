document.addEventListener('DOMContentLoaded', () => {
    // 스크롤 애니메이션
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 초기 로드 시 첫 번째 섹션 표시
    setTimeout(() => {
        document.querySelector('.project-header').classList.add('visible');
    }, 100);
}); 