//! Видео - 1:05:15...1:57:31

/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */
console.groupCollapsed('Array.prototype.reduce()'); //! Log group name

// Исходный массив чисел
const numbers = [5, 10, 15, 20, 25];
// Выводим в лог значение переменной "numbers"
console.log('Исходный массив "numbers" =>', numbers);
console.log('------------------------------------------');

// Пример использования метода "reduce" с пояснением сути его переменных "accumulator (acc)" и "number". Среди которых, переменная "acc" - является переменной в которой суммируются все значения перебираемого массива, и может быть заданной на первой итерации перебора, т.е. ее значение на первой итерации (начальное значение) можно задать (например, задать "0"). Если начальное значение переменной "acc" - не задавать, то оно будет равно значению первого элемента перебираемого массива.  Переменная "number" - содержит в себе значение каждого отдельного элемента массива, при его переборе, т.е., "5" на 1-й итерации перебора, "10" на 2-й и т.д.

const exampleReduce = numbers.reduce((acc, number) => {
  console.log("acc", acc);
  console.log("number", number);

  // Задаем правило возврата значения переменной "acc" для второй и всех последующих итераций перебора. Если убрать это правило, то начиная со второй итерации, значение всех последующих переменных "acc" будет - "undefined".
  return acc + number;
});
console.log('------------------------------------------');

// Пример использования метода "reduce" для подсчета суммы всех значений элементов массива "numbers", с установкой на первой итерации "acc = 0"
const total = numbers.reduce((acc, number) => acc + number, 0); // "0" - начальное значение переменной "acc" для первой итерации.
// Выводим в лог значение переменной "total"
console.log('Переменная "total" =', total);


// Илюстрация последовательного выполнения итераций перебора массива, и изменения значений его переменных в функции "total".
// 1-я accumulator (acc) = 0 -> number = 5 -> return 0 + 5
// 2-я accumulator (acc) = 5 -> number = 10 -> return 5 + 10
// 3-я accumulator (acc) = 15 -> number = 15 -> return 15 + 15
// 4-я accumulator (acc) = 30 -> number = 20 -> return 30 + 20
// 5-я accumulator (acc) = 50 -> number = 25 -> return 50 + 25

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * Считаем общую зарплату
 */
console.groupCollapsed('Считаем общую зарплату'); //! Log group name

// Пример использования метода "reduce" для обработки значений объекта

// Исходный объект
const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};
// Выводим в лог значение переменной "salary"
console.log('Исходный объект в переменной "salary":');
console.table(salary);
console.log('------------------------------------------');

// Создаем функцию для рассчета суммы значений свойств исходного объекта "salary" с помощью метода "reduce".
// 1-й вариант записи функции
const totalSalary = Object.values(salary).reduce(
  (total, value) => {
    return total + value;
  }, 0);
// Выводим в лог значение переменной "totalSalary"
console.log('1-й вариант - "totalSalary" =', totalSalary);
console.log('------------------------------------------');

// 2-й вариант записи функции
const totalSalary2 = Object.values(salary).reduce(
  (total, value) => total + value,
  0,
);
// Выводим в лог значение переменной "totalSalary2"
console.log('2-й вариант - "totalSalary2" =', totalSalary);


console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Считаем общее количество часов
 */
console.groupCollapsed('Считаем общее количество часов'); //! Log group name

// Исходный массив объектов - обрабатываемая база данных
const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
// Выводим в лог значение переменной "players"
console.log('Исходный массив объектов "players":');
console.table(players);
console.log('------------------------------------------');

// Создаем функцию для подсчета суммарного количества "часов", которые "отыграли" игроки на основе использования метода "reduce" и обработки им массива объектов "players"
// 1-й вариант записи функции
const totalTimePlayed = players.reduce(
  (totalTime, player) => {
    return totalTime + player.timePlayed;
  }, 0);
// Выводим в лог значение переменной "totalTimePlayed"
console.log('1-й вариант - "totalTimePlayed" =', totalTimePlayed);
console.log('------------------------------------------');

// 2-й вариант записи функции
const totalTimePlayed2 = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);
// Выводим в лог значение переменной "totalTimePlayed2"
console.log('2-й вариант - "totalTimePlayed2" =', totalTimePlayed2);
console.log('------------------------------------------');

// 3-й вариант записи функции, с использованием деструкторизации
const totalTimePlayed3 = players.reduce(
  (totalTime, {timePlayed}) => totalTime + timePlayed,
  0,
);
// Выводим в лог значение переменной "totalTimePlayed2"
console.log('3-й вариант - "totalTimePlayed3" =', totalTimePlayed3);

console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


/*
 * Считаем общую сумму товаров корзины
 */
console.groupCollapsed('Считаем общую сумму товаров корзины'); //! Log group name

// Еще один пример использования метода "reduce" для обработки массива объектов, основанном на обработке "типового примера корзины товаров".

// Исходный массив объектов - база данных
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];
// Выводим в лог значение переменной "cart"
console.log('Исходный массив объектов "cart":');
console.table(cart);
console.log('------------------------------------------');

