"use script"

// Задание 3.2, 3.3
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.intensive__img');
    
    images.forEach(img => {
        const description = img.nextElementSibling;
        
        img.addEventListener('mouseenter', () => {
            img.style.opacity = 0.7;
            description.style.opacity = 1;
            description.removeAttribute('hidden');
        });
        
        img.addEventListener('mouseleave', () => {
            img.style.opacity = 1;
            description.style.opacity = 0;
            setTimeout(() => description.setAttribute('hidden', true), 300);
        });
    });
});


// Задание 3.7

document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper(".mySwiper", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
});