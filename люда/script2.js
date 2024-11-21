window.onload = function() {
    const sections = document.querySelectorAll('section');
    
    // Функция для проверки видимости секций
    function checkVisibility() {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < windowHeight - 50) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Проверка видимости при загрузке
};