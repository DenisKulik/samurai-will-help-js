'use strict';

// Повторение
// Что выведется в консоль?
// console.log(age);
// var age = 18;
// if (age >= 18) {
//     var access = 'allowed';
// } else {
//     var access = 'forbidden';
// }
// console.log(access);

// console.log(typeof '10');
// console.log(typeof 10n);
// console.log(typeof []);
// console.log(typeof null);
// console.log(typeof (typeof 5));

// const arr = [ 1, 10, 7, 5 ];
// const arr2 = arr;
// arr2[2] = 4;
// console.log(arr[2]);
// console.log(arr2[2]);

// let num = 10;
// console.log(num++);
// console.log(++num);
// console.log(num--);
// console.log(--num);
// console.log(num);

// console.log(new String('Hello') == 'Hello');
// console.log(new String('Hello') === 'Hello');
// console.log([ 1, 2, 3 ] == [ 1, 2, 3 ]);
// console.log([ 1, 2, 3 ] === [ 1, 2, 3 ]);

// console.log(5 + '3');
// console.log(typeof (5 + '3'));
// console.log(5 - '3');
// console.log(typeof (5 - '3'));
// console.log(7 % 3);

// console.log(6 > '2px');
// console.log('6' > 2);
// console.log('6' > '12');
// console.log('apple' > 'orange');

// console.log('' || 2 || 'NaN' || undefined);
// console.log(null || 0 || 'NaN' || undefined);
// console.log(' ' && 2 && 'NaN' && undefined);
// console.log(null && 23 && NaN && undefined);
// console.log('' ?? 0 ?? 'NaN' ?? undefined);
// console.log(null ?? 0 ?? 'NaN' ?? undefined);

// let i = -3;
// while (i) {
//     console.log(i++);
// }

// Перепишите while на for

////////////////////////////////////////////////////////////////////////////////
// Functions
// Function declaration

// Напишите функцию, которая принимает 2 параметра и возвращает квадрат их суммы
// console.log(sumSquares(2, 5)); // 29

// Function Expression

// Arrow function

// Напишите функцию divider, которая принимает на вход число
// и возвращает его значение, разделенное на 2.
// console.log(divider(4));  // 2

// Напишите функцию calculator, которая принимает два числа и операцию в виде строки.
// Если операция — сложение, то следует сложить два числа. Если вычитание — вычесть одно число из другого.
// Если конкретного указания нет, базовое значение должно быть равным '+'.
// console.log(calculator(2, 3)); // 5
// console.log(calculator(5, 2, '-')); // 3

// Функции обратного вызова
// Напишите функцию calculator, которая принимает на вход два числа и функцию-колбэк.
// Функция calculator должна вызвать колбэк с результатом выполнения операции между двумя числами.
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// console.log(calculator(5, 3, add)); // 8
// console.log(calculator(5, 3, subtract)); // 2

// Назовите примеры встроенных функций в JS, которые принимают колбэки и откладываю их выполнение

// Напишите функцию forEach, которая принимает на вход массив и функцию-колбэк.
// Функция forEach должна вызвать колбэк для каждого элемента массива.
// const numbers = [ 1, 2, 3, 4, 5, 6 ];

// function showElemOfArray(elem, index, array) {
//     console.log(`elem: ${elem}; index: ${index}; array: ${array}`);
// }

// forEach(numbers, showElemOfArray); // 1, 2, 3, 4, 5, 6


