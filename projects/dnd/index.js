/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');
const addDivButton = homeworkContainer.querySelector('#addDiv');

let currentDrag;
let startX = 0;
let startY = 0;

function random(to) {
  return parseInt(Math.random() * to);
}

document.addEventListener('mousemove', (e) => {
  if (currentDrag) {
    currentDrag.style.top = e.clientY - startY + 'px';
    currentDrag.style.left = e.clientX - startX + 'px';
  }
});

export function createDiv() {
  const maxSize = 200;
  const maxColor = 0xffffff;

  const div = document.createElement('div');
  div.className = 'draggable-div';
  div.style.background = '#' + random(maxColor).toString(16);
  div.style.top = random(window.innerHeight) + 'px';
  div.style.left = random(window.innerWidth) + 'px';
  div.style.width = random(maxSize) + 'px';
  div.style.height = random(maxSize) + 'px';

  div.addEventListener('mousedown', (e) => {
    currentDrag = div;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  div.addEventListener('mouseup', () => (currentDrag = false));

  return div;
}

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
