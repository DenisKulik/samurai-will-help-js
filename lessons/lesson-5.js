'use strict'

// Objects
// структура данных, содержит пары ключ-значение
// Имеет свойства (поля) и методы
// Способы создания объекта
// const obj = {} // литерал объекта
// const obj = new Object() // с помощью класса Object

const developer = {
    name: 'Dan Abramov',
    skills: [ 'html', 'css', 'js', 'react', 'redux' ],
    code() {
        return `console.log("Hello, World!")`
    }
}

// Выведите в консоль навыки разработчика по очереди
// developer.skills.forEach(el => console.log(el))
// developer['skills'].forEach(el => console.log(el))
// Выведите в консоль результат вызова метода code
// console.log(developer.code())

// Добавить свойство experience со значением 5 years
// developer.experience = '5 years'
// developer['experience'] = '5 years'
// console.log(developer)

// Изменить значение свойства experience на 6 лет
// developer['experience'] = '6 years'
// console.log(developer)

// Добавить навык storybook
// developer.skills.push('storybook')
// console.log(developer.skills) // ['html', 'css', 'js', 'react', 'redux', 'storybook']

// Что выведется в консоль?
// developer[1] = true // [object Object]: true
// developer[{ a: 2 }] = false // [object Object]: false
// console.log(developer) // ...[object Object]: false

// Удалите свойство skills
// delete developer.skills
// console.log(developer)

// Деструктуризация
// скопируйте свойство name в переменную developerName, по умолчанию John
// остальные свойства запишите в переменную rest
// const { name: developerName = 'John', ...rest } = developer
// console.log(developerName) // Dan Abramov
// console.log(rest)

// Способы копирования объекта
// Object.assign() // shallow copy
// spread // shallow copy
// structuredClone() // deep copy
// JSON.parse / stringify // deep copy
// lodash / cloneDeep() // deep copy

const user = {
    name: 'Alex',
    age: 26,
    address: {
        city: 'London',
        country: 'UK',
        coordinates: [ 51.5074, -0.1278 ]
    },
    preferences: {
        theme: 'dark',
        fontSize: 14,
        notifications: {
            email: true,
            sms: false
        }
    }
}

// const userCopy = user
// userCopy.address.city = 'Birmingham'
// console.log(user.preferences === userCopy.preferences) // true

// Сделать поверхностную копию user
// const userShallowCopy = Object.assign({}, user)
// console.log(userShallowCopy !== user) // true
// console.log(userShallowCopy.address === user.address) // true

// сделать глубокую копию user
// const userDeepCopy = {
//     ...user,
//     address: { ...user.address, coordinates: [ ...user.address.coordinates ] },
//     preferences: {
//         ...user.preferences,
//         notifications: { ...user.preferences.notifications }
//     }
// }
//
// console.log(user.address.coordinates !== userDeepCopy.address.coordinates) // true
// console.log(user.preferences.notifications !== userDeepCopy.preferences.notifications) // true

// Как проверить существования свойства в объекте?
// console.log('name' in user)

// цикл
// вывести в консоль все значения свойств user
// for (const key in user.address.coordinates) {
//     console.log(key)
// }

// С помощью какого метода можно получить все ключи объекта? Что возвращает?
// С помощью какого метода можно получить все значение объекта? Что возвращает?
// С помощью какого метода можно получить ключи и значения объекта? Что возвращает?

const keys = Object.keys(user) // массив ключей
const values = Object.values(user) // массив значений
const entries = Object.entries(user) // массив пар ключ-значение

// console.log(keys)
// console.log(values)
// console.log(entries)

const developerSalaries = {
    'Mark': 600,
    'Pavel': 500,
    'Bill': 1250
}

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// с помощью метода Object.values и цикла for..of.

// const sumSalaries = (arr) => {
//     let sum = 0
//
//     for (const value of Object.entries(arr)) {
//         sum += value
//     }
//
//     return sum
// }

// for (const [ key, value ] of Object.entries(arr)) {
//     console.log(key, value)
// }

// console.log(sumSalaries(developerSalaries)) // 2350