// Создаем функцию для подсчета общей суммарной стоимости товара находящегося в корзине 
// 1-й вариант записи функции
const totalAmount = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);
// Выводим в лог значение переменной "totalAmount"
console.log('1-й вариант - "totalAmount" =', totalAmount);
console.log('------------------------------------------');

// 2-й вариант записи функции, с использованием деструкторизации и сокращенного вида записи без "return".
const totalAmount2 = cart.reduce(
  (total, { price, quantity }) => total + price * quantity,
  0,
);
// Выводим в лог значение переменной "totalAmount2"
console.log('2-й вариант - "totalAmount2" =', totalAmount2);


console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');


/*
 * Собираем все теги из твитов
 */
console.groupCollapsed('Собираем все теги из твитов'); //! Log group name

// Пример использования метода "reduce" для обработки массива объектов внутри которых находятся отдельные свойства - массивы.

// Исходный массив объектов - база данных, в которой собрана в определенном виде информация про "твоты" (идентифекатор твита - "id", лайки - "likes" и собственно теги - "tags", собранные в массив).
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
// Выводим в лог значение переменной "tweets"
console.log('Исходный массив объектов "tweets":');
console.table(tweets);
console.log('------------------------------------------');

// Создаем функцию, и собираем в переменную "allTags" массив всех тегов из исходной базы данных
// 1-й шаг
const allTags = tweets.reduce((tags, tweet) => {
  tags.push(tweet.tags);
  return tags;
}, []);
// Выводим в лог значение переменной "allTags"
console.log('1-й шаг, массив массивов "allTags" =>', allTags);
console.log('------------------------------------------');

// 2-й шаг
// 1-й вариант распыления
const allTags2 = tweets.reduce((tags, tweet) => {
  tags.push(...tweet.tags);
  return tags;
}, []);
// Выводим в лог значение переменной "allTags2"
console.log('2-й шаг (1-й вариант распыления), один массив "allTags2" =>', allTags2);
console.log('------------------------------------------');

// 2-й вариант распыления
const allTags3 = tweets.reduce((tags, tweet) => {
  return [...tags, ...tweet.tags];
}, []);
// Выводим в лог значение переменной "allTags3"
console.log('2-й шаг (2-й вариант распыления), один массив "allTags3" =>', allTags3);
console.log('------------------------------------------');

// 3-й шаг, упращенная запись функции в одну строку
const allTags4 = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// Выводим в лог значение переменной "allTags4"
console.log('3-й шаг, массив массивов "allTags4" =>', allTags4);


// Пояснение к изменению значений переменных функции на каждой последующей итерации:
// 1-я итерация - acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// 2-я итерация - acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']] =>  ['js', 'nodejs', 'html', 'css']

console.groupEnd(); //! Log group end
console.log('-5----------------------------------------------');


/*
 * Ведём статистику тегов
 */
console.groupCollapsed('Ведём статистику тегов'); //! Log group name

// 1-й вариант записи функции
console.log('Лог 1-го варианта записи функции "tagsStats" на каждой итерации:');
const tagsStats = allTags4.reduce((acc, tag) => {
  console.log('acc =', acc);

  if (acc[tag]) {
    acc[tag] += 1;

    return acc;
  }

  acc[tag] = 1;

  return acc;
}, {});
console.log('------------------------------------------');
// Выводим в лог значение переменной "tagsStats"
console.log('Значение переменной "tagsStats":');
console.log(tagsStats);
console.log('------------------------------------------');

// 2-й вариант записи функции
console.log('Лог 2-го варианта записи функции "tagsStats2" на каждой итерации:');
const tagsStats2 = allTags4.reduce((acc, tag) => {
  console.log('acc =', acc);

  if (acc[tag]) {
    return {
      ...acc,
      [tag]: acc.tag + 1, //! Замени "." на "[]" и уйдет NaN
    };
  }


  return {
    ...acc,
    [tag]: 1,
  };
}, {});
console.log('------------------------------------------');
// Выводим в лог значение переменной "tagsStats2"
console.log('Значение переменной "tagsStats2":');
console.log(tagsStats2);
console.log('------------------------------------------');
//! В логе появился "NaN" при выполнении операции сложения описанной в условиях "if". Это связано с тем, что код записан с ошибкой синтаксического характера. Если ее исправить - все будет Ок!)

// 3-й вариант записи функции
console.log('3-q варианта записи функции, содержание переменной "tagsStats3":');
const tagsStats3 = allTags4.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
// Выводим в лог содержимое переменной "tagsStats3"
console.log(tagsStats3);

//! Если свойство с ключом tag есть - увеличить его значение на 1.
//! Если свойствоства с ключом tag нет  - создать, и записать в него 1.

console.groupEnd(); //! Log group end
console.log('-6----------------------------------------------');

//! Еще пример
const getSum = array => array.reduce((acc, num, idx) => idx === 0 ? [num] : [...acc, num + acc[idx - 1]], []);

console.log(getSum([1, 2, 3, 4, 5])); // => [1, 3, 6, 10, 15]
