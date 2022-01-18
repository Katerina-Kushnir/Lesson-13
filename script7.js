/*Задание №7. Скрыть элемент по нажатию кнопки Добавьте */
/*
hider.onclick = function() {
    text.style.display = "none";
}
*/

/*Задание №8. Какой обработчик запустится? */
/*
button.addEventListener("click", () => alert("1")); //сработает и будет выведено 1

button.removeEventListener("click", () => alert("1")); //чтобы удалить обработчик, необходимо передать именно ту функцию, которая была назначена в качестве обработчика

button.onclick = () => alert(2); //сработает и будет выведено 1
*/

//Задание №9**. Передвиньте мяч по полю 
/*
field.onclick = function(event) {
    let fieldCoords = this.getBoundingClientRect();

    let ballCoords = {
        top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
        left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2
    };

    if (ballCoords.top < 0) ballCoords.top = 0;
    if (ballCoords.left < 0) ballCoords.left = 0;
    if (ballCoords.left + ball.clientWidth > field.clientWidth) {
        ballCoords.left = field.clientWidth - ball.clientWidth;
    }
    if (ballCoords.top + ball.clientHeight > field.clientHeight) {
        ballCoords.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballCoords.left + 'px';
    ball.style.top = ballCoords.top + 'px';
};
*/

//Задание №10. Добавить кнопку закрытия
/*
let panes = document.querySelectorAll('.pane');

    for(let pane of panes) {
      pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
      // кнопка становится первым потомком плитки (pane)
      pane.firstChild.onclick = () => pane.remove();
    }
*/

//Задание №11. Добавьте пункт к выпадающему списку 
let selectedOption = genres.options[genres.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

let option = new Option('Классика', 'clasic');
genres.append(option);

option.selected = true;
