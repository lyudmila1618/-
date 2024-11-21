// Пример анимации при прокрутке (можно улучшить)
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

/* Просто пример подключения в стиле CSS */
const style = document.createElement('style');
style.innerHTML = `
    section { opacity: 0; transition: opacity 0.5s ease; }
    section.visible { opacity: 1; }
`;
document.head.appendChild(style);