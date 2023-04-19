//! Видео - 0:05:55...0:33:50

/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив такой же длины
 */
console.groupCollapsed('Array.prototype.map()'); //! Log group name

// Исходная переменная с массивом
const numbers = [5, 10, 15, 20, 25];
// Выводим в лог исходный массив
console.log('Исходный массив "numbers" =>', numbers);
console.log('------------------------------------------');

// Поэлементно перебираем массив "numbers" с помощью функции-цыкла "map"
const doubledNums = numbers.map(function (number, index) {
  // Выводим в лог значение переменной "number" и "index" прикаждой итерации цыкла
  console.log(`Элемент массива под индексом - [${index}] =>`, number);

  // Возврат из цыкла - "копии исходного, перебираемого массива, без каких-либо изменений его элементов"
  // return number;

  // Возврат из цыкла - "копии исходного, перебираемого массива, с умноженными на "2-а" значениями его элементов
  return number * 2;
});

// Выводим в лог с содержимое переменной "doubledNums", после выполнения функции-цыкла "map" на исходном массиве.
console.log('------------------------------------------');
console.log('Содержимое переменной "doubledNums" =>', doubledNums);
console.log('------------------------------------------');


// Рефакторим на "стрелку" синтаксическую запись функции в функции-цикле "map", и умножаем на "3-и" все значения элементов перебираемого массива
const doubledNumsArrow = numbers.map(number => number * 3);
// Выводим в лог с содержимое переменной "doubledNumsArrow", после выполнения функции-цыкла "map" на исходном массиве.
console.log('Содержимое переменной "doubledNumsArrow" =>', doubledNumsArrow);

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Получаем массив имён всех игроков
 */
console.groupCollapsed('Получаем массив имён всех игроков'); //! Log group name

// Пример использования функции-цыкла "map" для перебора массива объектов.

// Исходный массив объектов
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// Выводим в лог исходный массив объектов
console.log('Исходный массив объектов "players":');
console.table(players);
console.log('------------------------------------------');

// Создаем массив имен пользователей - "playerNames", на основе перебора массива объектов "players", с помощью функции-цыкла "map"
const playerNames = players.map(player => player.name);
// Выводим в лог значение переменной "playerNames"
console.log('"playerNames" =>', playerNames);
console.log('------------------------------------------');

// Создаем массив ID номеров пользователей - "playerIds", на основе перебора массива объектов "players", с помощью функции-цыкла "map"
const playerIds = players.map(player => player.id);
// Выводим в лог значение переменной "playerIds"
console.log('"playerIds" =>', playerIds);
console.log('------------------------------------------');

// Создаем массив объектов - "res", на основе исходного массива, из элементов которого нам нужно "вытянуть" несколько свойств (например, из каждого объекта исходного массива нам нужно "вытянуть" свойство "name" и "online")
const res = players.map(({ name, online }) => ({ name, online }));
console.log('"res":');
console.table(res);

console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */
console.groupCollapsed('Увеличиваем кол-во поинтов каждого игрока на 10%'); //! Log group name

// Пример использования функции-цыкла "map" для создания обновленной копии "исходного массива объектов" - "базы данных", в которой значения некоторых свойств объектов, одинаково для всех элементов соответствующего массива,изменены.

// Создаем переменную "upatedPlayers", в которую с помощью цыкла "map" записываем копию исходного массива "players" с измененными (увеличенными на 10%) значениями свойства "points"
const upatedPlayers = players.map(player => ({
  // Распыляем исходный массив "player"
  ...player,
  // Перезаписываем свойства "points" с нужными параметрами
  points: player.points * 1.1,
}));
// Выводим в лог значение переменной "upatedPlayers"
console.log('"upatedPlayers":');
console.table(upatedPlayers);

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


/*
 * Увеличиваем кол-во часов игрока по id
 */
console.groupCollapsed('Увеличиваем кол-во часов игрока по id'); //! Log group name

// Пример использования функции-цыкла "map()" для создания обновленной копии "исходного массива объектов" - с обновленным только одним каким-то заданным элементом исходного массива.

// Создаем переменную с текстовым литералом, который определяет свойство содержащееся в исходном массиве данных - подлежащего изменению. 
const playerIdToUpdate = 'player-3';

// Создаем функцию-цыкл "map", с помощью которого по идентификатору "id" мы должны в соответствующем объекте изменить значение свойства "timePlayed" (1-й способ записи).
const updatedPlayers = players.map(player => {

  // Задаем условие для поиска нужного объекта в перебираемом массиве объектов
  if (playerIdToUpdate === player.id) {
    return {

      // Распыляем исходный массив "player"
      ...player,

      // Перезаписываем свойства "timePlayed" с нужными параметрами
      timePlayed: player.timePlayed + 100,
    };
  }

  return player;
});
// Выводим в лог значение переменной "updatedPlayers"
console.log('"updatedPlayers":');
console.table(updatedPlayers);
console.log('------------------------------------------');

// 2-й способ записи, с использованием "тернарника"
const updatedPlayers2 = players.map(player =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 100 }
    : player,
);
// Выводим в лог значение переменной "updatedPlayers2"
console.log('"updatedPlayers2":');
console.table(updatedPlayers2);

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');
