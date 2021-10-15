/* ## Task #0

Создай два объекта с именем разных игроков, где будут поля 
- name - это строка;
- hp - это число;
- img - это строка;
- weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать, не имеет пока значение какое);
- attack - это функция, внутри которой нужно поместить console.log, который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);  */
/*const player1 = {
    name: 'Sonya Blade',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Kali\'s clubs', 'Garrotte', 'Pomegranates', 'Drone'],
    attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Kitana',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel fans', 'Flying blade', 'Bo', 'Razorang', 'Sai'],
    attack() {
        console.log(`${player2.name} Fight...`);
    }
}*/


/*## Task #1

Итак, нужно создать функцию с именем **`createPlayer()`** ,внутри которой ты напишешь создание элемента **div** с классом **player1** (далее ***div.player1***), внутри этого элемента 
есть еще два элемента ***div.progressbar*** и ***div.character***. Внутри ***div.progressbar*** есть еще два дива —  ***div.life*** и ***div.name***. Внутри ***div.character*** есть 
только картинка ***img***.

- Для ***div.life*** добавь свойство style.width в значение 100%;
- Для ***div.name*** нужно положить текст, это имя нашего героя.
- Для картинки можешь взять любую ссылку из приведенных ниже.

Структура готового HTML будет выглядеть примерно так.

```html
<div class="player1">
    <div class="progressbar">
        <div class="life"></div>
        <div class="name">SCORPION</div>
    </div>
    <div class="character">
        <img src="http://reactmarathon-api.herokuapp.com/assets/scorpion.gif" />
    </div>
</div>
```

### Ссылки для картинки

- http://reactmarathon-api.herokuapp.com/assets/scorpion.gif
- http://reactmarathon-api.herokuapp.com/assets/kitana.gif
- http://reactmarathon-api.herokuapp.com/assets/liukang.gif
- http://reactmarathon-api.herokuapp.com/assets/sonya.gif
- http://reactmarathon-api.herokuapp.com/assets/subzero.gif*/

/*function createPlayer() {
    const $root = document.querySelector('.root');

    const $player1 = document.createElement('div');
    $player1.classList.add('player1');
    $root.appendChild($player1);


    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = '100%';
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = 'SCORPION<';
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $character.appendChild($img);
}*/


/*## Task #2

После того как функция будет реализована, потребуется передать в эту функцию три аргумента. Первый аргумент — это класс первого или второго игрока, 
т.е. player1 или player2.

Второй аргумент — имя Игрока, это может быть любое Имя.

Третий аргумент — жизни, передавать надо от 0 до 100.

И дальше позвать эту функцию два раза в коде, один раз со значение player1, второй раз со значение player2.

Пример вызова функции выглядит так:

```jsx
createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);
```

### Важно!

> В каждой функции после создания всех нужных элементов, родительский элемент нужно поместить в **div.arenas**
Как это делать вы знаете, при помощи `appendChild()`
> 

Таким образом у вас в *div.arenas* будут располагаться два дива с классом *player1* и *player2**/

/*function createPlayer(classPlayer, namePlayer, hp) {
    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    $player.classList.add(classPlayer);
    $arenas.appendChild($player);


    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${hp}%`;
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = namePlayer;
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif';
    $character.appendChild($img);
}

createPlayer('player1', 'SCORPION', 50);
createPlayer('player2', 'SUB-ZERO', 80);*/


/*## Task #3 (*)

Это задание со звездочкой.

Передай в функцию createPlayer всего лишь два аргумента, 1 аргумент это строка 'player1' или 'player2' второй аргумент — это объект твоего игрока из задания Task#0.

Необходимые поля, такие как name, hp, img вставь в нужные места в коде.*/

const player1 = {
    name: 'Sonya Blade',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['Wind Blade', 'Kali\'s clubs', 'Garrotte', 'Pomegranates', 'Drone'],
    attack() {
        console.log(`${player1.name} Fight...`);
    }
}

const player2 = {
    name: 'Kitana',
    hp: 10,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['Steel fans', 'Flying blade', 'Bo', 'Razorang', 'Sai'],
    attack() {
        console.log(`${player2.name} Fight...`);
    }
}

function createPlayer(playerNumber, player) {
    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    $player.classList.add(playerNumber);
    $arenas.appendChild($player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player.appendChild($character);

    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = `${player.hp}%`;
    $progressbar.appendChild($life);

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);
}

createPlayer('player1', player1);
createPlayer('player2', player2);