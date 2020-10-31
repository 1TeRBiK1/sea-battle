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
    
   // gridBotField: new GridField('bot'),
//gridUserField: new GridField('user'),
 //   ships: new ShipsContainerArrayCreator(),
    stap: 0,
    time: 0,        
    doHitMiss: function(location){

        location = fixId(location);
        // 
        // пример для отладки
        if((Number(location) % 2) === 0) view.shotHit(location);
        else view.shotMiss(location);
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
    gameStap: function(){
        const gameStap = document.getElementById('stap');
        gameStap.innerHTML = `Stap: ${model.stap}`;
    },
    gameTime: function(){
        const gameTime = document.getElementById('time');
        gameTime.innerHTML = `Time: ${model.time}s`;
    },
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
    countStap: function(){
        model.stap += 1;
        view.gameStap();
    },
    countTime: function(){
        model.time += 1;
        view.gameTime();
    },
    shot: function(location){
        model.doHitMiss(location); // shotUser
        bot.shot(); // shotBot example
        //console.log(bot.shotsIntoShip,isHitMiss(bot.lastShotId) === true , bot.lastShotId);
    }
}

var bot = {
    shotsIntoShip: Number(0),
    lastShotId: 0,
    idLastShotHitsShip: [],
    idLastShotMissShip: [],
    //gridUserField:
    shot: function(){
        //рандомный выстрел
        if(this.shotsIntoShip === 0){
             this.lastShotId = String(Math.floor(Math.random()*99));
             this.lastShotId = fixId(this.lastShotId);
             model.doHitMiss(this.lastShotId);
            
        }
        //если уже есть попадания
        else {

        }
        if(isHitMiss(this.lastShotId) === true){
            this.shotsIntoShip += 1;
            this.idLastShotHitsShip.push(this.lastShotId);
        }

        //isHitMiss(this.lastShotId) === true ? this.shotsIntoShip += 1 : this.shotsIntoShip = this.shotsIntoShip;
        console.log(this.shotsIntoShip, this.idLastShotHitsShip);
    }
}

function isHitMiss(idCell){
    const cell = document.getElementById(`${idCell}`);
    //console.log(cell.classList,cell.classList.values,cell.classList.value === "hit-user", cell.classList.contains('hit-user'),cell);
    if(cell.classList.contains(`hit-user`)) return true;
    else if(cell.classList.contains(`miss-user`)) return false;
    else 2;
}

document.addEventListener("click", clickEvent);

function fixId(location){
    while(location.length < 3){
        location = '0' + location;
    }
    return location;
}
function clickEvent(event){
    if(event.target.closest('td') && event.target.id){
        controller.shot(event.target.id);
        controller.countStap();
        //shotHit(event.target.id);
        //shotMiss(event.target.id);
    }
}

setInterval(controller.countTime,1000);
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
function isShipSunk(arrayShipLocationIds){

    //если потоплен то "╳" заменяетс на "☠"
    changeHitSunk(arrayShipLocationIds);
    //вызов функции автозаполнения "shotMiss" вокруг потопленного корабля
    //вызов проверки на затопления всех кораблей

}
function changeHitSunk(arrayShipLocationIds){
    arrayShipLocationIds.forEach(id => document.getElementById(`${id}`).innerHTML = '☠');
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
// new for commit
// timer game
// randomBotShot