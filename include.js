// 컴포넌트를 불러오는 함수
async function loadComponent(componentPath, containerId) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentPath}`);
        }
        const html = await response.text();
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = html;
            console.log(`Successfully loaded ${componentPath}`);
            
            // 컴포넌트가 로드된 후 스타일 적용
            if (containerId === 'nav-container') {
                container.style.opacity = '1'; // 네비게이션 컨테이너 투명도 설정
                
                const navbar = container.querySelector('.navbar');
                if (navbar) {
                    navbar.style.position = 'fixed';
                    navbar.style.top = '0';
                    navbar.style.width = '100%';
                    navbar.style.zIndex = '1000';
                    navbar.style.opacity = '1'; // 네비게이션 바 투명도 설정
                }
                // 현재 페이지에 해당하는 nav 링크에 active 클래스 추가
                const navLinks = container.querySelectorAll('.nav-links a');
                const currentPage = window.location.pathname.split('/').pop();
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === currentPage) {
                        link.classList.add('active');
                    }
                });
            }
        } else {
            console.error(`Container ${containerId} not found`);
        }
    } catch (error) {
        console.error(`Error loading ${componentPath}:`, error);
        // 오류 발생 시 3초 후 다시 시도
        setTimeout(() => {
            console.log(`Retrying to load ${componentPath}...`);
            loadComponent(componentPath, containerId);
        }, 3000);
    }
}

// DOM이 로드된 후 컴포넌트를 불러옴
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, loading components...');
    
    try {
        // 모든 컴포넌트를 비동기적으로 로드
        await Promise.all([
            loadComponent('nav.html', 'nav-container'),
            loadComponent('footer.html', 'footer-container')
        ]);
        
        // 컴포넌트 로드가 완료되면 커스텀 이벤트 발생
        const event = new CustomEvent('componentsLoaded');
        document.dispatchEvent(event);
        console.log('All components loaded successfully');
    } catch (error) {
        console.error('Error loading components:', error);
    }
}); 