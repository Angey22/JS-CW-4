/*
 * Цепочки вызовов - "chaining" методов.
 */
// Используется в тех случаях, когда необходимо произвести последовательные преобразования, каждое из которых является по своей сути - отдельной функцией.

// Например, у нас есть некий массив чисел "numbers" и нам нужно: 1) Отфильтровать все элементы этого массива и оставить в нем только те значения, которые ">2"; 2) После чего, все отфильтрованные значения "* на 3"; 3) Отсортировать преобразованные значения массива "по возрастанию". Данную комплексную задачу можно решить 2-я путями: 1-й - выполнить последовательно 3-и отдельные функции с соответствующими преобразованиями, и 2-й - создать в рамках одной функции "цепочку" необходимых преобразований.


// Исходный массив чисел
const numbers = [1, 5, 2, 4, 3];
// Выводим в лог значение переменной "numbers"
console.log('Исходный массив - "numbers" =>', numbers);
console.log('*******************************************');


// 1-й вариант решения задачи (3-и отдельные функции)
console.log('1-й вариант решения задачи (3-и отдельные функции):');

// Создаем функцию для фильтрации значений массива "numbers", с помощью метода "filter".
// 1-й вариант записи функции фильтрации (обычная запись)
const greaterThenTwo = numbers.filter(function (num) {
    return num > 2;
});
// Выводим в лог значение переменной "greaterThen"
console.log('- фильтруем (обычная запись) "greaterThenTwo" =>', greaterThenTwo);

// 2-й вариант записи функции фильтрации (стрелка)
const greaterThenTwo2 = numbers.filter(num => num > 2);
// Выводим в лог значение переменной "greaterThen2"
console.log('- фильтруем (стрелка) "greaterThenTwo2" =>', greaterThenTwo2);
console.log('-------------------------------------------');


// Создаем функцию для преобразования значений массива "greaterThenTwo2", с помощью метода "map".
// 1-й вариант записи функции преобразования (обычная запись)
const multByThree = greaterThenTwo2.map(function (num) {
    return num * 3
});
// Выводим в лог значение переменной "multByThree"
console.log('- преобразовываем (обычная запись) "multByThree" =>', multByThree);

// 2-й вариант записи функции преобразования (стрелка)
const multByThree2 = greaterThenTwo2.map(num => num * 3);
// Выводим в лог значение переменной "multByThree2"
console.log('- преобразовываем (стрелка) "multByThree2" =>', multByThree2);
console.log('-------------------------------------------');


// Создаем функцию для сортировки значений массива "multByThree2", с помощью метода "map".
// 1-й вариант записи функции сортировки (обычная запись)
const sortedByAscending = multByThree.sort(function (a, b) {
    return a - b;
});
// Выводим в лог значение переменной "sortedByAscending"
console.log('- сортируем (обычная запись) "sortedByAscending" =>', sortedByAscending);

// 2-й вариант записи функции сортировки (стрелка)
const sortedByAscending2 = multByThree.sort((a, b) => a - b);
console.log('- сортируем (стрелка) "sortedByAscending2" =>', sortedByAscending2);
console.log('*******************************************');

// 2-й вариант решения задачи ("чейнинг" методов)
console.log('2-й вариант решения задачи ("чейнинг" методов):');

// Создаем одну, единую функцию, состоящую из цепочки трех предыдуще описанных функций, в которых были использованны стандартные методы массивов "filter", "map" и "sort".
const sorted = numbers
    .filter(num => num > 2)
    .map(num => num * 3)
    .sort((a, b) => a - b);
// Выводим в лог переменную "sorted"
console.log('- результат всех преобразований - "sorted"', sorted);
console.log('*******************************************');

// Особенностью выше приведенного примера цепочки методов является то, что каждый из использованных методов в примере возвращает новый массив.



/*
 * Сортируем тех кто онлайн по рангу (по возрастанию ранга)
 * - сначала фильтруем
 * - потом сортируем
 */
// Пример использования "chaining" методов для обработки массивов объектов

// Исходный массив объектов - база данных
const players = [
    { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
    { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
    { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
    { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
    { id: 'id-5', tag: 'Chelsy', isOnline: false, rank: 200 },
];
//  Выводим в консоль переменную "players"
console.log('Исходный массив объектов - "players":');
console.table(players);
console.log('-------------------------------------------');

// Создаем функцию
const onlineAndSorted = players
    // Фильтруем тех, кто онлайн
    .filter(player => player.isOnline) // Сортирует - "true"
    // .filter(player => !player.isOnline) // Сортирует - "false"
    // Сортируем по рангу
    .sort((playerA, playerB) => playerA.rank - playerB.rank);
// Выводим в консоль переменную "onlineAndSorted"
console.log('Обработанный массив объектов - "onlineAndSorted":');
console.table(onlineAndSorted);
console.log('*******************************************');



/*
 * Chaining в методах объекта как jquery
 */

const element = {
    class: '',
    hovered: false,
    changeClass(cls) {
        this.class = cls;

        return this;
    },
    toggleHovered() {
        this.hovered = !this.hovered;

        return this;
    },
};

element.toggleHovered().changeClass('open').toggleHovered();
console.log(element);