// Когда-то в JS не было стандартных, на сегодняшний момент, встроенных методов массивов таких как "map", "filtr", "sort" и т.д. для выполнения соответствующих операций использовали "вручную" написанные функции или, зачастую, внешние библиотеки с наборами соответствующих методов обработки массивов. Такие внешние библиотеки носят условное название "utility belt" (в переводе - универсальный, рабочий ремень для инструментов). Библиотека "Lodash" является "utility belt" для обработки массивов, т.е. библиотека с набором методов для обработки массивов и объектов (https://lodash.com/).

// Для работы с данной библиотекой необходимо подключить ее к HTML файлу с помощью соответствующей ссылки (<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>). Данная ссылка должна быть прописана в коде - перед ссылкой на JS файлы скриптов, в которых будут использоваться методы из этой библиотеки.

// Нужно отметить, что самым "плохим", но наиболее приемлемым для новичков, является - подключение ссылки на всю библиотеку целиком. Это связано с тем, что файл библиотеки имеет большой объем информации (более 27 Kb), который должен будет загрузится на браузер пользователя, перед началом работы созданых для работы с ним JS скриптов (загрузится в виде отдельного вспомогательного файла "lodash.min.js"), а это, в свою очередь - повлияет на скорость полной загрузки всех элементов сайта.

// После подключения файла-библиотеки "lodash.min.js", в JS скрипте появляется возможность использовать служебную глобальную переменную "_", которая по своей сути является функцией с набором методов, собственно каждый из которых, и является встроенным в эту библиотеку методом обработи массива и/или объекта.

// Выводим в лог глобальную переменную-функцию "_"
console.log('Глобальная переменная-функция подключенной библиотеки "lodash":');
console.dir(_);
console.log('*******************************************');


// Для обращения к соответствующему методу библиотеки необходимо использовать синтаксическую конструкцию вызова соответствующего метода, которая состоит из использования символов "_", "." и "[имени метода в библиотеке]".


/*
 * isEmpty()
 */
// Используется для проверки массивов и объектов на наличей "пустой сущности", т.е. проверяет является ли массив и/или объект пустым. При этом, объекты считаются пустыми, если они не имеют собственных перечисляемых строковых свойств с ключом. Присваиваемые переменным значения, подобные массивам, такие как объекты аргументов, массивы, буферы, строки или коллекции, подобные jQuery, считаются пустыми, если их длина равна 0. Точно так же карты и наборы считаются пустыми, если их размер равен 0.
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#isEmpty


// Пример использования метода isEmpty()
console.log('Пример использования метода "isEmpty()":');

// Определяем состояние пустого объекта
console.log('- пустой объект =>', _.isEmpty({}));

// Определяем состояние объекта со свойством
console.log('- объект со свойством =>', _.isEmpty({ a: 1 }));
console.log('*******************************************');



/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city
 */
// Метод предназначен для того, что бы посмотреть глубокое вложенное в объект свойство. Получает значение по пути объекта. Если разрешенное значение не определено, вместо него возвращается defaultValue.
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#get


// Исходный объект с вложенными свойствами
const user = {
    name: 'mango',
    location: {city: 'Lviv', }, // Закомментируй эту строку для проверки
};
// Выводим в лог переменную "user"
console.log('Исходный объект "user" с вложенными свойствами:')
console.table(user);
console.log('-------------------------------------------');


// Проверяем наличие вложенного в объект свойства с помощью "get"
console.log('Метод "get()" =>', _.get(user, 'location.city'));
console.log('-------------------------------------------');


// Проверяем наличие вложенного в объект свойства с помощью "обычной адресации"
console.log('Метод "обычной адресации" =>', user.location.city);
console.log('-------------------------------------------');


// Пример кода самодельной проверки наличия (1-й вариант), в которой производится последовательная проверка наличия вложенного в объекте свойства, в глубину.
if (user && user.location && user.location.city) {
    console.log('Самодельной проверки наличия (1-й вариант) ->', user.location.city);
}
console.log('-------------------------------------------');


// Пример кода самодельной проверки наличия (2-й вариант), с использованием нового синтаксического выражения - "?."
console.log('Самодельной проверки наличия (2-й вариант) ->', user?.location?.city);
console.log('*******************************************');

// "?." - синтаксическое выражение-запрос необязательного свойства. В вышеописанном примере оно используется для того, чтобы сказать: если "?.location" - нет свойства "location"; если "?.city" - нет свойства "city", то дальше - НЕ нужно искать. Данная синтаксическая запись позволяет прервать операцию обращения по указанному адресу свойства объекта без ошибки, в случае если по указанному адресу нет свойства, и выдаст НЕ ошибку (которая "сломает" код), а значение "undefined".



/*
 * union()
 */
// Создает массив уникальных значений по порядку из всех заданных массивов, используя SameValueZero для сравнения на равенство.
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#union


// Пример использования метода "union" для создания одного массива из 2-х исходных массивов, внутри которого будут только уникальные (не повторяющиеся) элементы. 
console.log('Метод "union()":');
console.log(_.union([1, 2, 3], [3, 4, 5]));
console.log('*******************************************');



/*
 * range()
 */
