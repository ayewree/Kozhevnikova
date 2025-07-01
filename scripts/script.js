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
    
 menuData.forEach(item => {
      categoriesList.insertAdjacentHTML('beforeend', createLink(item));
    });
  } else {
    console.error('Элемент .categories__menu не найден');
  }
    const createLink = (item) => {
      const activeClass = item.active ? 'active' : '';
      return `
        <li class="category__item"><a href="${item.link}" class="category__link ${activeClass}">${item.title}</a>
        </li>
      `;
    };

   

  for (const linkItem in menuData) {
      const link = menuData[linkItem];
      const linkIndex = createLink(link.UrlLink, link.title);
      categoriesList.insertAdjacentHTML('beforeend', linkIndex);

  }
});


// Задание 3.6 Динамическая галерея изображений
document.addEventListener('DOMContentLoaded', function() {
  const cardsImages = document.querySelector(".article_images");

if (cardsImages) {
    const cardListImages = cardsImages.querySelector(".article_images_list");
    const apiUrl = "images.json";

    const createCard = (imageUrl, imageAlt, imageWidth) => {
        const image = `
            <li class="article_images_item">
                <img class="images__picture" src="${imageUrl[0]}" alt="${imageAlt}" width="${imageWidth}">
                <img class="images__picture" src="${imageUrl[1]}" alt="${imageAlt}" width="${imageWidth}" style="display: none;">
            </li>
        `;
        return image;
    };

    fetch(apiUrl)
        .then((response) => response.json())
        .then((images) => {
            console.log(images);
            console.log(typeof images);

            images.forEach((item) => {
                const cardElement = createCard(
                    item.imageUrl,
                    item.imageAlt,
                    item.imageWidth
                );
                cardListImages.insertAdjacentHTML("beforeend", cardElement);
            });

            const pictures = document.querySelectorAll(".images__picture");
            if (pictures) {
                pictures.forEach((picture) => {
                    picture.addEventListener("click", () => {
                        const parentItem = picture.parentElement;
                        const parentPictures = parentItem.querySelectorAll(".images__picture");

                        parentPictures.forEach((parentPicture) => {
                            if (parentPicture !== picture) {
                                parentPicture.style.display = "block";
                            } else {
                                parentPicture.style.display = "none";
                            }
                        });
                    });
                });
            }
        })
        .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
        });
}
})

//Предзагрузчик
const preloader = document.querySelector(".preloader");
const content = document.querySelector(".content");

if (preloader && content) {
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    content.style.display = "block";
    preloader.remove();
  }, 3000);
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
})
