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
}

var view = {
    
}

var controller = {
    
    
}


document.addEventListener("click", clickEvent);

function clickEvent(event){
    console.log(event.target);
    if(event.target.closest('table')){
        const eventNameField = nameField(event.target.closest('table'));
        console.log(eventNameField);
    }
    //const tableName = event.target.closest('table');
    //console.log(tableName.classList.contains('user'));
    //if(event.closest('bot')) console.log('bot');
}


// "name" = user/bot;

function whoseField(idElem){
    
}

function shotHit(nameField,idCell){
    // приствоение id новый класс "hit-'name'"
    // вставка символа "╳" в ячейку

}

function shotMiss(nameField,idCell){
    // создание <li>
    // добавление класса "miss-"name"" к <li>
    // добавление потомка <li class="miss-"name"">  к id;
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