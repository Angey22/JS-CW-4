// Метод "sort"
console.log('Метод "sort"');
const arr = [1, 2, 64, 4, 22, 98, 44, 33];
console.log('Исходный массив =>', arr);
console.log('-------------------------------------------');

// Сортирует по умолчанию согласно значений "Юникода" элементов - строк массива, по возростанию
console.log(arr.sort());
console.log('-------------------------------------------');

// Сортировка по возростанию, строго отталкиваясь от чиссловых значений
console.log(arr.sort((a, b) => a - b));
console.log('-------------------------------------------');

// Сортировка по убыванию, строго отталкиваясь от чиссловых значений
console.log(arr.sort((a, b) => b - a));
console.log('*******************************************');

//!========================================================

// Метод "reduce"
console.log('Метод "reduce"');

arr.forEach((el, i) => console.log(`Индекс - "${i}" : элемент - "${el}"`));

const arrSum = arr.reduce((acc, el) => acc + el, 0);
// 1. (acc = 0, el = 1) => 0+1 | return 1;
// 2. (acc = 1, el = 2) => 1+2 | return 3;
// 3. (acc = 3, el = 64) => 3+64 | return 67;
// и т.д. до конца перебора массива...
console.log("arrSum", arrSum);
console.log('*******************************************');

//!========================================================

// Метод "filtr"
console.log('Метод "filtr"');

const arr2 = ['Katya', 'TARAS', 'nastya', 'aLonYa', 'ALEX', 'BogDan'];
console.log("arr2", arr2);
console.log('-------------------------------------------');

const fiteredArr = arr2.filter((el) => el === el.toUpperCase());
console.log("fiteredArr", fiteredArr);
console.log('*******************************************');

//!========================================================

// Метод "map"
console.log('Метод "map"');

const arr3 = [1, 2, 3, 4, 5];
console.log('Исходный массив - "arr3" =>', arr3);
console.log('-------------------------------------------');

const newArr = arr3.map((el) => el ** 2);
console.log('"newArr" =>', newArr);
console.log('-------------------------------------------');

console.log('Проверк исходного массива "arr3" =>', arr3);
console.log('*******************************************');

//!========================================================

// Метод "flatMap"
console.log('Метод "flatMap"');

const student = [
    {
        name: 'Alex',
        subject: ['Chemestry', 'Computer Sience'],
    },
    {
        name: 'Anastasia',
        subject: ['PE', 'Physics'],
    },
];
console.log('Исходный массив объектов "student";', student);
console.table(student);
console.log('-------------------------------------------');

const subjects1 = student.map((el) => el.subject);
console.log("subjects1", subjects1);
console.log('-------------------------------------------');

const subjects2 = student.flatMap((el) => el.subject);
console.log("subjects1", subjects2);
console.log('*******************************************');

//!========================================================

// Для того, что бы в "VS code" отображался такой же, как и у преподавателя ведущего вебинары, шрифт кода - нужно:
// 1. Скачать и установить на ПК шрифт "Fira code";
// 2. Настроить его использование для "VS code"

//!========================================================

// Для того, что бы в "VS code" отображались такие же, как и у преподавателя ведущего вебинары, hfpyjwdtnyst комментарии - нужно:
// - установить плагин для "VS code" - "Better comments".

//!========================================================


