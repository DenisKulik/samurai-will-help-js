'use strict'

// Objects
// Способы создания объекта

const developer = {
    name: 'Dan Abramov',
    skills: [ 'html', 'css', 'js', 'react', 'redux' ],
    code() {
        return `console.log("Hello, World!")`
    }
}

// Выведите в консоль навыки разработчика по очереди
// Выведите в консоль результат вызова метода code

// Добавить свойство experience со значением 5 years
// console.log(developer)

// Изменить значение свойства experience на 6 лет
// console.log(developer)

// Добавить навык storybook
// console.log(developer.skills) // ['html', 'css', 'js', 'react', 'redux', 'storybook']

// Что выведется в консоль?
// developer[{ a: 1 }] = true
// developer[{ a: 2 }] = false
// console.log(developer)

// Удалите свойство skills
// console.log(developer)

// Деструктуризация
// скопируйте свойство name в переменную developerName, по умолчанию John
// остальные свойства запишите в переменную rest

// console.log(developerName) // Dan Abramov
// console.log(rest)

// Способы копирования объекта

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
// console.log(user.address.city === userCopy.address.city) // true

// Сделать поверхностную копию user
// console.log(userShallowCopy !== user) // true

// сделать глубокую копию user
// console.log(user.address.coordinates !== userDeepCopy.address.coordinates) // true
// console.log(user.preferences.notifications !== userDeepCopy.preferences.notifications) // true

// Как проверить существования свойства в объекте?

// цикл
// вывести в консоль все значения свойств user

// С помощью какого метода можно получить все ключи объекта? Что возвращает?
// С помощью какого метода можно получить все значение объекта? Что возвращает?
// С помощью какого метода можно получить ключи и значения объекта? Что возвращает?

const developerSalaries = {
    'Mark': 600,
    'Pavel': 500,
    'Bill': 1250
}

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат
// с помощью метода Object.values и цикла for..of.

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
// console.log(getOlderCharacters(witcherCharacters, 100))

// Написать функцию getCharactersCountries, которая получает массив персонажей и
// возвращает массив королевств/убежищ персонажей
// console.log(getCharactersCountries(witcherCharacters)) // 'Kaer Morhen', 'Cintra', 'Kaer Morhen'...

// Написать функцию getCharactersByRace которая возвращает массив имен персонажей переданной расы
// console.log(getCharactersByRace(witcherCharacters, 'Witcher')) // [ 'Geralt of Rivia', 'Lambert', 'Eskel', 'Vesemir' ]

// Написать функцию addSpecialAbility, которая получает массив персонажей, имя персонажа и навык
// добавляет навык персонажу и возвращает новый массив
// const updatedWitcherCharacters = addSpecialAbilities(witcherCharacters, 'Ciri', 'teleport')
// console.log(updatedWitcherCharacters[1].specialAbilities) // 'Swordsmanship', 'Magic', 'Time Travel', 'teleport'
// console.log(updatedWitcherCharacters[1].specialAbilities !== witcherCharacters[1].specialAbilities) // true

// Написать функцию addScarsInfo, которая принимает массив персонажей, имя персонажа
// и информацию о наличии шрама, добавляет эту информацию персонажу и возвращает новый массив
// const updatedWitcherCharacters = addScarsInfo(witcherCharacters, 'Ciri', true)
// console.log(updatedWitcherCharacters[1].appearance.scars) // true
// console.log(updatedWitcherCharacters[1].appearance !== witcherCharacters[1].appearance) // true

// Написать функцию arrayToObjByNames, которая принимает массив персонажей и
// преобразовывает в объект, ключами в котором являются имена персонажей,
// а значениями остальные свойства
// const witcherCharactersObj = arrayToObjByNames(witcherCharacters)
// console.log(witcherCharactersObj)

// Написать функцию getUniqueSpecialAbilities, которая получает объект персонажей и
// возвращает массив навыков персонажей
// навыки не должны повторяться
// console.log(getUniqueSpecialAbilities(witcherCharactersObj)) // 'Swordsmanship', 'Alchemy', 'Signs'...