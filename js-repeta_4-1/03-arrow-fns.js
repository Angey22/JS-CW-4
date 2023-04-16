//! Видео - 1:47:00...

/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */
// Синтаксис стрелачных функций - позволяет в более лаконичном виде записать функцию, особенно это удобно при записи кода "маленьких" функций, запись которых может уместится в одну строку.

// *******************************************************
// Пример записи одной и той-же функции 2-я способами:

// Функция "add", записанная с использованием стандартного синтаксиса
const add = function (a, b, c) {
    // 1-я инструкция
    console.log('Лог внутри функц-ии "add":', a, b, c);
    // 2-я инструкция
    return a + b + c;
};
// Вывод в лог результата работы функции "add"
console.log('Результат функц-ии "add" =', add(5, 10, 15));
console.log('------------------------------------------');

// Функция "addArrow", записанная с использованием сокращенного, стрелочного синтаксиса записи функций.
const addArrow = (a, b, c) => {
    // 1-я инструкция
    console.log('Лог внутри функц-ии "addArrow":',a, b, c);
    // 2-я инструкция
    return a + b + c;
};
// Вывод в лог результата работы функции "addArrow"
console.log('Результат функц-ии "addArrow" =', addArrow(5, 10, 15));
console.log('------------------------------------------');
// *******************************************************

// Дополнительными синтаксическими правилами записи стрелочных функций являются:
// 1) Правила записи скобок с условиями функции для двух и более параметров - "круглые скобки обязательны для тех функций, в которых 2-а и более параметра";
// 2) Запись круглых скобок с условием функции - не обязательна, если у функции всего один параметр. В таких случаях круглые скобки можно не проставлять, а параметр функции можно писать между знаками "=" и "=>";
// 3) Если у функции нет параметров, то обязательно необходимо проставить пустые скобки;

// *******************************************************

// Если функция имеет внутри своего тела всего одно правило, которое возвращается в результате ее работы, то она может быть записана в виде стрелочной функции - в одну строку, и без необходимость использования служебного слова "return". Если в функции 2-а и более правил-инструкций, то в ее теле всегда необходимо использовать - "return" (см. запись вышеописанной стрелочной функции "addArrow", в теле которой находится 2-а инструкции).

// Пример записи функции с одним правилом-инструкцией:

// Функция "add2", записанная с использованием стандартного синтаксиса
const add2 = function (a, b, c) {
    return a + b + c;
};
// Вывод в лог результата работы функции "add2"
console.log('Функ-ия "add2" =', add2(5, 10, 15));
console.log('------------------------------------------');

// Функция "addArrow2", записанная с использованием сокращенного, стрелочного синтаксиса записи функций, без служебного слова "return".
const addArrow2 = (a, b, c) => a + b + c;
// Вывод в лог результата работы функции "add2"
console.log('Функ-ия "addArrow2" =', addArrow2(5, 10, 15));
console.log('------------------------------------------');

// Синтаксически - запись кода функции с использованием служебного слова "return" называется - "записью функции с явным возвратом", а без служебного слова "return" - "записью с НЕ явным возвратом". Стрелочные функции с НЕ явным возвратом, сразу после знака "=>", могут содержать ТОЛЬКО какое-нибудь одно правило, например: правило сравнения, математическую операцию, литерал текстового, числового и других типов данных, или другие односложные (записанные в одну строку) правила-инструкции.

// При необходимости записи стрелочной функции с НЕ явным возвратом, в результате работы которой должен вернцться объект, синтаксис записи после знака "=>" в обязательном порядке должен содержать круглые скобки "()", иначе возможно возникновение ошибки. Пример корректной записи стрелочной функции, которая НЕ авным способом возвращяет объект:
// Правильная запись
const arrowA = () => ({ arrowA: 5 }); // => { arrowA: 5 }

// НЕ правильная запись
const arrowB = () => { arrowA: 5 }; // => Вызовет ошибку!!!
// Ошибка будет вызвана тем, что интерпритатор не воспринимает в данном случае фигурные скобки в качестве границ объекта, а принимает их за границы тела функции.
// *******************************************************

// Еще одной отличительной чертой стрелочных функций от функций со стандартным синтаксисом записи, является то, что в теле стрелочных функций ОТСУТСТВУЕТ стандартная переменная "arguments" (которая предназначена для сбора всех параметров функции в один объект). Попытка вызвать подобную стандартную переменную в стрелочных функциях - приводит к возникновению ошибки.

// Функция "add3", записанная с использованием стандартного синтаксиса
const add3 = function (a, b, c) {
    // Выводим в лог "arguments" фун-ии "add3"
    console.log('Лог внутри функц-ии "add3" со стандартным набором "arguments":', arguments);
    
    return a + b + c;
};
// Вывод в лог результата работы функции "add3"
console.log('Результат функц-ии "add" =', add3(5, 10, 15));
console.log('------------------------------------------');


// Функция "addArrow3", записанная с использованием сокращенного, стрелочного синтаксиса записи функций.
const addArrow3 = (a, b, c) => {
    // Выводим в лог "arguments" фун-ии "addArrow3"
    // console.log('Лог внутри функц-ии "addArrow3"со стандартным набором "arguments":', arguments);
    
    return a + b + c;
};
// Вывод в лог результата работы функции "addArrow3"
console.log('Результат функц-ии "addArrow3" =', addArrow3(5, 10, 15));
console.log('------------------------------------------');

// В случаях, когда в стрелочных функциях все-же необходимо выполнить операцию сбора параметров в единый массив или объект, то это можно выполнить с помощью операции "rest".
const addArrow4 = (...args) => {
    // Выводим в лог "arguments" фун-ии "addArrow3"
    console.log('Лог внутри функц-ии "addArrow3" с  набором параметров собраных через "rest":', args);
    
    // return a + b + c;
};
// Вывод в лог результата работы функции "addArrow3"
console.log('Результат функц-ии "addArrow4" =', addArrow4(5, 10, 15));
console.log('------------------------------------------');
// *******************************************************
// console.log(addArrow(5, 10, 15));

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);