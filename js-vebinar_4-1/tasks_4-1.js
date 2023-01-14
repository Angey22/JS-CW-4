// Модуль 4. Занятие 7. Коллбеки. Стрелочные функции. forEach

//* Example 1 - Коллбек функции
console.log('Example 1 - Коллбек функции');
console.log('-------------------------------------------');

// Напишите следующие функции:
// - createProduct(obj, callback) - принимает объект товара без id, а также колбек. Функция создаёт обьект товара, добавляя ему уникальный идентификатор в свойство id и вызывает колбек передавая ему созданный обьект;
// - logProduct(product) - коллбек принимающий обьект продукта и логирующий его в консоль;
// - logTotalPrice(product) - коллбек принимающий обьект продукта и логирующий общую стоимость товара в консоль.


// Исходный массив объектов
const productsList = [
    { name: 'Banana', amount: 5, price: 14, },
    { name: 'Apple', amount: 49, price: 10, },
    { name: 'Cherry', amount: 4, price: 18, },
];
// Выводим в лог переменную "productsList"
console.log('Исходный массив объектов "productsList":');
console.table(productsList);
console.log('-------------------------------------------');


// Создаем функцию "createProduct", которая должна работать по следующему алгоритму:
// 1. Принимать объект товара без "id" и "колл-бек" функцию в качестве аргументов;
// 2. Создавать обьект товара, добавляя ему уникальный идентификатор в свойство id;
// 3. Вызывает "колл-бек" функцию и передает ей в качестве аргумента созданный обьект.
function createProduct(obj, callback) {
    obj.id = Date.now();
    callback(obj);
};


// Создаем функцию "logProduct", которая должна принимать обьект продукта и логировать его в консоль.
function logProduct(product) {
    console.log(product);
};

// Проверяем работу функции "createProduct"
console.log('Проверка работы функции "createProduct":');
createProduct(productsList[0], logProduct);
createProduct(productsList[1], logProduct);
console.log('-------------------------------------------');


// Создаем функцию "logTotalPrice", которая должна принимать обьект продукта и логировать общую стоимость товара в консоль
function logTotalPrice(product) {
    console.log(product.price * product.amount);
};

// Проверяем работу функции "logTotalPrice"
console.log('Проверка работы функции "logTotalPrice":');
createProduct(productsList[0], logTotalPrice);
createProduct(productsList[1], logTotalPrice);
console.log('*******************************************');


//!========================================================


// Example 2 - Коллбек функции
console.log('Example 2 - Коллбек функции');
console.log('-------------------------------------------');

// Добавьте объекту account методы withdraw(amount, onSuccess, onError) и deposit(amount, onSuccess, onError), где первый параметр это сумма операции, а второй и третий - колбеки.

// Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.

// Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае.


// Создаем переменную "TRANSACTION_LIMIT" со значением лимита операции
const TRANSACTION_LIMIT = 1000;

// Создаем исходный объект "account"
const account = {
    username: 'Alex',
    balance: 2000,
    withdraw(amount, onSuccess, onError) {
        if (amount > this.balance) {
            onError('На Вашем счете недостаточно средств!');
        } else if (amount > TRANSACTION_LIMIT) {
            onError('Вы превысили лимит!');
        } else {
            this.balance -= amount;
            onSuccess(`С Вашего счета было снято ${amount}, остаток на счете = ${this.balance}`);
        }
    },
    deposit(amount, onSuccess, onError) { 
        if (amount > TRANSACTION_LIMIT) {
            onError('Вы превысили лимит!');
        } else if (amount <= 0) {
            onError('Сумма транзакции должна быть > "0"!');
        } else {
            this.balance += amount;
            onSuccess(`На Ваш счет было зачислено ${amount}, текущий баланс = ${this.balance}`)
        }
    },
};

// Создаем "колл-бек" функцию "успешного проведения операции", которая будет подставляться в кажестве аргумента в параметр "onSuccess" метода "withdraw".
function handleSuccess(messege) {
    console.log(`Операция успешно проведена! ${messege}`);
}

// Создаем "колл-бек" функцию "ошибки проведения операции", которая будет подставляться в кажестве аргумента в параметр "onError" метода "withdraw".
function handleError(messege) {
    console.log(`Ошибка проведения операции! ${messege}`);
}

// Проверяем работу метода "withdraw" и "колл-бек" функций вызываемые им ("handleSuccess" и "handleError").
console.log('Проверяем работу метода "withdraw" и "колл-бек" функций "handleSuccess" и "handleError":');
// Активируем функцию "withdraw"
account.withdraw(300, handleSuccess, handleError);
account.withdraw(1100, handleSuccess, handleError);
account.withdraw(5000, handleSuccess, handleError);
console.log('-------------------------------------------');

// Проверяем работу метода "deposit" и "колл-бек" функций вызываемые им ("handleSuccess" и "handleError").
console.log('Проверяем работу метода "deposit" и "колл-бек" функций "handleSuccess" и "handleError":');
// Активируем функцию "deposit"
account.deposit(5000, handleSuccess, handleError);
account.deposit(100, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-400, handleSuccess, handleError);
console.log('*******************************************');


//!========================================================


// Example 3 - Коллбек функции
console.log('Example 3 - Коллбек функции');
console.log('-------------------------------------------');

// Напишите функцию each(array, callback), которая первым параметром ожидает массив, а вторым - функцию, которая применится к каждому элементу массива. Функция each должна вернуть новый массив, элементами которого будут результаты вызова коллбека.

// Создаем функцию "each"
function each(array, callback) {
    // Алгоритм роботы функции;
    // 1. создаем новый массив;
    // 2. перебираем массив "array" с помощью цыкла;
    // 3. вызов "колл-бек" функции на каждом элементе перебираемого массива;
    // 4. добавит модифицированный элемент исходного массива в новый массив;
    // 5. возврат нового массива.

    // 1
    const modifiedArr = [];

    // 1-й способ реализации 2-го, 3-го и 4-го шага в алгоритме, с использованием метода "forEach".
    // array.forEach(element => modifiedArr.push(callback(element)));

    // 2-й способ реализации
    for (const element of array) {
        modifiedArr.push(callback(element));
    };

    // 5
    return modifiedArr;
};

// Создаем исходный массив чисел для проверки работы функции
const arr = [1, 2, 3, 4, 5];
// Выводим в лог переменную "arr"
console.log('Исходный массив чисел "arr" =>', arr);
console.log('-------------------------------------------');

// Создаем 1-й вариант "колл-бек" функции
function pow(num) {
    return num ** 2;
};

// Создаем 2-й вариант "колл-бек" функции
function addOne(num) {
    return num + 1;
};

// Вызываем и выводим в лог функцию "each" передавая ей в качестве 1-го аргумента - массим "arr", а в качестве 2-го - "колл-бек" функцию "pow"
console.log('Массив выданый функцией "each" с использованием в качестве колл-бека - "pow" =>', each(arr, pow));
console.log('-------------------------------------------');


// Вызываем и выводим в лог функцию "each" передавая ей в качестве 1-го аргумента - массим "arr", а в качестве 2-го - "колл-бек" функцию "addOne"
console.log('Массив выданый функцией "each" с использованием в качестве колл-бека - "addOne" =>', each(arr, addOne));
console.log('-------------------------------------------');