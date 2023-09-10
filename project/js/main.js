const menuLinks = document.querySelectorAll('.menu__link#arrow-link');
const menuLinks2 = document.querySelectorAll('.menu__link#arrow-link2');
const menuLinks3 = document.querySelectorAll('.menu__link#arrow-link3');
const menuLinks4 = document.querySelectorAll('.menu__link#arrow-link4');
const menuLinks5 = document.querySelectorAll('.menu__link#arrow-link5');
const headerButton = document.querySelector('.button_blue#arrow-link_button');

menuLinks.forEach((link) => {
  link.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
menuLinks2.forEach((link) => {
  link.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
menuLinks3.forEach((link) => {
  link.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});
menuLinks4.forEach((link) => {
  link.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

menuLinks5.forEach((link) => {
  link.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

if (headerButton) {
    headerButton.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('active');
    });
  }
  document.addEventListener("DOMContentLoaded", function() {
    const arrowLinkButton = document.getElementById("arrow-link_button");
    const filterMenu = document.getElementById("filter_menu");
  
    let isFilterVisible = false; // Переменная для отслеживания видимости блока
  
    arrowLinkButton.addEventListener("click", function(e) {
      e.preventDefault();
      
      // Если блок видимый, то скрываем его
      if (isFilterVisible) {
        filterMenu.style.display = "none";
        isFilterVisible = false;
      } else { // В противном случае, показываем его
        filterMenu.style.display = "block";
        isFilterVisible = true;
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на элемент "Размер" и соответствующий выпадающий блок
    const arrowLink1 = document.getElementById("arrow-link");
    const filterMenu1 = document.getElementById("filter-menu-1");
  
    // Переменная для отслеживания видимости блока
    let isFilterVisible1 = false;
  
    // Добавляем обработчик клика для ссылки "Размер"
    arrowLink1.addEventListener("click", function(e) {
      e.preventDefault();
      if (isFilterVisible1) {
        filterMenu1.style.display = "none";
        isFilterVisible1 = false;
      } else {
        filterMenu1.style.display = "block";
        isFilterVisible1 = true;
      }
    });
  });
  const alloElements = document.querySelectorAll(".allo1");

  alloElements.forEach((element) => {
      element.addEventListener("click", () => {
          element.classList.toggle("active");
      });
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на элемент "Сезон" и соответствующий выпадающий блок
    const arrowLink4 = document.getElementById("arrow-link4");
    const filterMenu4 = document.getElementById("filter-menu-4");
  
    // Переменная для отслеживания видимости блока
    let isFilterVisible4 = false;
  
    // Добавляем обработчик клика для ссылки "Сезон"
    arrowLink4.addEventListener("click", function(e) {
      e.preventDefault();
      if (isFilterVisible4) {
        filterMenu4.style.display = "none";
        isFilterVisible4 = false;
      } else {
        filterMenu4.style.display = "block";
        isFilterVisible4 = true;
      }
    });
  });
  
  const alloElements4 = document.querySelectorAll(".allo4");

  alloElements4.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("active");
    });
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    // Получаем ссылку на элемент "Сезон" и соответствующий выпадающий блок
    const arrowLink5 = document.getElementById("arrow-link5");
    const filterMenu5 = document.getElementById("filter-menu-5");
  
    // Переменная для отслеживания видимости блока
    let isFilterVisible5 = false;
  
    // Добавляем обработчик клика для ссылки "Сезон"
    arrowLink5.addEventListener("click", function(e) {
      e.preventDefault();
      if (isFilterVisible4) {
        filterMenu5.style.display = "none";
        isFilterVisible4 = false;
      } else {
        filterMenu5.style.display = "block";
        isFilterVisible4 = true;
      }
    });
  });
  
  const alloElements5 = document.querySelectorAll(".allo5");

  alloElements5.forEach((element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("active");
    });
  });

  const arrowLink = document.getElementById("arrow-link2");
  const filterMenu = document.getElementById("filter-menu-2");

  arrowLink.addEventListener("click", function () {
      filterMenu.classList.toggle("active");
  });


  const arrowLink3 = document.getElementById("arrow-link3");
  const filterMenu3 = document.getElementById("filter-menu-3");

  arrowLink3.addEventListener("click", function () {
      filterMenu3.classList.toggle("active");
  });

  const arrowLink4 = document.getElementById("arrow-link4");
  const filterMenu4 = document.getElementById("filter-menu-4");

  arrowLink4.addEventListener("click", function () {
      filterMenu4.classList.toggle("active");
  });


  const arrowLink5 = document.getElementById("arrow-link5");
  const filterMenu5 = document.getElementById("filter-menu-5");

  arrowLink5.addEventListener("click", function () {
      filterMenu5.classList.toggle("active");
  });


  document.addEventListener("DOMContentLoaded", function() {
    const alloItems = document.querySelectorAll(".allo");
    const buttonBlue = document.getElementById("arrow-link_button");
  
    alloItems.forEach(function(item) {
      item.addEventListener("click", function(e) {
        e.preventDefault();
  
        // Удаляем галочки со всех элементов
        alloItems.forEach(function(alloItem) {
          alloItem.textContent = alloItem.textContent.replace(" ✓", "");
        });
  
        const sortValue = item.getAttribute("data-sort");
        item.textContent += " ✓"; // Добавляем галочку к выбранному элементу
        buttonBlue.textContent = item.textContent;
        buttonBlue.setAttribute("data-sort", sortValue);
      });
    });
  });


  const alloElement = document.querySelectorAll(".allo2");

  alloElement.forEach((element) => {
      element.addEventListener("click", () => {
          element.classList.toggle("active");
      });
  });





  const slider = document.querySelector('.slider');
const leftThumb = document.querySelector('.thumb.left');
const rightThumb = document.querySelector('.thumb.right');

let isLeftThumbDragging = false;
let isRightThumbDragging = false;

leftThumb.addEventListener('mousedown', (e) => {
    isLeftThumbDragging = true;
    e.preventDefault();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

rightThumb.addEventListener('mousedown', (e) => {
    isRightThumbDragging = true;
    e.preventDefault();

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
    if (isLeftThumbDragging) {
        const newPosition = e.clientX - slider.getBoundingClientRect().left;
        const maxPosition = rightThumb.getBoundingClientRect().left - slider.getBoundingClientRect().left;

        if (newPosition >= 0 && newPosition <= maxPosition) {
            leftThumb.style.left = newPosition + 'px';
        }
    }

    if (isRightThumbDragging) {
        const newPosition = e.clientX - slider.getBoundingClientRect().left;
        const minPosition = leftThumb.getBoundingClientRect().right - slider.getBoundingClientRect().left;

        if (newPosition >= minPosition && newPosition <= slider.clientWidth) {
            rightThumb.style.right = slider.clientWidth - newPosition + 'px';
        }
    }
}

function onMouseUp() {
    isLeftThumbDragging = false;
    isRightThumbDragging = false;

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}








document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  const leftThumb = document.querySelector('.thumb.left');
  const rightThumb = document.querySelector('.thumb.right');
  const minPrice = document.querySelector('.min-price');
  const maxPrice = document.querySelector('.max-price');
  
  const min = 1200;
  const max = 83500;
  const minLimit = min;
  const maxLimit = max;
  const maxRange = (maxLimit - minLimit) * 0.91; // Максимальное значение диапазона
  
  let leftValue = min;
  let rightValue = max;
  
  minPrice.textContent = `От ${min} ₽`;
  maxPrice.textContent = `До ${max} ₽`;
  
  function updatePrice() {
      const range = maxLimit - minLimit;
      const leftPosition = ((leftValue - minLimit) / range) * 100;
      const rightPosition = ((rightValue - minLimit) / range) * 100;
      
      leftThumb.style.left = `${leftPosition}%`;
      rightThumb.style.right = `${100 - rightPosition}%`;
      
      minPrice.textContent = `От ${leftValue} ₽`;
      maxPrice.textContent = `До ${rightValue} ₽`;
  }
  
  function handleLeftThumbDrag(e) {
      const sliderRect = slider.getBoundingClientRect();
      let newPosition = ((e.clientX - sliderRect.left) / slider.clientWidth) * (maxLimit - minLimit) + minLimit;
      
      // Проверка, чтобы ползунок не выходил за левую границу и не пересекался с правым ползунком
      newPosition = Math.min(newPosition, rightValue - 1);
      newPosition = Math.max(newPosition, minLimit);
      leftValue = Math.round(newPosition);
      
      // Проверка, чтобы ползунок не двигался дальше 91% от ширины линии
      if (leftValue > minLimit + maxRange) {
          leftValue = minLimit + maxRange;
      }
      
      updatePrice();
  }
  
  function handleRightThumbDrag(e) {
      const sliderRect = slider.getBoundingClientRect();
      let newPosition = ((e.clientX - sliderRect.left) / slider.clientWidth) * (maxLimit - minLimit) + minLimit;
      
      // Проверка, чтобы ползунок не выходил за правую границу и не пересекался с левым ползунком
      newPosition = Math.max(newPosition, leftValue + 1);
      newPosition = Math.min(newPosition, maxLimit);
      rightValue = Math.round(newPosition);
      
      // Проверка, чтобы ползунок не двигался дальше 91% от ширины линии
      if (rightValue < maxLimit - maxRange) {
          rightValue = maxLimit - maxRange;
      }
      
      updatePrice();
  }
  
  leftThumb.addEventListener('mousedown', function (e) {
      document.addEventListener('mousemove', handleLeftThumbDrag);
      document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', handleLeftThumbDrag);
      });
  });
  
  rightThumb.addEventListener('mousedown', function (e) {
      document.addEventListener('mousemove', handleRightThumbDrag);
      document.addEventListener('mouseup', function () {
          document.removeEventListener('mousemove', handleRightThumbDrag);
      });
  });
  
  updatePrice();
});






const sizeLinks = document.querySelectorAll('.allo1');
        const applyButton = document.getElementById('apply-button');
        const selectedSizesDiv = document.getElementById('selected-sizes');

        const selectedSizes = new Set();

        // Обработчик клика по размеру
        sizeLinks.forEach(link => {
            link.addEventListener('click', () => {
                const size = link.textContent;
                if (selectedSizes.has(size)) {
                    selectedSizes.delete(size);
                } else {
                    selectedSizes.add(size);
                }
            });
        });

        // Обработчик клика по кнопке "Применить"
        applyButton.addEventListener('click', () => {
            selectedSizesDiv.innerHTML = ''; // Очищаем предыдущий вывод
            if (selectedSizes.size > 0) {
                const selectedSizesArray = Array.from(selectedSizes);
                selectedSizesArray.forEach(size => {
                    const sizeElement = document.createElement('p');
                    sizeElement.textContent = size;
                    selectedSizesDiv.appendChild(sizeElement);
                });
            } else {
                
            }
        });





 

