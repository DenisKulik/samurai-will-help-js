'use strict'

// Arrays methods
// mutable
// sort, reverse, push, pop, shift, unshift, splice, fill
// arr.splice(start, deleteCount, el1, el2...)

// Удалите элементы 'Batman' и 'Joker' и добавьте вместо них элемент 'Thor'
// const marvelCharacters = [
//     'Iron Man',
//     'Captain America',
//     'Batman',
//     'Joker',
//     'Black Widow'
// ]
//
// marvelCharacters.splice(2, 2, 'Thor')
// console.log(marvelCharacters) // 'Iron Man', 'Captain America', 'Thor', 'Black Widow'
// marvelCharacters.splice(3, 1)
// console.log(marvelCharacters)

// reverse
// Напишите функцию checkPalindrome, которая принимает строку и проверяет является ли
// строка палиндромом (Палиндром - это текст, который читается одинаково и слева, и справа)
// const checkPalindrome = (str) => {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
// }
//
// console.log(checkPalindrome('Level')) // true
// console.log(checkPalindrome('Name')) // false

// sort
// arr.sort(callback)
// const nums = [ 3, 10, 7, 6, 5, -4, 3, 2, 12 ]
// console.log(nums.sort()) // -4, 10, 12, ...
// Напишите функцию compareNumbers(arr), которая возвращает массив,
// элементы которого отсортированы по возрастанию их значений.
// const compareNumbers = (arr) => {
//     // arr.sort((a, b) => {
//     //     if(a > b) return 1; // b по меньшему индексу чем a
//     //     if(a === b) return 0; // е изменит порядок
//     //     if(a < b) return -1; // a по меньшему индексу чем b
//     // })
//
//     // arr.sort((a, b) => {
//     //     if(a - b > 0) return 1;
//     //     if(a - b < 0) return -1;
//     //     if(a - b === 0) return 0;
//     // })
//
//     arr.sort((a, b) => a - b)
// }
//
// compareNumbers(nums)
// console.log(nums) // -4, 2,  3,  3, 5, 6, 7, 10, 12

// Напишите функцию fillArr, которая принимает массив и изменяет
// начиная с третьего элемента массива все элементы на значение *
// const numbers = [ 8, 6, 4, 9, 1, 9, 4, 3 ]
// arr.fill(value, start, end = arr.length)
// const fillArr = (arr) => {
//     arr.fill('*', 2)
// }
// fillArr(numbers)
// console.log(numbers) //  8,   6,   '*', '*', '*', '*', '*', '*'

// immutable
// const cities = [
//     'New York',
//     'London',
//     'Paris',
//     'Tokyo',
//     'Sydney',
//     'Berlin',
//     'Moscow'
// ]

// forEach
// arr.forEach((item, index, array) => {}) // возвращает undefined
// Напишите функцию displayCities, которая принимает массив городов и
// выводит в консоль City: 'CityName'.
// const displayCities = (arr) => {
//     arr.forEach((item) => console.log(`City: ${item}`))
// }
// displayCities(cities) // City: New York...

// map
// arr.map((item, index, array) => {}) // возвращает новый массив
// Дан массив:
// const array = [ '123', '456', '789' ]
// Используя метод map преобразуйте этот массив в следующий:
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// const arrToMatrix = (arr) => {
//     return arr.map((el) => el.split('').map(Number)) // O(n^2)
// }
//
// console.log(arrToMatrix(array))

// Напишите функцию camelize, которая преобразует массив строк
// вида «my-short-string» в «myShortString»
// const strings = [
//     'font-size',
//     'background-color',
//     'border-radius',
//     'list-style-image',
//     'text-decoration'
// ]

// const camelize = (arr) => {
//     return arr.map(el => {
//             return el.split('-').map((el, idx) => idx === 0 ? el.toLowerCase() :
//                 el[0].toUpperCase() + el.slice(1)).join('')
//         }
//     )
// }

// console.log(camelize(strings)) //  'fontSize', 'backgroundColor'...

// filter
// arr.filter((item, index, array) => {}) // возвращает новый отфильтрованный массив
// Напишите функцию jLanguages, которая возвращает массив слов, начинающихся с J
// const languages = [ 'Java', 'TypeScript', 'C#', 'JavaScript', 'Julia' ]
// const jLanguages = (arr) => {
//     return arr.filter(item => item.startsWith('J'))
// }
// console.log(jLanguages(languages)) //  'Java', 'JavaScript', 'Julia'

// Напишите функцию flatArr. Оставьте в нем только обычные элементы.
// const array = [ 1, 2, [ 3, 4 ], 'five', { a: 'test' } ]
// const flatArr = (arr) => {
//     return arr.filter(el => typeof el !== 'object')
// }
// console.log(flatArr(array)) // 1, 2, 'five'

// Напишите функцию arrayDiff, должна удалять все значения из списка a,
// которые присутствуют в списке b, сохраняя их порядок
const array1 = [ 1, 2, 2, 2, 3 ]
// const array2 = [ 2 ]

// const arrayDiff = (arr1, arr2) => {
//     return arr1.filter(el => !arr2.includes(el))
// }
// console.log('abc'.includes('a'))
// console.log(arrayDiff(array1, array2)) // [1,3]

// some, every
// console.log(array1.some(i => i > 2)) // true
// console.log(array1.every(i => i > 2)) // false

// indexOf, find, findIndex
// console.log(array1.lastIndexOf(2)) // 3
// console.log(array1.find(el => el === 2)) // если не находит - undefined
// console.log(array1.findLast(el => el === 2)) // если не находит - undefined
// console.log(array1.findIndex(i => i === -3))
// console.log(array1.findLastIndex(i => i === -3))

// reduce, reduceRight
// arr.reduce((acc, item, idx, array) => {}, acc) // возвращает acc
// Напишите функцию sumOfNums, которая принимает массив и возвращает сумму всех чисел массива
// const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// const sumOfNums = (arr) => arr.reduce((acc, item) => acc + item)

// console.log(sumOfNums(nums)) // 55

// Напишите функцию getAverageAge которая принимает массив объектов со свойством age
// и возвращает средний возраст.
// const users = [
//     { name: 'Bruce', age: 25 }, { name: 'Gloria', age: 19 },
//     { name: 'David', age: 33 }, { name: 'Alice', age: 21 },
// ]

// const returnValue = users.push({ name: 'Alex', age: 27 })
// console.log(returnValue) // 5
// const returnValue = users.pop()
// console.log(returnValue) // removed element
// const getAverageAge = (arr) => {
//     return arr.reduce((acc, item, _, array) => {
//         return acc + (item.age / array.length)
//     } , 0)
// }
// console.log(getAverageAge(users)) // 24.5

// Напишите функцию getUserNames которая принимает массив объектов users
// и возвращает массив имен пользователей.
// const getUserNames = (arr) => {
//     return arr.reduce((acc, item) => {
//         acc.push(item.name)
//         return acc
//     }, [])
// }
//
// console.log(getUserNames(users)) // Bruce, Gloria, David, Alice

// Напишите функцию countSheeps, которая принимает массив булевых значений и возвращает
// количество truthy-значений
// const sheeps = [
//     true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true
// ]
//
// const countSheeps = (arr) => {
//     return arr.reduce((acc, item) => item ? acc + 1 : acc, 0)
// }
// console.log(countSheeps(sheeps)) // 17

// Новые методы массива 2023
// sort, reverse, splice
// toSorted, toReversed, toSpliced, with