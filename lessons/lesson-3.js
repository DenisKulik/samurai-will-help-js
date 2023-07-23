'use strict';

// Arrays
// Упорядоченная структура данных

// const arr1 = [ 'black', 'purple', 'red' ];
// const arr2 = new Array('black', 'purple');

// console.log(arr1);
// console.log(arr2);

// const arr3 = new Array(10);
// console.log(arr3);

// Возвращаемый тип
// console.log(typeof [1, 2, 3]); // object
// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.of(1, 2)); // []

// Доступ к элементам массива
// const carBrands = [ 'Mercedes', 'BMW', 'Volkswagen', 'Lexus', 'Audi', 'Opel' ];
// вывести в консоль Audi
// console.log(carBrands[4]);
// console.log(carBrands[-1]); // undefined

// Перезапись элементов
// Заменить 'BMW' на 'Tesla'
// carBrands[1] = 'Tesla';
// carBrands[7] = 'Tesla';
// console.log(carBrands);

// Получение длины массива
// Как получить значение последнего элемента в массиве?
// console.log(carBrands.at(-1));
// console.log(carBrands[carBrands.length - 1]);

// Destructuring assignment
// const carBrands = [ 'Mercedes', 'BMW', 'Volkswagen', 'Lexus', 'Audi', 'Opel' ];
// const [ car1, car2 ] = carBrands;
// console.log(car1);
// console.log(car2);
// console.log(carBrands);
// Записать в переменную car3 Volkswagen
// const [ , , car3 ] = carBrands;
// console.log(car3);

// rest
// Записать в переменную otherCars все остальные марки авто
// const [ car1, car2, car3, ...otherCars ] = carBrands;
// console.log(otherCars);
//
// const func = (...rest) => {
//     console.log(rest);
// };
// func(1, 2, 3, 4);

// Default values
// const [ car = 'Tesla' ] = [];
// console.log(car); // 'Tesla'

// Копирование массива
const carBrands = [ 'Mercedes', 'BMW', 'Volkswagen', 'Lexus', 'Audi', 'Opel' ];
const obj = {
    map: new Set([ 1, 2, 3 ])
};

// const carBrandsCopy = [ ...carBrands ]; // shallow copy
// const carObjCopy = JSON.parse(JSON.stringify(obj)); // deep copy
// const carBrandsCopy2 = structuredClone(carBrands); // deep copy
// const carBrandsCopy4 = Array.from(carBrands);  // shallow copy
// // lodash deepClone

// const array = [
//     [ 'John', 'Sarah', 'Mike' ],
//     [ 'Coffee', 'Tea', 'Juice' ],
//     [ 'Sugar', 'Salt', 'Pepper' ]
// ];
//
// const arrayCopy1 = [ ...array ];
// arrayCopy1[0][1] = 'Jack';
// const arrayCopy2 = structuredClone(array);
// arrayCopy2[1][2] = 'Lemonade';
// const arrayCopy3 = Array.from(array);
// arrayCopy3[2][3] = 'Vanilla';
//
// console.log(array[0][1]); // Jack
// console.log(array[1][2]); // Juice
// console.log(array[2][3]); // Vanilla

// Добавление/удаление элементов
// const numbers = [ 1, 2, 3, 4, 5 ];
// Добавить элемент 6 в конец массива
// const res = numbers.push(6);
// console.log(res); // возвращает новую длину массива
// Удалить последний элемент из массива
// const res2 = numbers.pop();
// console.log(res2);
// const fruits = [ 'apple', 'banana', 'cherry' ];
// Удалить первый элемент из массива
// const res3 = fruits.shift();
// console.log(res3);
// Добавить 'apple' элемент в начало массива
// const res4 = fruits.unshift('apple');
// console.log(res4);
// Какие методы затратнее по памяти? shift/unshift

// Итерация по массивам
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// for
// Найти сумму всех элементов массива nums
// let sum = 0;
// for (let i = 0; i < nums.length; i++) {
//     sum += nums[i];
// }
// console.log(sum);

// Найти максимальное значение элемента в массиве nums
// let maxValue = 0;
// for (let i = 0; i < nums.length; i++) {
//     if(nums[i] > maxValue) maxValue = nums[i];
// }
// console.log(maxValue);

// for of
// Объединить все строки в массиве строк в одну строку.
// const strings = [ 'Hello', 'world', '!' ];
// let combinedString = '';
//
// const isSymbol = (char) => char.toLowerCase() === char.toUpperCase();
// for (const string of strings) {
//     combinedString += isSymbol(string) ? string : ` ${string}`;
// }
// combinedString = combinedString.trim();
//
// console.log(combinedString); // 'Hello world !'

// Написать функцию map, которая работает аналогично методу map
// const map = (array, callback) => {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         result.push(callback(array[i], i, array));
//     }
//     return result;
// };

// Дан массив со строками. Используя функцию map верните массив, сделав первую букву в словах заглавной.
// const arr = [ 'apple', 'banana', 'car', 'dog', 'elephant' ];
// const arrNew = map(arr, (str) => {
//     return str[0].toUpperCase() + str.slice(1);
// });
// console.log(arrNew); // 'Apple', 'Banana', 'Car', 'Dog', 'Elephant'

// Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только имена.
// const people = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 30 },
//     { name: 'Bob', age: 35 },
//     { name: 'Michael', age: 21 },
//     { name: 'Alice', age: 28 }
// ];
// const names = map(people, (person) => person.name);
// console.log(names); // John, Jane, Bob, Michael, Alice

// Написать функцию filter, которая работает аналогично методу filter
// const filter = (array, callback) => {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i], i, array)) {
//             result.push(array[i]);
//         }
//     }
//     return result;
// };

// const nums2 = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
// const equaledTwo = filter(nums2, (num) => num % 2 === 0);
// console.log(equaledTwo);
// const ageMoreThan25 = filter(people, (person) => person.age > 25);
// console.log(ageMoreThan25);
// const incllA = filter(people, (person) => person.name.toLowerCase().indexOf('a') !== -1);
// console.log(incllA);