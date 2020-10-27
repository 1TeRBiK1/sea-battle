var model = {
 /* 
  хранение координат кораблей
  хранение таблицы полей
  кол-во кораблей в игре и их палубность
  кол-во кораблей 'живых' pers/bot
  кол-во потопленных кораблей pers/bot
  перезапуск игры
  окончание игры
  правила игры
  изменение полей кораблей(попадание/поворот/координаты)
  
  */
    isHitMiss: function(location){
        // пример для отладки
        if(Number(location % 2) === 0) return true;
        else return false;
    }
}

var view = {
 /*
  время игры
  шаг/ход в игре
  отображение попаданий в корабль/затоплений кораблей
  отображение оставшихся 'живых' кораблей pers/bot
  message игроку о событии: (промах, попадание, затопление, чей ход) pers/bot
  отображение правил игры
  'примечание к кнопкам'
 */
    shotHit: function(idCell){
    // приствоение id новый класс "hit-'name'"
    // вставка символа "╳" в ячейку
    const HitElem = '╳';
    const cell = document.getElementById(`${idCell}`);
    cell.classList.add(`hit-${whoseField(idCell)}`);
    cell.innerHTML = HitElem;
    },

    shotMiss: function(idCell){
    // создание <li>
    // добавление класса "miss-"name"" к <li>
    // добавление потомка <li class="miss-"name"">  к id;
    const MissElem = document.createElement('li');
    MissElem.classList.add(`miss-${whoseField(idCell)}`);
    document.getElementById(`${idCell}`).appendChild(MissElem);
}
}

var controller = {
 /*
  Поведение bot'a
  отсчет времени игры, и хода
  Выстрелы по таблице, передача view координат
 */     

    shot: function(location){
        if(model.isHitMiss(location) === true){
            view.shotHit(location);
        }
        else view.shotMiss(location);
    }
}


document.addEventListener("click", clickEvent);

function clickEvent(event){
    console.log(event.target.id);
    if(event.target.closest('td') && event.target.id){
        controller.shot(event.target.id);
        //shotHit(event.target.id);
        //shotMiss(event.target.id);
    }
}


// "name" = user/bot;

function whoseField(idElem){
    return Number(idElem) < 100 ? 'user' : 'bot';
}

function shotHit(idCell){
    // приствоение id новый класс "hit-'name'"
    // вставка символа "╳" в ячейку
    const HitElem = '╳';
    const cell = document.getElementById(`${idCell}`);
    cell.classList.add(`hit-${whoseField(idCell)}`);
    cell.innerHTML = HitElem;

}

function shotMiss(idCell){
    // создание <li>
    // добавление класса "miss-"name"" к <li>
    // добавление потомка <li class="miss-"name"">  к id;
    const MissElem = document.createElement('li');
    MissElem.classList.add(`miss-${whoseField(idCell)}`);
    document.getElementById(`${idCell}`).appendChild(MissElem);
}
function isShipSunk(){
    //если потоплен то "╳" заменяетс на "☠"
    //вызов функции автозаполнения "shotMiss" вокруг потопленного корабля
    //вызов проверки на затопления всех кораблей
}

function isHitMiss(idCell){
    // Hit return const Hit = 1;
    // Miss return const Miss = 0;
}
function autoMissShipSunk(idCellsShip){

}
function isAllShipSunk(nameField){
    //true -> return isWinLose()
    //false -> return false
}   
function isWinLose(){
    //Win()-> bot have 0 ships
    //Lose()->pers have 0 ships
}
function randomPlacementShips(){

}
function mousePlacementShips(){

}
function canPlacementShipThere(){

}
function isRunning(){

}
