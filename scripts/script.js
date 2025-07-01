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

// Задание 3.4 - Динамическое обновление имен преподавателей
document.addEventListener('DOMContentLoaded', function() {
  const teachersContainer = document.querySelector('.teachers');
  
  if (teachersContainer) {
    const teachersNames = [
      "Анна Смирнова",
      "Дмитрий Иванов",
      "Елена Петрова"
    ];
    const nameElements = teachersContainer.querySelectorAll('.teachers__name');
    nameElements.forEach((item, index) => {
      if (teachersNames[index]) {
        item.textContent = teachersNames[index];
      }
    });
    console.log('Имена преподавателей обновлены:', teachersNames);
  } else {
    console.log('Блок преподавателей не найден');
  }
});

// Модальное окно (выбор формата скачивания материала)

document.addEventListener('DOMContentLoaded', function() {
const downloadButtonModal = document.querySelector(".download_button")
const modalApplication = document.querySelector(".download_modal")

if (downloadButtonModal && modalApplication) {
  downloadButtonModal.addEventListener("click", () => {
    modalApplication.removeAttribute("hidden");
  });
}

window.addEventListener("click", (event) => {
  if (event.target === modalApplication) {
    modalApplication.setAttribute("hidden", true);
  }
});

const closeModalButton = document.querySelector(".modal_close");

closeModalButton.addEventListener("click", () => {
  modalApplication.setAttribute("hidden", true);
});
});


//Задание 3.5 Навигационное меню
document.addEventListener('DOMContentLoaded', function() {
  const categoriesMenu = document.querySelector('.categories__menu');
  if (categoriesMenu) {
    const categoriesList = categoriesMenu.querySelector('.categories-list');
    
    if (!categoriesList) {
      console.error('Элемент .categories-list не найден');
      return;
    }

    const menuData = [
      {
        link: 'blogs.html',
        title: 'Все статьи',
        active: true
      },
      {
        link: '#',
        title: 'Грамматика'
      },
      {
        link: '#',
        title: 'Лексика'
      },
      {
        link: '#',
        title: 'Произношение'
      },
      {
        link: '#',
        title: 'Культура и развлечения'
      },
      {
        link: '#',
        title: 'Советы по изучению'
      }
    ];

    const createLink = (item) => {
      const activeClass = item.active ? 'active' : '';
      return `
        <li class="category__item"><a href="${item.link}" class="category__link ${activeClass}">${item.title}</a>
        </li>
      `;
    };

    menuData.forEach(item => {
      categoriesList.insertAdjacentHTML('beforeend', createLink(item));
    });
  } else {
    console.error('Элемент .categories__menu не найден');
  }

  for (const linkItem in menuData) {
      const link = menuData[linkItem];
      const linkIndex = createLink(link.UrlLink, link.title);
      categoriesList.insertAdjacentHTML('beforeend', linkIndex);

  }
});

//Задание 3.7

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
})