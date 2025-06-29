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

// Задание 3.4 - Модальное окно для формы входа
const modalWindowController = ({ modal, btnOpen, btnClose, time = 300 }) => {
  const buttonElem = document.querySelector(btnOpen);
  const modalElem = document.querySelector(modal);

  modalElem.style.cssText = `
  display: flex;
  visibility: hidden;
  opacity: 0;
  transition: opacity ${time}ms ease-in-out;
`;

  const closeModalWindow = (event) => {
    const target = event.target;

    if (
      target === modalElem ||
      (btnClose && target.closest(btnClose)) ||
      (event instanceof KeyboardEvent && event.code === "Escape")
    ) {
      modalElem.style.opacity = 0;

      setTimeout(() => {
        if (modalElem.parentNode) {
          modalElem.style.visibility = "hidden";
        }
      }, time);

      window.removeEventListener("keydown", closeModalWindow);
    }
  };

  const openModalWindow = () => {
    modalElem.style.visibility = "visible";
    modalElem.style.opacity = 1;
    window.addEventListener("keydown", closeModalWindow);
  };

  buttonElem.addEventListener("click", openModalWindow);
  modalElem.addEventListener("click", closeModalWindow);
};

modalWindowController({
  modal: ".login-modal",
  btnOpen: ".login-btn",
  btnClose: ".modal-close",
});
const reviewsContainer = document.querySelector('.reviews-container');
if (reviewsContainer) {
  const reviewData = [
    'Мария Иванова - преподаватель с 10-летним опытом',
    'Алексей Петров - эксперт по подготовке к IELTS',
    'Елена Сидорова - специалист по деловому английскому'
  ];

  const reviewItems = reviewsContainer.querySelectorAll('.review-item');
  reviewItems.forEach((item, index) => {
    const title = item.querySelector('.review-title');
    if (title) title.textContent = reviewData[index];
  });
}

// Задание 3.5 - Динамическое меню ресурсов
const resourcesMenu = document.querySelector('.resources-nav');
if (resourcesMenu) {
  const menuList = resourcesMenu.querySelector('.resources-list');
  const resourcesData = {
    grammar: {
      link: 'grammar.html',
      title: 'Грамматика'
    },
    vocabulary: {
      link: 'vocabulary.html',
      title: 'Лексика'
    },
    games: {
      link: 'games.html',
      title: 'Игры для уроков'
    }
  };

  const createMenuItem = (url, title) => {
    return `<li class="resources-item">
          <a href="${url}" class="resources-link">${title}</a>
        </li>`;
  };

  for (const item in resourcesData) {
    const menuItem = resourcesData[item];
    menuList.insertAdjacentHTML('beforeend', createMenuItem(menuItem.link, menuItem.title));
  }
}

// Задание 3.6 - Загрузка учебных материалов из JSON
const materialsSection = document.querySelector(".materials-section");

if (materialsSection) {
  const materialsList = materialsSection.querySelector(".materials-grid");
  const apiUrl = "data/materials.json";

  const createMaterialCard = (imageUrl, iconAlt, title, description, link) => {
    return `<div class="material-card">
              <img class="material-icon" 
                   src="${imageUrl}" 
                   alt="${iconAlt}"
                   width="60"  
                   height="60"></img>
              <h3 class="material-title">${title}</h3>
              <p class="material-description">${description}</p>
              <a href="${link}" class="material-link">Подробнее</a>
            </div>`;
  };

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.materials.forEach((item) => {
        const cardElement = createMaterialCard(
          item.icon,
          item.iconAlt,
          item.title,
          item.description,
          item.link
        );
        materialsList.insertAdjacentHTML("beforeend", cardElement);
      });
    })
    .catch((error) => {
      console.error("Ошибка при загрузке материалов:", error);
    });
}

// Прелоадер страницы
const preloader = document.querySelector(".preloader");
const mainContent = document.querySelector("main");
if (preloader && mainContent) {
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    mainContent.style.display = "block";
    
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 2000);
}


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
});