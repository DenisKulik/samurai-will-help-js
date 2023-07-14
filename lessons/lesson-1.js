'use strict';

// Переменные
// let, const, var
// var - функциональная область видимости
// console.log(username);
// var username;
// username = 'Alex';
// username = 'Sam';
//
// if (username === 'Sam') {
//     var greeting = 'Hello, Sam';
// }
//
// console.log(greeting);

// let
// let username;
// username = 'Alex';
// username = 'Sam';
//
// if (username === 'Sam') {
//     let greeting = 'Hello, Sam';
// }
// const
// const username = 'Sam';
//
// if (username === 'Sam') {
//     const greeting = 'Hello, Sam';
// }

// Типы данных
// 8
// primitive: string, number, boolean, bigInt, symbol, null, undefined
// object
// let num = 10;
// let num2 = num;
// num2 = 15;
// console.log(num);
// console.log(num2);

// const obj = { a: 1, b: 2, c: 3 };
// const obj2 = obj;
// obj2.a = -1;
//
// console.log(obj);
// console.log(obj2);

// Преобразование типов
// Строковое
// const num = 10;
// const str = (10).toString();
// const str2 = String(10);

// console.log(typeof (typeof str2));
// console.log(typeof null);

// const bool = Boolean(1);
// console.log(bool);

// falsy
// 0, '', null, undefined, NaN, false

// Операторы
// -, +, *, /, **
// бинарный
// const res = 5 + 2;
// let num = +'2';
// console.log(typeof num);

// тернарный
// переписать на тернарный оператор
// const age = 18;

// let status;
// if (age >= 18) {
//     status = 'adult';
// } else {
//     status = 'minor';
// }

// const status = age >= 18 ? 'adult' : 'minor';

// Инкремент и декремент

// let counter = 0;

// console.log(counter++);
// console.log(++counter);

// console.log(counter++); // 0
// console.log(++counter); // 2
// console.log(counter--); // 2
// console.log(++counter); // 2
// console.log(counter); // 2

// Операторы сравнения
// == / ===

// console.log(1 == '1'); // true
// console.log(true == 1); // true
// console.log(null == undefined); // true

// console.log(1 === '1'); // false
// console.log(true === 1); // false
// console.log(null === undefined); // false

// console.log(1 <= '1'); // true
// console.log('2' >= '12'); // true
// console.log(false >= 1); // false

// console.log('X' > 'x'); // false // unicode
// console.log('Banana' < 'Banan1'); // false

// Логические операторы

// || (ИЛИ)
// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true || false); // true
// console.log(false || false); // false

// console.log(1 || 0); // 1
// console.log('' || 'Hello'); // 'Hello'
// console.log(null || 1 || 'Hello' || ''); // 1
// console.log(undefined || 0 || '' || null); // null

// && (И)
// console.log(true && true); // true
// console.log(false && true && true); // false
// console.log(true && false && false); // false
// console.log(false && false); // false

// console.log(null && 1); //  null
// console.log(1 && 2 && null && 3); // null
// console.log(1 && 2 && 3); // 3
// console.log('Hello' && 1 && ''); //  ''

// ! (НЕ)
// приводит аргумент к логическому типу true/false и возвращает противоположное значение

// console.log(!false); // true
// console.log(!0); // true

// console.log(!!null); // false
// console.log(!!'error message'); // true

// ?? (ОПЕРАТОР НУЛЕВОГО СЛИЯНИЯ)
// let amount;
// console.log(amount ?? 0); // 0

// let x = null;
// let y = 'Hello';
// let z;
// console.log(x ?? y ?? z ?? 'default value'); // 'Hello'

// циклы while/for

// Напишите цикл while, который выводит в консоль числа от 1 до 5.
// let num = 1;

// while (num <= 5) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// } while (num <= 5);

// Напишите цикл for, который выводит в консоль квадраты чисел от 1 до 10.
// let num = 1;
//
// for (let i = 1; i <= 10; i++) {
//     // console.log(i ** 2);
//     // console.log(i * i);
//     console.log(Math.pow(i, 3));
// }

// Напишите цикл for, который выводит в консоль все элементы массива colors,
// начиная с последнего элемента и заканчивая первым.
// const colors = [ 'red', 'orange', 'yellow', 'green', 'blue', 'violet' ];
//
// for (let i = colors.length - 1; i >= 0; i--) {
//     console.log(colors[i]);
// }

// Напишите цикл for, который выводит в консоль все элементы двумерного массива matrix.
// const matrix = [
//     [ 1, 2, 3 ],
//     [ 4, 5, 6 ],
//     [ 7, 8, 9 ]
// ];

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         console.log(matrix[i][j]);
//     }
// }

// for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//         if (matrix[i][j] === 8) {
//             console.log(matrix[i][j]);
//             break;
//         }
//     }
// }





