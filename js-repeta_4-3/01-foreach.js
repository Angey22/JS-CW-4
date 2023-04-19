//! Видео - 0:00:00...0:05:20

/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

// Создаем переменную и присваиваем ей в качестве значения массив
const numbers = [5, 10, 15, 20, 25];

// Выводим в лог исходный масиив
console.log('Исходный массив', numbers);

// Создаем цыкл на основе "forEach", который предназначен для перебора массива
numbers.forEach(function (number) {
  console.log('Элемент массива "number" =>', number);
});

// Описанная в данном цыкле функция, является функцией обратного вызова, которая будет вызываться для каждого отдельного элемента перебираемого массива. В параметры данной функции можно объявить 3-и аргумента:
// 1) Текущее значение (number - если в массиве числа, user - если в массиве имена пользователей и т.п.);
// 2) Индекс;
// 3) Ссылка на массив.

//! Единственными случаями, когда стоит использовать циклы "for" или "for...of" для перебора массива, это задачи с прерыванием выполнения цикла. Прервать выполнение цыкла метода "forEach" нельзя, он всегда перебирает массив до конца.