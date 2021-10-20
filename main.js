/*## Task #0

Добавь в объекты поле player. У первого игрока это будет значение 1, у второго — 2.

Также свойству hp выставь значение 100.*/
const player1 = {
    name: 'Sonya Blade',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Kali\'s clubs', 'Garrotte', 'Pomegranates', 'Drone'],
    attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel fans', 'Flying blade', 'Bo', 'Razorang', 'Sai'],
    attack() {
        console.log(`${player2.name} Fight...`);
    }
}

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

function changeHP(player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`); 
    player.hp -= 20;
    $playerLife.style.width = `${player.hp}%`;
    
    if(player.hp <= 0) {
        $arenas.appendChild(playerLose(player.name));
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle. innerText = name + ' lose';

    return $loseTitle;
}

function createElement(tag, className) {
    const el = document.createElement(tag);
    if(className) {
        el.classList.add(className)
    };

    return el;
}

function createPlayer(player) {
    const $player = createElement('div', `player${player.player}`);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = `${player.hp}%`;
    $name.innerText = player.name;
    $img.src = player.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer(player1);
createPlayer(player2);


/*## Task #1

В первой задачи отточим навык условных конструкций.

Если обратишь внимание, когда жизни игрока уходят в минус (-), то наш **style.width** перестает работать.
Задача сделать так, что если жизни становятся меньше или равные 0, то игроку нужно записать 0, а не минусовое значение.

Чтобы более подробно понять, о чем тут идет речь, попробуй в функции **changeHP,** когда вы изменяешь жизни игрока, 
поставить `console.log`, чтобы увидеть, какие данные с какими свойствами отображаются.*/
const player1 = {
    name: 'Sonya Blade',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Kali\'s clubs', 'Garrotte', 'Pomegranates', 'Drone'],
    attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel fans', 'Flying blade', 'Bo', 'Razorang', 'Sai'],
    attack() {
        console.log(`${player2.name} Fight...`);
    }
}

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

function changeHP(player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`); 
    if(player.hp < 20) {
        player.hp = 0;
    } else {
        player.hp -= 20};
    console.log(player.hp);
    $playerLife.style.width = `${player.hp}%`;
    
    if(player.hp <= 0) {
        $arenas.appendChild(playerLose(player.name));
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle. innerText = name + ' lose';

    return $loseTitle;
}

function createElement(tag, className) {
    const el = document.createElement(tag);
    if(className) {
        el.classList.add(className)
    };

    return el;
}

function createPlayer(player) {
    const $player = createElement('div', `player${player.player}`);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = `${player.hp}%`;
    $name.innerText = player.name;
    $img.src = player.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer(player1);
createPlayer(player2);


/*## Task #2

Вычитать все время одно и тоже число не очень интересно, ведь тогда игра становится очень предсказуемой.
Твоя задача написать функцию рандомайзер, которая будет возвращать рандомное число от 1 до 20 и вычитать из жизни игрока это рандомное число. 

Пусть удача подскажет, кто победит.*/
const player1 = {
    name: 'Sonya Blade',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Kali\'s clubs', 'Garrotte', 'Pomegranates', 'Drone'],
    attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel fans', 'Flying blade', 'Bo', 'Razorang', 'Sai'],
    attack() {
        console.log(`${player2.name} Fight...`);
    }
}

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

function randomNumber() {
    return Math.ceil(Math.random()*20);
}

function changeHP(player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`); 
    const randomNum = randomNumber();
    console.log(randomNum);
    if(player.hp < randomNum) {
        player.hp = 0;
    } else {
        player.hp -= randomNum};
    console.log(player.hp);
    $playerLife.style.width = `${player.hp}%`;
    
    if(player.hp <= 0) {
        $arenas.appendChild(playerLose(player.name));
        $randomButton.remove();
    }
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle. innerText = name + ' lose';

    return $loseTitle;
}

function createElement(tag, className) {
    const el = document.createElement(tag);
    if(className) {
        el.classList.add(className)
    };

    return el;
}

function createPlayer(player) {
    const $player = createElement('div', `player${player.player}`);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = `${player.hp}%`;
    $name.innerText = player.name;
    $img.src = player.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer(player1);
createPlayer(player2);


/*## Task #3 (*)

Задача со звездочкой.

Сейчас мы пишем кто проиграл, т.к. это проще всего узнать.
Попробуй вместо этого вывести, кто победил. (Scorpion wins например)
Согласись, лучше знать победителя, чем проигравшего!
Еще после того как кто-то выиграл, кнопку Random нужно отключить.
Для этого достаточно применить метод **disabled** у кнопки
`$randomButton.disabled = true`*/
const player1 = {
    name: 'Sonya Blade',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Kali\'s clubs', 'Garrotte', 'Pomegranates', 'Drone'],
    attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel fans', 'Flying blade', 'Bo', 'Razorang', 'Sai'],
    attack() {
        console.log(`${player2.name} Fight...`);
    }
}

const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

$randomButton.addEventListener('click', function() {
    changeHP(player1);
    changeHP(player2);
})

function randomNumber() {
    return Math.ceil(Math.random()*20);
}

function changeHP(player) {
    const $playerLife = document.querySelector(`.player${player.player} .life`); 
    const randomNum = randomNumber();
    console.log(randomNum);
    if(player.hp < randomNum) {
        player.hp = 0;
    } else {
        player.hp -= randomNum};
    console.log(player.hp);
    $playerLife.style.width = `${player.hp}%`;
    
    if(player.hp <= 0) {
        $arenas.appendChild(playerWin());
        $randomButton.disabled = true;
    }
}

function playerWin() {
    const $winTitle = createElement('div', 'winTitle');
    let winPlayer;
    if (player1.hp === 0) {
        winPlayer = player2.name;
    } else {
        winPlayer = player1.name;
    };
    $winTitle.innerText = winPlayer + ' wins';

    return $winTitle;
}

/*function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle. innerText = name + ' lose';

    return $loseTitle;
}*/

function createElement(tag, className) {
    const el = document.createElement(tag);
    if(className) {
        el.classList.add(className)
    };

    return el;
}

function createPlayer(player) {
    const $player = createElement('div', `player${player.player}`);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = `${player.hp}%`;
    $name.innerText = player.name;
    $img.src = player.img;

    $arenas.appendChild($player);
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
}

createPlayer(player1);
createPlayer(player2);