// получаем элементы DOM
const inputWrap = document.querySelector('.input-wrap');
const popup = document.querySelector('.popup');

// навешиваем обработчики событий
inputWrap.addEventListener('mouseenter', showPopup);
inputWrap.addEventListener('mouseleave', hidePopup);

// функции для показа/скрытия всплывающего окна
function showPopup() {
  popup.classList.add('active');
}

function hidePopup() {
  popup.classList.remove('active');
}