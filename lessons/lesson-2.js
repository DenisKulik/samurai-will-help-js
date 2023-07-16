'use strict';

// Повторение
// Что выведется в консоль?
// console.log(age); // RefError
//
// let age = 18;
// if (age >= 18) {
//     let access = 'allowed';
// } else {
//     let access = 'forbidden';
// }
// console.log(access); // RefError

// console.log(typeof '10'); // string
// console.log(typeof 10n); // bigint
// console.log(typeof []); // object
// console.log(typeof null); // object
// console.log(typeof (typeof 5)); // string

// const arr = [ 1, 10, 7, 5 ];
// const arr2 = arr;
// arr2[2] = 4;
// console.log(arr[2]); // 4
// console.log(arr2[2]); // 4

// let num = 10;
// console.log(num++); // 10
// console.log(++num); // 12
// console.log(num--); // 12
// console.log(--num); // 10
// console.log(num); // 10

// console.log(new String('Hello') == 'Hello'); // true
// console.log(new String('Hello') === 'Hello'); // false
// console.log([ 1, 2, 3 ] == [ 1, 2, 3 ]); // false
// console.log([ 1, 2, 3 ] === [ 1, 2, 3 ]); // false

// console.log(5 + '3'); // 53
// console.log(typeof (5 + '3')); // string
// console.log(5 - '3'); // 2
// console.log(typeof (5 - '3')); // number
// console.log(7 % 3); // 1

// console.log(6 > '2px'); // false // NaN
// console.log('6' > 2); // true
// console.log('6' > '12'); // true
// console.log('apple' > 'orange'); // false
// console.log('apple' > 'Apple'); // true

// console.log('' || 2 || 'NaN' || undefined); // 2
// console.log(null || 0 || 'NaN' || undefined); // 'NaN'
// console.log(' ' && 2 && 'NaN' && undefined); // undefined
// console.log(null && 23 && NaN && undefined); // null
// console.log('' ?? 0 ?? 'NaN' ?? undefined); // ''
// console.log(null ?? 0 ?? 'NaN' ?? undefined); // 0

// let i = -3;
// while (i) {
//     console.log(i++); // -3 -2 -1
// }
//
// // Перепишите while на for
// for (let i = -3; i < 0; i++) {
//     console.log(i);
// }

////////////////////////////////////////////////////////////////////////////////
// Functions
// блок кода, который выполняет определенную повторяющуюся операцию
// Function declaration

// function showGreet(name) {
//     const res = `Hello, ${name}`;
//     return res;
// }
// console.log(showGreet('Lisa'));
// function showGreet() {
//     const res = `Hello, ${name}`;
//     return res;
// }
//
// const name = `Alex`;
//
// console.log(showGreet());

// console.log(showGreet('Lisa'));

// function outerFc() {
//     function innerFc() {
//         console.log('Hello, I\'m inner FC!');
//     }
//
//     innerFc();
// }
//
// console.log(outerFc());
// console.log(innerFc());

// Напишите функцию, которая принимает 2 параметра и возвращает квадрат их суммы
// console.log(sumSquares(2, 5));

// console.log(sumSquares(2, 5)); // 49
//
// function sumSquares(a = 2, b = 5) {
//     return (a + b) ** 2;
// }

// console.log(sumSquares(2, 5)); // 49
// console.log(sumSquares(3, 6)); // 81

// Function Expression
// showMessage('Hi!'); // RefError
//
// const showMessage = function (message) {
//     console.log(`Your message: ${message}`);
// };
//
// const showMessageCopy = showMessage;
// showMessageCopy('Hi!');

// const showGreet = function () {
//     const res = `Hello, ${name}`;
//     return res;
// };
// const name = `Alex`;
//
// console.log(showGreet());

// Arrow function
// const showGreet = name => `Hello, ${name}`;
// console.log(showGreet('Oleg'));

// Immediately Invoke Function Expression
// (() => {
//     console.log('Hello');
// })();

// Напишите функцию divider, которая принимает на вход число
// и возвращает его значение, разделенное на 2.
// const divider = (num) => num / 2;
// console.log(divider(4));  // 2

// Напишите функцию calculator, которая принимает два числа и операцию в виде строки.
// Если операция — сложение, то следует сложить два числа. Если вычитание — вычесть одно число из другого.
// Если конкретного указания нет, базовое значение должно быть равным '+'.
// const calculator = (a, b, op = '+') => {
//     switch (op) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         default:
//             return a + b;
//     }
// };
//
// console.log(calculator(2, 3)); // 5
// console.log(calculator(5, 2, '-')); // 3

// Функции обратного вызова
// const doSmt = (callback) => {
//     console.log(callback());
// };
//
// const sayHello = () => {
//     return 'Hello! Have a nice day!';
// };
//
// console.log(doSmt(sayHello));

// Напишите функцию calculator, которая принимает на вход два числа и функцию-колбэк.
// Функция calculator должна вызвать колбэк с результатом выполнения операции между двумя числами.
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
//
// const calculator = (a, b, callback) => {
//     return callback(a, b);
// };
//
// console.log(calculator(5, 3, add)); // 8
// console.log(calculator(5, 3, subtract)); // 2

// Назовите примеры встроенных функций в JS, которые принимают колбэки и откладывают их выполнение
// setTimeout(() => {
//     console.log('tick');
// }, 1000);

// let i = 0;
//
// const intervalId = setInterval(() => {
//     console.log(++i);
// }, 1000);
//
// setTimeout(() => {
//     clearInterval(intervalId);
// }, 3000);

// Напишите функцию forEach, которая принимает на вход массив и функцию-колбэк.
// Функция forEach должна вызвать колбэк для каждого элемента массива.
// const numbers = [ 1, 2, 3, 4, 5, 6 ];
//
// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }
//
// function showElemOfArray(elem, index, array) {
//     console.log(`elem: ${elem}; index: ${index}; array: ${array}`);
// }
//
// forEach(numbers, showElemOfArray); // 1, 2, 3, 4, 5, 6


