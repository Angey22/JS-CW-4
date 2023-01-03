/*
* Цепочки вызовов - "chaining".
*/

// Исходная переменная с массивом
const numbers = [1, 5, 2, 4, 3];

// Функция - сортировки значения ">2" (обычная запись)
const greaterThenThwo = numbers.filter(
    function (num) {
        return num > 2;
    }
);
// Вывод в лог результатов работы функции "greaterThenThwo"
console.log('Обячная функция "greaterThenThwo"', greaterThenThwo);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция - сортировки значения ">2" (стрелка)
const greaterThenThwoArrow = numbers.filter(
    num => num > 2);
// Вывод в лог результатов работы функции "greaterThenThwo"
console.log('Стрелочная функция "greaterThenThwoArrow"', greaterThenThwoArrow);
console.log('*******************************************');

//********************************************************

// Функция - умножения значения "на 3" (обычная запись)
const multByTwo = greaterThenThwo.map(
    function (num) {
        return num * 3;
    }
);
// Вывод в лог результатов работы функции "multByTwo"
console.log('Обячная функция', multByTwo);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция - умножения значения "на 3" (стрелка)
const multByTwoArrow = greaterThenThwo.map(
    num => num * 3);
// Вывод в лог результатов работы функции "multByTwoArrow"
console.log('Стрелочная функция', multByTwoArrow);
console.log('*******************************************');

//********************************************************

// Функция - сортировки (обычная запись)
const sorted = multByTwo.sort(function (a, b) {
        return a - b;
    }
);
// Вывод в лог результатов работы функции "sorted"
console.log('Обячная функция', sorted);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция - сортировки (стрелка)
const sortedArrow = multByTwo.sort((a, b) => a - b);
// Вывод в лог результатов работы функции "sortedArrow"
console.log('Стрелочная функция', sortedArrow);
console.log('*******************************************');

//********************************************************

// Функция - "чейнинг" (обычная запись)
const res = numbers
    .filter(function (num) {
        return num > 2;
    })
    .map(function (num) {
        return num * 3;
    })
    .sort(function (a, b) {
        return a - b;
    });
// Вывод в лог результатов работы функции "res"
console.log('Обячная функция', res);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция - "чейнинг" (стрелка)
const resArrow = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
// Вывод в лог результатов работы функции "resArrow"
console.log('Стрелочная функция', resArrow);
console.log('*******************************************');



/*
* Сортируем тех, кто онлайн, по рангу
*/

// Переменная с массивом объектов - базой данных.
const players = [
    { id: 'id-1', tag: 'Mango', isOnLine: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnLine: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnLine: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnLine: true, rank: 400 },
];

// Функция - сортирующая пользователей (обычная запись)
const onlineAndSorted = players
    .filter(function (player) {
        return player.isOnLine;
    })
    .sort(function (prevPlayer, nextPlayer) {
        return prevPlayer.rank - nextPlayer.rank;
    });
// Выводим в лог результат работы функции "onlineAndSorted"
console.table('Обычная функция ->', onlineAndSorted);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция - сортирующая пользователей (стрелка)
const onlineAndSortedArrow = players
    .filter(player => player.isOnLine)
    .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
// Выводим в лог результат работы функции "onlineAndSortedArrow"
console.table('Стрелочная функция ->', onlineAndSortedArrow);
console.log('*******************************************');



/*
* Увеличиваем количество "поинтов" каждого игрока
*/

// Переменная с массивом объектов - базой данных.
const players2 = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Функция обработки "поинтов" (обычная запись)
const upatedPlayers = players2.map(function (player) {
    return {
        ...player,
        points: player.points + player.points * 0.1,
    };
});

console.log('Обычная функция:');
console.table(upatedPlayers);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция обработки "поинтов" (стрелка)
const upatedPlayersArrow = players2.map((player) => ({
        ...player,
        points: player.points + player.points * 0.1,
    }));

console.log('Стрелочная функция:');
console.table(upatedPlayersArrow);
console.log('*******************************************');



/*
* Увеличиваем количество часов игрока по id
*/

// Некая вспомогательная переменная
const playerIdToUpdate = 'player-3';

// Функция для обработки "players2" (обычная запись)
const upatedPlayers2 = players2.map(function (player) {
    if (player.id === playerIdToUpdate) {
        return {
            ...player,
            timePlayed: player.timePlayed + 50,
        };
    }
    return player;
});
// Выводим в лог результат работы функции "upatedPlayers2"
console.log('Обычная функция:');
console.table(upatedPlayers2);
console.log('-------------------------------------------');

//---------------------------------------------------------

// Функция для обработки "players2" (стрелка)
const upatedPlayers2Arrow = players2.map(player => {
    // 1-й вариант
    // if (player.id === playerIdToUpdate) {
    //     return {
    //         ...player,
    //         timePlayed: player.timePlayed + 50,
    //     };
    // }
    // return player;

    // 2-й вариант
    return player.id === playerIdToUpdate
        ? { ...player, timePlayed: player.timePlayed + 50 }
        : player;
});
// Выводим в лог результат работы функции "upatedPlayers2Arrow"
console.log('Стрелочная функция:');
console.table(upatedPlayers2Arrow);
