'use strict'

// prototype, __proto__

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    hobbies: [ 'reading', 'hiking', 'cooking' ],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'Countryville'
    }
}

// console.log(person)
// console.log(person.toString())

// prototype - объект, на который ссылается свойство [[Prototype]], либо null
// prototype есть только у функций (не стрелочных) и у классов
// __proto__ - ссылка на prototype, есть у всех объектов

// Boxing/unboxing.
// console.log(new Number(5)) // new Number(...)

// X.__proto__ ----> XConstructor.prototype
// console.log(person.__proto__ === Object.prototype)

// Что выведется в консоль?
const itIncubatorAge = 6
// console.log(itIncubatorAge.__proto__ === itIncubatorAge.prototype) // false
// console.log(Number.prototype === itIncubatorAge.prototype) // false
// console.log(itIncubatorAge.__proto__ === Number.prototype) // true
// console.log(itIncubatorAge.toString().__proto__ !== String.prototype) // false

const itIncubatorMainSensey = 'Dimych'
// console.log(itIncubatorMainSensey.__proto__ === String.__proto__) // false
// console.log(String.prototype === itIncubatorMainSensey.__proto__) // true
// console.log(itIncubatorMainSensey.__proto__ === itIncubatorAge.__proto__) // false

const isItIncubatorTheBest = true
// console.log(isItIncubatorTheBest.prototype === Boolean.prototype) // false
// console.log(Boolean.prototype === isItIncubatorTheBest.__proto__) // true
// console.log(Object.prototype === isItIncubatorTheBest.__proto__.__proto__) // true

const itIncubatorTeachers = [
    'Viktor',
    'Igor',
    'Valera the Elder',
    'Denis',
    'Valera Safronov'
]

// console.log(itIncubatorTeachers.prototype === Array.__proto__) // false
// console.log(Array.prototype === itIncubatorTeachers.__proto__) // true
// console.log(Array.__proto__.__proto__) // Object.prototype
// console.log(Array.__proto__.__proto__.__proto__) // null

const itIncubatorYoutubeChannel = {
    subscribers: 10.7,
    videos: 362,
    registrationDate: '23/04/2015',
    views: 597106,
    learnReactRedux() {
        console.log('You have learned react and redux!')
    }
}

// console.log(itIncubatorYoutubeChannel.__proto__ === Object.__proto__) // false
// console.log(itIncubatorYoutubeChannel.__proto__ === Object.prototype) // true
// console.log(itIncubatorYoutubeChannel.__proto__.__proto__ === Object.prototype) // false

function isExamPassed(student, exam, passedQuestions, totalQuestions) {
    return passedQuestions >= totalQuestions / 2
        ? `${student.id} passed ${exam.id} exam`
        : `${student.id} failed ${exam.id} exam`
}

// console.log(isExamPassed.prototype === isExamPassed.__proto__.__proto__) // false
// console.log(isExamPassed.__proto__ === Function.prototype) // true
// console.log(Function.prototype.__proto__ === Object.prototype) // true

function ItIncubator(samuraiName) {
    this.name = samuraiName
    // this.educateMiddleDeveloper = function (student, direction) {
    //     return { ...student, educatedMuddleDeveloper: direction }
    // }
}

ItIncubator.prototype.educateMiddleDeveloper = function (student, direction) {
    return { ...student, educatedMuddleDeveloper: direction }
}

// Array.prototype.superForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this)
//     }
// }
// const nums = [ 1, 2, 3, 4, 5 ]
// nums.superForEach((el, idx, array) => console.log(el))
const shogun = new ItIncubator(itIncubatorMainSensey)

const samurai = new ItIncubator('Artemy')
// console.log(shogun instanceof ItIncubator)
// console.log(samurai)

// Что выведется в консоль?
// console.log(ItIncubator.prototype === Function.prototype) // false
// console.log(ItIncubator.prototype === ItIncubator.__proto__) // false
// console.log(ItIncubator.__proto__ === Function.__proto__) // true
// console.log(ItIncubator.__proto__ === Function.prototype) // true

const shogun2 = new ItIncubator('Igor')
// console.log(shogun2.__proto__ === shogun.__proto__) // true
// console.log(shogun2.__proto__ === ItIncubator.prototype) // false
// console.log(shogun.__proto__.__proto__) // Object.prototype
// console.log(shogun2.prototype === shogun.prototype) // true

// console.log(typeof ItIncubator.__proto__)
// console.log(typeof Function.__proto__)

// ===========================================================
// Как мы можем сами установить прототип для объекта

// 1) Object.create()
const itKamasutraYoutubeChannel = Object.create(itIncubatorYoutubeChannel)
console.log(itKamasutraYoutubeChannel)
itKamasutraYoutubeChannel.subscribers = 180_000
console.log(itKamasutraYoutubeChannel)
console.log('videos' in itKamasutraYoutubeChannel)
console.log(itKamasutraYoutubeChannel.hasOwnProperty('videos'))

// for (const itKamasutraYoutubeChannelKey in itKamasutraYoutubeChannel) {
//     console.log(itKamasutraYoutubeChannelKey)
// }

// 2) Object.setPrototypeOf()
const itKamasutraYoutubeChannel2 = {}
Object.setPrototypeOf(itKamasutraYoutubeChannel2, itIncubatorYoutubeChannel)
// console.log(itKamasutraYoutubeChannel2)

// 3) obj.__proto__

// const obj = {
//     _name: '',
//     set name(name) {
//         this._name = `${name}!`
//     },
//
//     get name() {
//         return this._name
//     }
// }
//
// class Person {
//     #name
//
//     set name(name) {
//         this.#name = `${name}!`
//     }
//
//     get name() {
//         return this.#name
//     }
// }

// const samurai44 = new Person()
// samurai44.name = 'Alexander'
// console.log(samurai44)

const itKamasutraYoutubeChannel3 = {}
itKamasutraYoutubeChannel3.__proto__ = itIncubatorYoutubeChannel
// console.log(itKamasutraYoutubeChannel3)

// console.log(itKamasutraYoutubeChannel3.__proto__ === Object.prototype) // false
// console.log(itKamasutraYoutubeChannel3.__proto__.__proto__ === Object.prototype) // true
// console.log(itKamasutraYoutubeChannel3.__proto__ === itIncubatorYoutubeChannel.prototype)// false
// console.log(itKamasutraYoutubeChannel3.__proto__ === itIncubatorYoutubeChannel)// true




