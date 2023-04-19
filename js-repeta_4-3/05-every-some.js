//! Видео - 0:58:00...0:00:00

// Исходный массив объектов - база данных
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
// Выводим в лог исхходный массив объектов "players"
console.log('Исходный массив объектов "players":');
console.table(players);
console.log('******************************************');



/*
 * Array.prototype.every()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает true если все элементы массива удовлетворяют условию
 */
// Упрощенно говоря метод "every" предназначен для того, чтобы проверить все элементы коллекции-массива на соответствие одному определенному правилу или условию. Например, необходимо проверить - во всех ли объектах исходного массива - базы данных, свойство "online" = "true". Если да, то метод "every" вернет булевое значение "true", а если нет, то - "false".

// Создаем функцию для проверки - "все ли игроки находятся онлайн", с использованием метода "every".
const isAllOnline = players.every(player => player.online);
// Выводим в лог значение переменной "isAllOnline"
console.log('isAllOnline => ', isAllOnline);
console.log('******************************************');



/*
 * Array.prototype.some()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает "true" если хотя бы один элемент массива удовлетворяет условию, и "false", если не один из элементов массива НЕ удовлетворяет условию
 */

// Создаем функцию для проверки - "есть ли хотябы один игрок онлайн", с использованием метода "every".
const isAnyOnline = players.some(player => player.online);
// Выводим в лог значение переменной "isAnyOnline"
console.log('isAnyOnline => ', isAnyOnline);
console.log('------------------------------------------');

// Создаем функцию для проверки - "есть ли хотябы один игрок, который наиграл более 400 часов", с использованием метода "every".
const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// Выводим в лог значение переменной "anyHardcorePlayers"
console.log('anyHardcorePlayers => ', anyHardcorePlayers);
