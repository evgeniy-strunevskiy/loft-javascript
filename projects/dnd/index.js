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

document.addEventListener('mousemove', (e) => {});

export function createDiv() {}

const addDivButton = homeworkContainer.querySelector('#addDiv');
//'#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase()

addDivButton.addEventListener('click', function () {
  const newDiv = document.createElement('div');
  const colorDiv = '#' + Math.random().toString(16).substring(2, 8).toUpperCase();
  newDiv.style.backgroundColor = colorDiv;
  const numberDiv = Math.random().toString(10).substring(0, 3) + 'px';
  newDiv.style.width = numberDiv;
  newDiv.style.height = numberDiv;
  newDiv.style.position = 'absolute';
  newDiv.style.top = numberDiv;
  newDiv.style.left = numberDiv;

  homeworkContainer.appendChild(newDiv);
});
