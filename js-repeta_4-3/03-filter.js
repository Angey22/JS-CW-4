//! Видео - 0:35:00...0:50:05

/*
 * Array.prototype.filter()
 * - Поэлементо перебирает оригинальный массив;
 * - Возвращает новый массив (с элементами или пустой);
 * - Добавляет в возвращаемый массив элементы которые; удовлетворяют условию коллбек-функции:
 *    - если коллбек вернул "true" элемент добавляется в возвращаемый массив;
 *    - если коллбек вернул "false" элемент НЕ добавляется в возвращаемый массив.
 */
console.groupCollapsed('Array.prototype.filter()'); //! Log group name

// Исходный массив с числами
const numbers = [5, 10, 15, 20, 25];

// Используем функцию-фильтр "filter" для создания нового массива чисел, в который войдут значения удовлетворяющие логические правила при переборе исходного массива чисел. Например, из исходного массива "numbers" нужно выбрать все числа которые "< 10" или "> 20".
const filteredNumbers = numbers.filter(number => number < 10 || number > 20);
// Выводим в лог значение переменной "filteredNumbers"
console.log('Значение переменной "filteredNumbers":');
console.log(filteredNumbers);

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Получаем массив всех онлайн игроков
 */
console.groupCollapsed('Получаем массив всех онлайн игроков'); //! Log group name

// Пример использования функции-фильтра "filter" для создания нового массива объектов на основе существующего исходного массива объектов - базы данных. Например, из существующего массива объектов нам нужно выбрать только те объекты, у которых свойство "online" -> "true", и из этих объектов создать новый массив.

// Исходный массив объектов - база данных
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
// Выводим в лог исходный массив объектов "players"
console.log('Исходный массив "players":');
console.table(players);
console.log('------------------------------------------');

// Функция-фильтр "filter" для выбора объектов, у которых свойство "online" -> "true".
// 1-й вариант записи функции
const onlinePlayers = players.filter(player => player.online);
// Выводим в лог исходный массив объектов "onlinePlayers"
console.log('Новый массив "onlinePlayers":');
console.table(onlinePlayers);
console.log('------------------------------------------');

// 2-й вариант записи функции, основаном на использовании деструкторизации
const onlinePlayers2 = players.filter(({ online }) => online);
// Выводим в лог исходный массив объектов "onlinePlayers2"
console.log('Новый массив "onlinePlayers2":');
console.table(onlinePlayers2);


console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Получаем массив всех оффлайн игроков
 */
console.groupCollapsed('Получаем массив всех оффлайн игроков'); //! Log group name

// Продолжение предыдущего примера, но с обратным условием фильтрации

// Функция-фильтр "filter" для выбора объектов, у которых свойство "online" -> "false".
const offlinePlayers = players.filter(player => !player.online);
// Выводим в лог исходный массив объектов "offlinePlayers"
console.log('Новый массив "offlinePlayers":');
console.table(offlinePlayers);

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


/*
 * Получаем список "хардкорных" игроков, у которых время проведенное в игре - больше 250.
 */
console.groupCollapsed('Получаем список "хардкорных" игроков'); //! Log group name

// Продолжение предыдущего примера, но с другим условием "фильтрации". В этом варианте необходимо выбрать "играков", у которых показатель времени проведенного в угре - превышает показатель в "250" единиц.

// Функция-фильтр "filter" для выбора объектов, у которых свойство "timePlayed" > "250".
const hardcorePlayers = players.filter(player => player.timePlayed > 250);
// Выводим в лог исходный массив объектов "hardcorePlayers"
console.log('Новый массив "hardcorePlayers":');
console.table(hardcorePlayers);
console.log('------------------------------------------');



// Важной особенностью функции-фильтра "filter" является то, что если в процессе ее работы - НЕБЫЛО найдено ни одного элемента из исходного массива, который отвечает условиям "фильтрации", то - возвращается пустой массив.

// Функция-фильтр "filter" для выбора объектов, у которых свойство "timePlayed" > "2500".
const hardcorePlayers2 = players.filter(player => player.timePlayed > 2500);
// Выводим в лог исходный массив объектов "hardcorePlayers"
console.log('Новый массив "hardcorePlayers2":');
console.table(hardcorePlayers2);

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');
