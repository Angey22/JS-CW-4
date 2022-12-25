/*
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */
// Другими словами, "замыкание" это способ создания отдельного класса функций, которые имеют доступ к области видимости той функции высшего порядка, которая их порадила. Созданные с помощью замыкания функции могут находится вне тела породившей их функции, и при этом, иметь доступ к области видимости родительской функции (т.е., они имеют доступ к переменным и алгоритмам которые находятся внутри родительской функции, и не доступны для других фрагментов кода находящихся в скрипте).

// Родительская функция высшего порядка, которая в результате своей работы возвращает дочернюю функцию "innerFunction"
const fnA = function (parameter) {
    const innerVariable = 'значение внутренней переменной функции fnA';

    // Код инициирующий создание дочерней функции
    const innerFunction = function () {
        console.log(parameter);
        console.log(innerVariable);
        console.log('Это вызов innerFunction');
    };

    return innerFunction;
};

// Присваиваем переменной "fnB" результат работы функции высшего порядка "fnA" с заданым аргументом "555", т.е. присваиваем переменной "fnB" - дочернюю функцию "innerFunction".
const fnB = fnA(555);

// Выводим в консоль значение переменной "fnB"
console.log('Значение переменной "fnB":');
console.log(fnB);

// Вызываем-активируем дочернюю функцию "fnB"
console.log('Вызываем-активируем дочернюю функцию "fnB", за пределами тела порадившей ее, материнской функции:');
fnB();



console.log('******************************************');
// *******************************************************



/*
 * Поварёнок
 */
// Пример использования "замыкания".

// Создаем обычную функцию, и присваиваем ее переменной "makeDish". Функция должна принимать в качестве параметров два аргумента: 1) текстовый литерал - имени шеф-повара (sheffName); 2) текстовый литерал - названия блюда (dish). В результате своей работы, функция должна "консолить" переданные ей в качестве аргументов текстовые литералы в определенном порядке.
const makeDish = function (sheffName, dish) {
    console.log(`${sheffName} готовит ${dish}`);
};

// Прямой вызов функции "makeDish" с указанием одинакового имени "шеф-повара" (Mango) и разных блюд
console.log('Прямой вызов фун-ии "makeDish", с обращением к шеф-повару "Mango":');
makeDish('Mango', 'пирожок');
makeDish('Mango', 'омлет');
makeDish('Mango', 'чай');

// Прямой вызов функции "makeDish" с указанием одинакового имени "шеф-повара" (Poly) и разных блюд
console.log('Прямой вызов фун-ии "makeDish", с обращением к шеф-повару "Poly":');
makeDish('Poly', 'котлеты');
makeDish('Poly', 'супчик');
makeDish('Poly', 'кофе');

// Создаем функцию высшего порядка, которая в качестве дочерней функции будет использовать выше описанный код функции "makeDish". Это позволит задавать параметр имени "шеф-повара" один раз, после чего передавать в дочернюю функцию только "название блюда", которое должен сделать повар. Данная конструкция позволит уменьшить количество параметров запроса, при повторном обращении к одному и тому-же повару.
const makeSheff = function (name) { // Задаем только имя повара
    const innverVar = 555;
    const message = 'hello';

    const makeDish = function (dish) { // Задаем только название блюда
        console.log('Переменная из тела родительской функции ->', message);
        console.log('Переменная из тела родительской функции ->', innverVar);
        console.log(`"${name}" готовит - ${dish}`);
    };

    return makeDish;
};

// Создаем переменную "mango", в которую записываем имя нужного нам повара, т.е. задаем аргумент параметру функции высшего порядка "makeSheff", который используется в качестве элемента для её дочерней функции "makeDish".
const mango = makeSheff('Mango');

// Выводим в консоль содерживое переменной "mango"
console.log('Содержимое переменной "mango":');
console.dir(mango);

// Задаем дочерней функции "makeSheff" параметр в виде названия блюд, которые должен приготовить "шеф-повар" Mango.
console.log('Активируем дочернюю функцию "makeDish" через переменную "mango()":');
mango('котлеты');
console.log('------------------------------------------');
mango('пирожок');

// Создаем переменную "poly", в которую записываем имя нужного нам повара, т.е. задаем аргумент параметру функции высшего порядка "makeSheff", который используется в качестве элемента для её дочерней функции "makeDish".
const poly = makeSheff('Poly');

// Выводим в консоль содерживое переменной "poly"
console.log('Содержимое переменной "poly":');
console.dir(poly);

// Задаем дочерней функции "makeSheff" параметр в виде названия блюд, которые должен приготовить "шеф-повар" Poly.
console.log('Активируем дочернюю функцию "makeDish" через переменную "poly()":');
poly('чай');
console.log('------------------------------------------');
poly('омлет');

console.dir(mango);


console.log('******************************************');
// *******************************************************



/*
 * Округлятор 🤷‍♂️
 */
// Еще один пример использования "замыкания".

const floatingPoint = 3.456789;
const someInt = Math.round(floatingPoint); // => 3
const withDecimals = Number(floatingPoint.toFixed(2)); // => 3.46

const rounderX = function (number, places) {
    return Number(number.toFixed(places));
};

console.log(rounderX(3.4567, 2));
console.log(rounderX(3.4567, 3));
console.log(rounderX(5.1234, 2));
console.log(rounderX(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.log('------------------------------------------');
console.dir(rounder2);
console.dir(rounder3);
console.log('------------------------------------------');

console.log(rounder2(3.4567));
console.log(rounder2(5.4512312312367));
console.log(rounder3(3.4567));
console.log(rounder2(5.1234));
console.log(rounder3(3.4567));
console.log(rounder3(10.67667));



console.log('******************************************');
// *******************************************************



/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             if (amount > 1000) {
//                 return 'Ты офигел?';
//             }

//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарпалата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());

// console.log(salaryManager.raise(10000000));

// console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());