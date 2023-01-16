// Модуль 4. Занятие 8. Перебирающие методы массива

// Коллекция объектов для всех примеров с автомобилями
const cars = [
  { make: 'Honda', model: 'CR-V', type: 'suv', amount: 14, price: 24045, onSale: true },
  { make: 'Honda', model: 'Accord', type: 'sedan', amount: 2, price: 22455, onSale: true },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', amount: 8, price: 24195, onSale: false },
  { make: 'Mazda', model: 'CX-9', type: 'suv', amount: 7, price: 31520, onSale: true },
  { make: 'Toyota', model: '4Runner', type: 'suv', amount: 19, price: 34210, onSale: false },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', amount: 16, price: 45560, onSale: false },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', amount: 4, price: 24320, onSale: true },
  { make: 'Ford', model: 'F-150', type: 'truck', amount: 11, price: 27110, onSale: true },
  { make: 'Ford', model: 'Fusion', type: 'sedan', amount: 13, price: 22120, onSale: true },
  { make: 'Ford', model: 'Explorer', type: 'suv', amount: 6, price: 31660, onSale: false }
];
// Выводим в лог переменную "cars"
console.log('Исходный массив объектов "cars":', cars);
console.table(cars);
console.log('*******************************************');

// Example 1 - Метод map
// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.
console.log('Example 1 - Метод "map":');
console.log('-------------------------------------------');

// Пусть функция getModels возвращает массив моделей (поле model) всех автомобилей.

// 1-й вариант зыписи функции "getModels"
// const getModels = cars => {
//     return cars.map(car => car.model);
// };

// 2-й вариант зыписи функции "getModels"
const getModels = cars => cars.map(car => car.model);

// Активируем и выводим в лог результат работы функции "getModels"
console.log(getModels(cars));
console.log('*******************************************');

//!========================================================

// Example 2 - Метод map
console.log('Example 2 - Метод "map":');
console.log('-------------------------------------------');

// Пусть функция makeCarsWithDiscount возвращает новый массив объектов с изменным значением свойства price в зависимости от переданной скидки.

// Создаем функцию "makeCarsWithDiscount"
const makeCarsWithDiscount = (cars, discount) => cars.map(car => {
    car.price -= car.price * discount;
    return car;
});
// Активируем и выводим в лог результат работы функции "makeCarsWithDiscount"
console.log('Скидка - "0,2":');
// console.table(makeCarsWithDiscount(cars, 0.2));
console.log('-------------------------------------------');

console.log('Скидка - "0,4":');
// console.table(makeCarsWithDiscount(cars, 0.4));
console.log('*******************************************');

//!========================================================

// Example 3 - Метод filter
console.log('Example 3 - Метод "filter":');
console.log('-------------------------------------------');

// Пусть функция filterByPrice возвращает массив автомобилей цена которых меньше чем значение параметра threshold.

const filterByPrice = (cars, threshold) => cars.filter(car => car.price <= threshold);

// Активируем и выводим в лог результат работы функции "filterByPrice"
console.log('Меньше - "30000":');
console.table(filterByPrice(cars, 30000));
console.log('-------------------------------------------');

console.log('Меньше - "25000":');
console.table(filterByPrice(cars, 25000));
console.log('*******************************************');

//!========================================================

// Example 4 - Метод filter
console.log('Example 4 - Метод "filter":');
console.log('-------------------------------------------');

// Пусть функция getCarsWithDiscount возвращает массив автомобилей свойство onSale которых true.

const getCarsWithDiscount = cars => cars.filter(car => car.onSale === true);

// Активируем и выводим в лог результат работы функции "getCarsWithDiscount"
console.table(getCarsWithDiscount(cars));
console.log('*******************************************');

//!========================================================

// Example 5 - Метод filter
console.log('Example 5 - Метод "filter":');
console.log('-------------------------------------------');

// Пусть функция getCarsWithType возвращает массив автомобилей тип которых совпадает со значением параметра type.

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// Активируем и выводим в лог результат работы функции "getCarsWithType"
console.log('Тип - "suv":');
console.table(getCarsWithType(cars, 'suv'));
console.log('-------------------------------------------');

console.log('Тип - "sedan":');
console.table(getCarsWithType(cars, 'sedan'));
console.log('*******************************************');

//!========================================================