const witcherCharacters = [
    {
        name: 'Geralt of Rivia',
        race: 'Witcher',
        specialAbilities: [ 'Swordsmanship', 'Alchemy', 'Signs' ],
        country: 'Kaer Morhen',
        age: 100,
        appearance: {
            scars: false,
            hairColor: 'White',
            eyeColor: 'Yellow'
        }
    },
    {
        name: 'Ciri',
        race: 'Human',
        specialAbilities: [ 'Swordsmanship', 'Magic', 'Time Travel' ],
        country: 'Cintra',
        age: 17,
        appearance: {
            scars: false,
            hairColor: 'Ashen',
            eyeColor: 'Emerald Green'
        }
    },
    {
        name: 'Lambert',
        race: 'Witcher',
        specialAbilities: [ 'Swordsmanship', 'Alchemy', 'Signs' ],
        country: 'Kaer Morhen',
        age: 50,
        appearance: {
            scars: true,
            hairColor: 'Chestnut',
            eyeColor: 'Yellow'
        }
    },
    {
        name: 'Eskel',
        race: 'Witcher',
        specialAbilities: [ 'Swordsmanship', 'Alchemy', 'Signs' ],
        country: 'Kaer Morhen',
        age: 90,
        appearance: {
            scars: true,
            hairColor: 'Chestnut',
            eyeColor: 'Yellow'
        }
    },
    {
        name: 'Vesemir',
        race: 'Witcher',
        specialAbilities: [ 'Swordsmanship', 'Alchemy', 'Signs' ],
        country: 'Kaer Morhen',
        age: 400,
        appearance: {
            scars: true,
            hairColor: 'Gray',
            eyeColor: 'Yellow'
        }
    },
    {
        name: 'Yennefer',
        race: 'Human',
        specialAbilities: [ 'Magic', 'Telekinesis', 'Illusion' ],
        country: 'Redania',
        age: 94,
        appearance: {
            scars: false,
            hairColor: 'Black as pitch',
            eyeColor: 'Purple'
        }
    },
    {
        name: 'Yarpen Zigrin',
        race: 'Dwarf',
        specialAbilities: [ 'Hand-to-hand combat', 'Axe mastery' ],
        country: 'Mahakam',
        age: 150,
        appearance: {
            scars: true,
            hairColor: 'Red',
            eyeColor: 'Brown'
        }
    }
]

// Написать функцию getOlderCharacters, которая принимает массив персонажей и возраст
// возвращает персонажей, чей возраст больше переданного
// const getOlderCharacters = (characters, age) => characters.filter(character => character.age > age)
// console.log(getOlderCharacters(witcherCharacters, 100))

// Написать функцию getCharactersCountries, которая получает массив персонажей и
// возвращает массив королевств/убежищ персонажей
// const getCharactersCountries = (characters) => characters.map(character => character.country)
// console.log(getCharactersCountries(witcherCharacters)) // 'Kaer Morhen', 'Cintra', 'Kaer Morhen'...

// Написать функцию getCharactersByRace которая возвращает массив имен персонажей переданной расы
// function getCharactersByRace(characters, race) {
//     return characters.filter(item => item.race === race).map(item => item.name) // O(n)
// }
//
// console.log(getCharactersByRace(witcherCharacters, 'Witcher')) // [ 'Geralt of Rivia', 'Lambert', 'Eskel', 'Vesemir' ]

// Написать функцию addSpecialAbility, которая получает массив персонажей, имя персонажа и навык
// добавляет навык персонажу и возвращает новый массив
// const addSpecialAbilities = function (characters, name, ability) {
//     return characters.map((el) => {
//         if(el.name === name) {
//             return {
//                 ...el,
//                 specialAbilities: [...el.specialAbilities, ability]
//             }
//         }
//
//         return el
//     })
// }

// const updatedWitcherCharacters = addSpecialAbilities(witcherCharacters, 'Ciri', 'teleport')
// console.log(updatedWitcherCharacters[1].specialAbilities) // 'Swordsmanship', 'Magic', 'Time Travel', 'teleport'
// console.log(updatedWitcherCharacters[1].specialAbilities !== witcherCharacters[1].specialAbilities) // true

// Написать функцию addScarsInfo, которая принимает массив персонажей, имя персонажа
// и информацию о наличии шрама, добавляет эту информацию персонажу и возвращает новый массив
// const addScarsInfo = (characters, name, scars) => {
//     return characters.map((el) => {
//         if (el.name === name) {
//             return {
//                 ...el,
//                 appearance: { ...el.appearance, scars }
//             }
//         }
//
//         return el
//     })
// }
//
// const updatedWitcherCharacters = addScarsInfo(witcherCharacters, 'Ciri', true)
// console.log(updatedWitcherCharacters[1].appearance.scars) // true
// console.log(
//     updatedWitcherCharacters[1].appearance !== witcherCharacters[1].appearance) // true

// Написать функцию arrayToObjByNames, которая принимает массив персонажей и
// преобразовывает в объект, ключами в котором являются имена персонажей,
// а значениями остальные свойства
// const arrayToObjByNames = (characters) => {
//     return characters.reduce((acc, item) => {
//         const { name, ...rest } = item
//         acc[name] = rest // O(1)
//
//         return acc
//     }, {})
// }

// const witcherCharactersObj = arrayToObjByNames(witcherCharacters)
// console.log(witcherCharactersObj)

// Написать функцию getUniqueSpecialAbilities, которая получает объект персонажей и
// возвращает массив навыков персонажей
// навыки не должны повторяться

// const getUniqueSpecialAbilities = (charactersObj) => {
//     const res = []
//     for (const charactersObjElement of Object.values(charactersObj)) {
//         charactersObjElement.specialAbilities.forEach(ab => {
//             if(!res.includes(ab)) res.push(ab)
//         })
//     }
//
//     return res
// }
// console.log(getUniqueSpecialAbilities(witcherCharactersObj)) // 'Swordsmanship', 'Alchemy', 'Signs'...