// Создает массив чисел (положительных и/или отрицательных), прогрессирующий от начала до конца, но не включая его - значение конца. Шаг -1 используется, если указано отрицательное начало без конца или шага. Если конец не указан, он начинается с начала, а затем устанавливается в 0.
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#range

// Используем метод "range" для создания массива чисел от "10" до "51" (не включая значение "51").
console.log('Метод "range()":');
console.log(_.range(10, 51));
console.log('*******************************************');



/*
 * sortBy()
 */
// Создает массив элементов, отсортированных В ПОРЯДКЕ ВОЗРОСТАНИЯ по результатам выполнения каждого элемента в коллекции через каждую итерацию. Этот метод выполняет стабильную сортировку, то есть сохраняет исходный порядок сортировки одинаковых элементов. Итерации вызываются с одним аргументом: (значение).
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#sortBy


console.log('Метод "sortBy()":');

// Исходный массив объектов "users"
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
// Выводим в лог значение переменной "users"
console.log('Исходный массив объектов "users":')
console.table(users);
console.log('-------------------------------------------');

// Используем метод "sortBy" для сортировки массива "users" по возрастанию значения свойства "age", в его объектах.
console.log('- сортируем массив "users" по возрастанию значения свойства "age":');
console.table(_.sortBy(users, user => user.age));
console.log('-------------------------------------------');

// Используем метод "sortBy" для сортировки массива "users" по нескольким свойствам содержащихся в нем объектов, для чего, в качестве задания параметра сортировки - передаем в метод массив с соответствующими свойствами - "['user', 'age']". Получив который в условие, метод "sortBy" выполнит сортировку по 2-м указанным свойствам объектов одновременно.
console.log('- сортируем массив "users" по 2-м значеним свойств - "user" и "age":');
console.table(_.sortBy(users, ['user', 'age']));
console.log('*******************************************');



/*
 * sum() и sumBy()
 */
// Метод "sum()" - вычисляет сумму числовых значений находящихся в массиве чисел. Предназначен для обработки - "массиво чисел".
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#sum

console.log('Метод "sum()":');

// Используем метод "sum" для вычисления суммы всех числовых значений элементов массива чисел "[1, 2, 3, 4, 5]"
console.log('- сумма значений массива =', _.sum([1, 2, 3, 4, 5]));
console.log('-------------------------------------------');


// Метод "sumBy()" - тот метод аналогичен методу "sum()", за исключением того, что он предназначен для обработки массива объектов и принимает итерацию, которая вызывается для каждого элемента в массиве для генерации суммируемого значения. Итерируемый вызывается с одним аргументом: (значение).
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#sumBy

console.log('Метод "sumBy()":');

// Исходный массив объектов "players"
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];
// Выводим в лог значение переменной "players"
console.log('Исходный массив объектов "players":')
console.table(players);
console.log('-------------------------------------------');

// Используем метод "sumBy()" для вычисления суммарного числового значения свойства "timePlayed" находящегося во всех объектах исходного массива объектов "players"
console.log('- сумма значений свойств "timePlayed" =', _.sumBy(players, player => player.timePlayed));
console.log('*******************************************');



/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */
// Метод "uniq()" - предназначен для обработки массивов чисел. Создает версию массива без дубликатов, используя SameValueZero для сравнения на равенство, в котором сохраняется только первое вхождение каждого элемента. Порядок значений результата определяется порядком их появления в массиве.
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#uniq

console.log('Метод "uniq()":');

// Пример использования метода "uniq()" для обработки массива чисел, с целью создания нового массива, который будет содержать в себе только элементами с уникальными (не повторяющимися) значениями.

// Исходный массив чисел
const numbersUniq = [2, 1, 2, 3, 4, 3];
// Выводим в лог переменную "numbersUniq"
console.log('- исходный массив чисел "numbersUniq" =>', numbersUniq);
console.log('-------------------------------------------');

// Создаем новый массив чисел на основе "numbersUniq", используя метод "uniq".
const uniq = _.uniq(numbersUniq);
// Выводим в лог переменную "uniq"
console.log('- новый массив чисел "uniq" =>', uniq);
console.log('-------------------------------------------');

// Проверяем на равенство исходный масиив "numbersUniq" и новый массив "uniq"
console.log('- проверка "numbersUniq === uniq" =>', numbersUniq === uniq);
console.log('*******************************************');


// Метод "uniqBy()" - предназначен для обработки массивов объектов. Этот метод подобен _.union, за исключением того, что он принимает итерацию, которая вызывается для каждого элемента каждого массива, чтобы сгенерировать критерий, по которому вычисляется уникальность. Значения результата выбираются из первого массива, в котором встречается значение. Итерация вызывается с одним аргументом: (значение).
// Более подробное описание этого метода - https://lodash.com/docs/4.17.15#unionBy

console.log('Метод "uniqBy()":');

/*
 * random()
 */
//
// Более подробное описание этого метода -

/*
 * min() и max()
 * minBy() и maxBy()
 */
//
// Более подробное описание этого метода -

// console.log(_.minBy(players, player => player.timePlayed));

/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */
// 
// Более подробное описание этого метода -

// console.log(_.kebabCase(' a b c '));