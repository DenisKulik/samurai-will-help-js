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

// Что выведется в консоль?
const itIncubatorAge = 6
// console.log(itIncubatorAge.__proto__ === itIncubatorAge.prototype)
// console.log(Number.prototype === itIncubatorAge.prototype)
// console.log(itIncubatorAge.__proto__ === Number.prototype)
// console.log(itIncubatorAge.toString().__proto__ !== String.prototype)

const itIncubatorMainSensey = 'Dimych'
// console.log(itIncubatorMainSensey.__proto__ === String.__proto__)
// console.log(String.prototype === itIncubatorMainSensey.__proto__)
// console.log(itIncubatorMainSensey.__proto__ === itIncubatorAge.__proto__)

const isItIncubatorTheBest = true
// console.log(isItIncubatorTheBest.prototype === Boolean.prototype)
// console.log(Boolean.prototype === isItIncubatorTheBest.__proto__)
// console.log(Object.prototype === isItIncubatorTheBest.__proto__.__proto__)

const itIncubatorTeachers = [
    'Viktor',
    'Igor',
    'Valera the Elder',
    'Denis',
    'Valera Safronov'
]

// console.log(itIncubatorTeachers.prototype === Array.__proto__)
// console.log(Array.prototype === itIncubatorTeachers.__proto__)
// console.log(Array.__proto__.__proto__)
// console.log(Array.__proto__.__proto__.__proto__)

const itIncubatorYoutubeChannel = {
    subscribers: 10.7,
    videos: 362,
    registrationDate: '23/04/2015',
    views: 597106,
    learnReactRedux() {
        console.log('You have learned react and redux!')
    }
}

// console.log(itIncubatorYoutubeChannel.__proto__ === Object.__proto__)
// console.log(itIncubatorYoutubeChannel.__proto__ === Object.prototype)
// console.log(itIncubatorYoutubeChannel.__proto__.__proto__ === Object.prototype)

function isExamPassed(student, exam, passedQuestions, totalQuestions) {
    return passedQuestions >= totalQuestions / 2
        ? `${student.id} passed ${exam.id} exam`
        : `${student.id} failed ${exam.id} exam`
}

// console.log(isExamPassed.prototype === isExamPassed.__proto__.__proto__)
// console.log(isExamPassed.__proto__ === Function.prototype)
// console.log(Function.prototype.__proto__ === Object.prototype)

function ItIncubator(samuraiName) {
    this.name = samuraiName
    this.educateMiddleDeveloper = function (student, direction) {
        return { ...student, educatedMuddleDeveloper: direction }
    }
}

const shogun = new ItIncubator(itIncubatorMainSensey)
// console.log(shogun)

// Что выведется в консоль?
// console.log(ItIncubator.prototype === Function.prototype)
// console.log(ItIncubator.prototype === Function.prototype)
// console.log(ItIncubator.prototype === ItIncubator.__proto__)
// console.log(ItIncubator.__proto__ === Function.__proto__)
// console.log(ItIncubator.__proto__ === Function.prototype)

const shogun2 = new ItIncubator('Igor')
// console.log(shogun2.__proto__ === shogun.__proto__)
// console.log(shogun2.__proto__ === ItIncubator.prototype)
// console.log(shogun.__proto__.__proto__)
// console.log(shogun2.prototype === shogun.prototype)

// ===========================================================
// Как мы можем сами установить прототип для объекта

// 1) Object.create()

// 2) Object.setPrototypeOf()

// 3) obj.__proto__

// console.log(itKamasutraYoutubeChannel3.__proto__ === Object.prototype)
// console.log(itKamasutraYoutubeChannel3.__proto__.__proto__ === Object.prototype)
// console.log(itKamasutraYoutubeChannel3.__proto__ === itIncubatorYoutubeChannel.prototype)
// console.log(itKamasutraYoutubeChannel3.__proto__ === itIncubatorYoutubeChannel.__proto__)




