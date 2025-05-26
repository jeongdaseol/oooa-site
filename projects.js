document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const progressFill = document.querySelector('.progress-fill');
    const slideCount = document.querySelector('.slide-count');
    const projectTitle = document.querySelector('.project-title');
    
    // 프로젝트 제목 배열
    const projectTitles = [
        'Siondang',
        'dental clinic',
        'Coolest Walnut house'
    ];
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove('prev', 'current', 'next');
            
            if (index === currentIndex) {
                slide.classList.add('current');
            } else if (index === getPrevIndex()) {
                slide.classList.add('prev');
            } else if (index === getNextIndex()) {
                slide.classList.add('next');
            }
        });
        
        // 프로젝트 제목 업데이트 (페이드 효과 적용)
        projectTitle.classList.remove('active');
        setTimeout(() => {
        projectTitle.textContent = projectTitles[currentIndex];
            projectTitle.classList.add('active');
        }, 400); // 0.25초 후에 새 제목을 표시
        
        // 프로그레스 바와 슬라이드 카운터 업데이트
        progressFill.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
        slideCount.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
    }
    
    function getPrevIndex() {
        return (currentIndex - 1 + totalSlides) % totalSlides;
    }
    
    function getNextIndex() {
        return (currentIndex + 1) % totalSlides;
    }
    
    // 슬라이드 클릭 이벤트
    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            if (slide.classList.contains('prev')) {
                currentIndex = getPrevIndex();
                updateSlides();
            } else if (slide.classList.contains('next')) {
                currentIndex = getNextIndex();
                updateSlides();
            } else if (slide.classList.contains('current')) {
                // 현재 슬라이드가 중앙에 있고 data-link 속성이 있으면 해당 링크로 이동
                const link = slide.getAttribute('data-link');
                if (link) {
                    window.location.href = link;
                }
            }
        });
    });
    
    // 초기화
    setTimeout(() => {
    updateSlides();
        projectTitle.classList.add('active');
    }, 100);
}); 