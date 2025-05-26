// 컴포넌트가 로드된 후 초기화
document.addEventListener('componentsLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const slideContents = document.querySelectorAll('.slide-content');
    
    // Show first slide immediately
    const firstSlide = document.querySelector('.slide');
    if (firstSlide) {
        firstSlide.classList.add('active');
    }
    
    // Add animation classes with a small delay to ensure DOM is ready
    setTimeout(() => {
        if (navbar) navbar.classList.add('animate');
        
        slideContents.forEach(content => {
            content.classList.add('animate');
            const h1 = content.querySelector('h1');
            const p = content.querySelector('p');
            
            if (h1) h1.classList.add('animate');
            if (p) p.classList.add('animate');
        });
    }, 100);

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);

        // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);
    }
}); 