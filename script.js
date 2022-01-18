//Задание №1. Создайте календарь в виде таблицы 

function  createCalendar (elem, year, month) {
    let mon = month -1;
    let d = new Date(year, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
       table += '<td></td>';
    }

    while(d.getMonth() == mon) {
        table += '<td>' + d.getDate() + '</td>'

        if (getDay(d) % 7 == 6) {
            table += '</tr><tr>'
        }
    
        d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            table += '<td></td>'
        }
    }

    table += '</tr> </table>';

    elem.innerHTML = table;
}

function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

createCalendar(calendar, 2012, 9);



//Задание №2. Создать уведомление 
function showNotification({top = 0, right = 0, className, html}) {

    let notification = document.createElement('div');
    notification.className = "notification";
    if (className) {
      notification.classList.add(className);
    }

    notification.style.top = top + 'px';
    notification.style.right = right + 'px';

    notification.innerHTML = html;
    document.body.append(notification);

    setTimeout(() => notification.remove(), 1500);
  }

let i = 1;
    setInterval(() => {
      showNotification({
        top: 170,
        right: 10,
        html: 'Hello ' + i++,
        className: "welcome"
      });
    }, 2000);


//Задание №3. Найдите координаты точек относительно окна браузера 
document.onclick = function(e) { // показывает координаты точки клика       
    coords.innerHTML = e.clientX + ':' + e.clientY;     
}; 

let fieldCoords = field.getBoundingClientRect();

let answer = [
    [fieldCoords.left, fieldCoords.top], //верхний левый внешний угол 
    [fieldCoords.right, fieldCoords.bottom], //нижний правый внешний угол 
    [fieldCoords.left + field.clientLeft, fieldCoords.top + field.clientTop], //верхний левый внутренний угол 
    [fieldCoords.left + field.clientLeft + field.clientWidth, fieldCoords.top + field.clientTop + field.clientHeight] //нижний правый внутренний угол
]
alert(answer.join(' '));

//Задание №4. Покажите заметку рядом с элементом 
/**      
 * * Позиционирует элемент elem относительно элемента anchor 
 * в соответствии со значением position.      
 * *      
 * * @param {Node} anchor     элемент, около которого позиционируется другой элемент      
 * * @param {string} position одно из: top/right/bottom      
 * * @param {Node} elem       элемент, который позиционируется      
 * *      
 * * Оба элемента elem и anchor должны присутствовать в документе      
 * */   

function positionAt(anchor, position, elem) {
    let anchorCoords = anchor.getBoundingClientRect();
    
    switch(position) {
        case "top":
            elem.style.left = anchorCoords.left + 'px';
            elem.style.top = anchorCoords.top - elem.offsetHeight + 'px';
        break;
        case "right":
            elem.style.left = anchorCoords.left + anchor.offsetWidth + 'px';
            elem.style.top = anchorCoords.top + 'px';
        break;
        case "bottom":
            elem.style.left = anchorCoords.left + 'px';
            elem.style.top = anchorCoords.top + anchor.offsetHeight + 'px';
        break;
    }
}

function showNote(anchor, position, html) {       
    let note = document.createElement('div');       
    note.className = "note";       
    note.innerHTML = html; 
    document.body.append(note); 

    positionAt(anchor, position, note);     
} 

// test it     
let blockquote = document.querySelector('blockquote'); 

showNote(blockquote, "top", "note above");     
showNote(blockquote, "right", "note at the right");     
showNote(blockquote, "bottom", "note below"); 