// Example 6 - Метод find
console.log('Example 6 - Метод "find":');
console.log('-------------------------------------------');

// Пусть функция getCarByModel возвращает массив автомобилей модель которых совпадает со значением параметра model.

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// Активируем и выводим в лог результат работы функции "getCarByModel"
console.log('Модель - "F-150":');
console.log(getCarByModel(cars, 'F-150'));
console.log('-------------------------------------------');

console.log('Модель - "CX-9":');
console.log(getCarByModel(cars, 'CX-9'));
console.log('*******************************************');

//!========================================================

// Example 7 - Метод sort
console.log('Example 7 - Метод "sort":');
console.log('-------------------------------------------');

// Пусть функция sortByAscendingAmount возвращает новый массив автомобилей отсортированный по возврастанию значения свойства amount.

const sortByAscendingAmount = cars => cars.sort((a, b) => a.amount - b.amount);

// Активируем и выводим в лог результат работы функции "getCarByModel"
console.table(sortByAscendingAmount(cars));
console.log('*******************************************');

//!========================================================

// Example 8 - Метод sort
console.log('Example 8 - Метод "sort":');
console.log('-------------------------------------------');

// Пусть функция sortByDescendingPrice возвращает новый массив автомобилей отсортированный по убыванию значения свойства price.

const sortByDescendingPrice = cars => cars.sort((a, b) => b.price - a.price);

// Активируем и выводим в лог результат работы функции "sortByDescendingPrice"
console.table(sortByDescendingPrice(cars));
console.log('*******************************************');

//!========================================================

// Example 9 - Метод sort
console.log('Example 9 - Метод "sort":');
console.log('-------------------------------------------');

// Пусть функция sortByModel возвращает новый массив автомобилей отсортированный по названию модели в алфавитном и обратном алфавитном порядке, в засисимости от значения параметра order.

const sortByModel = (cars, order) => cars.sort((a, b) => {
    switch (order) {
        case 'asc':
            return a.model.localeCompare(b.model);
        case 'desc':
            return b.model.localeCompare(a.model);
    }
});

// Активируем и выводим в лог результат работы функции "sortByModel"
console.log('Сортировка по модели - "asc" (в алфавитном порядке):');
console.table(sortByModel(cars, 'asc'));
console.log('-------------------------------------------');

console.log('Сортировка по модели - "desc" (в обратном алфавитном порядке):');
console.table(sortByModel(cars, 'desc'));
console.log('*******************************************');

//!========================================================

// Example 10 - Метод reduce
console.log('Example 10 - Метод "reduce":');
console.log('-------------------------------------------');

// Пусть функция getTotalAmount возвращает общее количество автомобилей(значение свойств amount).

const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// Активируем и выводим в лог результат работы функции "getTotalAmount"
console.log(getTotalAmount(cars));
console.log('*******************************************');

//!========================================================

// Example 11 - Цепочки методов.
console.log('Example 11 - Цепочки методов:');
console.log('-------------------------------------------');

// Пусть функция getAvailableCarNames возвращает массив моделей автомобилей, но только тех, которые сейчас на распродаже.

const getModelsOnSale = cars => cars.filter((car) => car.onSale === true).map(car => car.model);

// Активируем и выводим в лог результат работы функции "getModelsOnSale"
console.table(getModelsOnSale(cars));
console.log('*******************************************');

//!========================================================

// Example 12 - Цепочки методов
console.log('Example 12 - Цепочки методов:');
console.log('-------------------------------------------');

// Пусть функция getSortedCarsOnSale возвращает массив автомобилей на распродаже (свойство onSale), отсортированных по возрастанию цены.

const getSortedCarsOnSale = cars => cars.filter((car) => car.onSale === true).sort((a, b) => a.price - b.price);

// Активируем и выводим в лог результат работы функции "getSortedCarsOnSale"
console.table(getSortedCarsOnSale(cars));
console.log('*******************************************');

//!========================================================

// Дополнительный пример - Цепочки методов
console.log('Дополнительный пример - Цепочки методов');
console.log('-------------------------------------------');

const filtredArr = cars.filter(car => car.amount >= 5 && car.price <= 25000);

// Активируем и выводим в лог результат работы функции "getSortedCarsOnSale"
console.table(filtredArr);
console.log('*******************************************');
