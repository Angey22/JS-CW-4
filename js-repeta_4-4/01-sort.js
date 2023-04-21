//! Видео - 0:00:00...0:33:00

/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */
console.groupCollapsed('Array.prototype.sort(callback(currentEl, nextEl){})'); //! Log group name

// Метод "sort" является простым поэлементным методом сортировки, который изменяет оригинальный массив.

// Пример работы метода "sort" по умолчанию.
// Исходный массив чисел
const numbers = [1, 9, 6, 2, 3];
// Выводим в лог значение переменной "numbers"
console.log('Исходный массив "numbers" (до сортировки) =>', numbers);
console.log('------------------------------------------');

// Вызываем метод "sort" на массиве "numbers" используя его настройки по умолчанию
numbers.sort();
// Выводим в лог значение переменной "numbers" после обработки его с помощью метода "sort"
console.log('Массив "numbers" после сортировки =>', numbers);;
console.log('******************************************');

// Исходный массив с текстовыми литералами
const letters = ['b', 'B', 'a', 'A'];
// Выводим в лог значение переменной "numbers"
console.log('Исходный массив "letters" (до сортировки) =>', letters);
console.log('------------------------------------------');

// Вызываем метод "sort" на массиве "letters" используя его настройки по умолчанию
letters.sort();
// Выводим в лог значение переменной "letters" после обработки его с помощью метода "sort"
console.log('Массив "letters" после сортировки =>', letters);


// Сортировка с помощью метода "sort" с настройками по умолчанию выполняется на основе исходных кодов символов в таблице "Юникода". Именно поэтому, при сортировке символов, сначала сортируются символы верхнего регистра - "большие буквы" (т.к. у них код числовой код "меньше", чем у символов с нижним регистром), а потом сортируются символы с нижним регистром - "маленькие буквы".

console.groupEnd(); //! Log group end
console.log('-1----------------------------------------------');


/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B (I);
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A (II);
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам (III).
 */
console.groupCollapsed('compareFunction - функция сравнения (callback)'); //! Log group name

// Исходный массив чисел "numbers2"
const numbers2 = [1, 13, 3, 11, 6, 9];
// Выводим в лог значение переменной "numbers2"
console.log('Исходный массив "numbers2" (до сортировки) =>', numbers2);
console.log('------------------------------------------');

// Создаем функцию на основе метода "sort", внутри которой задается 2-а параметра: "curEl" - текущий элемент; "nextEl" - следующий элемент, и выполняем сортировку массива "numbers2" с помощью этой функции. 

// Сортировка по I - у алгоритму (см.описание алгоритма выше).
numbers2.sort((curEl, nextEl) => {
    // Сортируем по возрастанию
    return curEl - nextEl;
});
// Выводим в лог значение переменной "numbers2"
console.log('Массив "numbers2" после сортировки по I-у алгоритму =>', numbers2);
console.log('------------------------------------------');

// Сортировка по II - у алгоритму (см.описание алгоритма выше).
numbers2.sort((curEl, nextEl) => {
    // Сортируем по убыванию
    return nextEl - curEl;
});
// Выводим в лог значение переменной "numbers2"
console.log('Массив "numbers2" после сортировки по II-у алгоритму =>', numbers2);


console.groupEnd(); //! Log group end
console.log('-2----------------------------------------------');


/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */
console.groupCollapsed('Как сделать копию массива чтобы не сортировать оригинальный'); //! Log group name

// Важной особенность работы метода "sort" является то, что он в процессе сортировки изменяет оригинальный массив. Для того, чтобы не изменять исходный оригинальный массив, рекомендуется сначала делать его копию, с помощью метода "slice()" или операции "spread", и уже после создания копии - сортировать ее, а не оригинал.

// Исходный массив чисел "numbers3"
const numbers3 = [2, 12, 4, 10, 6, 8];
// Выводим в лог значение переменной "numbers2"
console.log('Исходный массив "numbers3" (до сортировки) =>', numbers3);
console.log('------------------------------------------');

