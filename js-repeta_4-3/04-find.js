/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 */
// Функция "find" предназначена для поиска одного уникального элемента в коллекции (первый поповшийся, который удовлетворяет условия поиска).

// Создаем исходную переменную-массив "numbers"
const numbers = [5, 10, 15, 20, 25];
console.log('Исходный массив "numbers" =>', numbers);
console.log('------------------------------------------');

// Создаем функцию "find" для поиска необходимого элемента в исходном массиве "numbers", по условию - чтобы найденное значение было "> 10".
const number = numbers.find(number => number > 10);
// Выводим в лог значение переменной "number"
console.log('Поиск значения - "> 10" =>', number);
console.log('------------------------------------------');

// Важной особенностью работы функции "find" является то, что она находит и возвращает первое попавшееся значение, которое удовлетворяет условию, в не зависимости от того, что подобных значений-элементов, может быть несколько в коллекции-массиве. После нахождения первого подходящего элемента, функция завершает свою работу и возвращает найденое значение. Именно поэтому, при использовании данного метода, лучше всего использовать в качестве условия поиска строгое равенство "===", которое позволит найти какой-либо один, уникальный элемент коллекции.

// Создаем функцию "find" для поиска необходимого элемента в исходном массиве "numbers", по условию - чтобы найденное значение было "=== 10".
const number2 = numbers.find(number => number === 10);
// Выводим в лог значение переменной "number2"
console.log('Поиск значения - "=== 10" =>', number2);
console.log('------------------------------------------');

// Создаем функцию "find" для поиска необходимого элемента в исходном массиве "numbers", по условию - которое заведомо НЕ выполнимо.
const number3 = numbers.find(number => number === 100);
// Выводим в лог значение переменной "number2"
console.log('Поиск значения - "=== 100" =>', number3);
console.log('******************************************');

// В случаях, когда функции "find" не удалось найти элемент, который удовлетворял бы условия, она всегда возвращает - "undefined".



/*
 * Ищем игрока по id
 */
// Пример использования функции "find" для поиска в массиве объектов - базе данных, какого-либо одного объекта, по его уникальному признаку. 

// Исходный массив объектов - база данных
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
// Выводим в лог исходный массив объектов "players"
console.log('Исходный массив объектов "players":')
console.table(players);
console.log('------------------------------------------');

// Создаем переменную "playerIdToFind", которой присваиваем значение - уникальный признак для последующего поиска
const playerIdToFind = 'player-3';

// Задаем параметры поиска функции "find" используя ранее созданную переменную playerIdToFind".
// 1-й вариант записи функции
const playerWithId = players.find(player => player.id === playerIdToFind);
// Выводим в лог значение переменной "playerWithId"
console.log('1-й вариант записи функции - "playerWithId":')
console.log(playerWithId);
console.log('------------------------------------------');

// 2-й вариант записи функции, с использованием деструкторизации
const playerWithId2 = players.find(({ id }) => id === playerIdToFind);
// Выводим в лог значение переменной "playerWithId"
console.log('2-й вариант записи функции - "playerWithId2":')
console.log(playerWithId2);
console.log('******************************************');



// Пример создания отдельной функции в теле которой используется встроенная функция "find". Например, создадим функцию "finPlayerById", которая будет принемать в себя 2-а параметра: 1) Переменную с исходным массивом объектов - базой данных; 2) Переменную со значением "id" (одного свойства объекта, который необходимо найти).
const finPlayerById = (allPlayer, playerId) => {
  return allPlayer.find(({ id }) => id === playerId);
};

// Вызываем фун-ию "finPlayerById" для поиска элемента с id = "player-1"
console.log('Ищем объект с id - "player-1":');
console.log(finPlayerById(players, 'player-1'));
console.log('------------------------------------------');

// Вызываем фун-ию "finPlayerById" для поиска элемента с id = "player-4"
console.log('Ищем объект с id - "player-4":');
console.log(finPlayerById(players, 'player-4'));
console.log('******************************************');



/*
 * Ищем игрока по имени
 */
// Продолжение предыдущего примера использования функции "find", но с использованием для поиска нужного элемента коллекции другого критерия.

// Создаем переменную с критерием поиска необходимого элемента в исходном массиве объектов
const playerNameToFind = 'Poly';

// Задаем функции "find" необходимые параметры поиска, используя для этой цели ранее созданную переменную "playerNameToFind"
const playerWithName = players.find(player => player.name === playerNameToFind);
// Выводим в лог значение переменной "playerWithName"
console.log('Поиск элемента по "имени пользователя" ->', playerNameToFind);
console.log('Результат работы функции поиска:');
console.log(playerWithName);