// Создаем копию исходного массива "numbers3" с помощью метода "slice()"
const copySlice = numbers3.slice();
// Выводим в лог значение переменной "copySlice"
console.log('"copySlice" =>', copySlice);
// Производим проверку-сравнение массивов "copySlice" и "numbers3"
console.log('Сравниваем "copySlice" === "numbers3" =>', copySlice === numbers3);
console.log('------------------------------------------');

// Создаем копию исходного массива "numbers3" с помощью метода "spread"
const copySpread = [...numbers3];
// Выводим в лог значение переменной "copySpread"
console.log('"copySpread" =>', copySpread);
// Производим проверку-сравнение массивов "copySpread" и "numbers3"
console.log('Сравниваем "copySpread" === "numbers3" =>', copySpread === numbers3);
console.log('------------------------------------------');

// Сортируем копию исходного массива "по возрастанию"
const ascSortedNumbers = [...numbers3].sort((a, b) => a - b);
console.log('ascSortedNumbers', ascSortedNumbers);
console.log('------------------------------------------');

// Сортируем копию исходного массива "по убыванию"
const descSortedNumbers = [...numbers3].sort((a, b) => b - a);
console.log('descSortedNumbers', descSortedNumbers);
console.log('------------------------------------------');



// Используем метод "reverse()" для разворота последовательности расположения элементов внутри массива
console.log('"descSortedNumbers.reverse()" =>', descSortedNumbers.reverse());


console.groupEnd(); //! Log group end
console.log('-3----------------------------------------------');


/*
 * Кастомная сортировка сложных типов
 */
console.groupCollapsed('Кастомная сортировка сложных типов'); //! Log group name

// Особенностью использования метода "sort" при обработки сложных объектов является то, что при сортировки необходимо указывать свойства параметров объектов, значения которых и будут использоваться при сравнении вовремя сортировки.

// Исходный массив-объектов - база данных
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
// Выводим в лог переменную "players"
console.log('Исходный массив-объектов "players":');
console.table(players);
console.log('------------------------------------------');

// Сортируем объекты в исходном массиве на основании сравнения значений их свойств "timePlayed", т.е. сортировка по численному значению "времени проведенного в игре".
// Сортируем "по убыванию", "игроки" с наибольшим временем - в начале. 
const sortedByBestPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
// Выводим в лог значение переменной "sortedByBestPlayers"
console.log('Сортировка - "sortedByBestPlayers":');
console.table(sortedByBestPlayers);
console.log('------------------------------------------');

// Сортируем "по возрастания", "игроки" с наибольшим временем - в конце. 
const sortedByWorstPlayers = [...players].sort(
    (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
// Выводим в лог значение переменной "sortedByWorstPlayers"
console.log('Сортировка - "sortedByWorstPlayers":');
console.table(sortedByWorstPlayers);
console.log('------------------------------------------');



// Сортируем объекты в исходном массиве на основании сравнения значений их свойств "nаme", т.е. сортировка по текстовому значению "имен игроков", а точнее - по первой заглавной букве имени игрока.
const byName = [...players].sort((a, b) => {
    const result = a.name[0] > b.name[0];

    if (result) {
        return 1;
    }

    if (!result) {
        return -1;
    }
});
// Выводим в лог значение переменной "byName"
console.log('Сортировка - "byName":');
console.table(byName);
console.log('*******************************************');


// Метод "charCodeAt()" возвращает числовое значение "Юникода" для символа по указанному индексу. Его можно использовать для определения условного порядкового номера символа в таблице "Юникода".

// Определим коды некоторых символов с помощью метода "charCodeAt()"
console.log('Определение числовых кодов символов с помощью метода "charCodeAt()":');
console.log(`Символ "a" в "abc" ('abc'.charCodeAt(0)) ->`, 'abc'.charCodeAt(0));
console.log(`Символ "b" в "abc" ('abc'.charCodeAt(1)) ->`, 'abc'.charCodeAt(1));
console.log(`Символ "c" в "abc" ('abc'.charCodeAt(2)) ->`, 'abc'.charCodeAt(2));

console.groupEnd(); //! Log group end
console.log('-4----------------------------------------------');