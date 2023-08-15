// this - контекст вызова функции
// ссылка на объект, к свойствам которого мы можем
// получить доступ внутри вызова функции

// 'use strict'

// 1. Global Scope
// 2. Inside functions (not arrow functions) ---> global object (window - browser, nodejs - global)
//    -- вызвана с помощью ключевого слова new --> this === {}
//    -- с помощью методов call apply bind
//    -- вызывается от имени объекта ---> this === то что слева от точки
//    -- simple call ===> this === undefined ( !use strict === window )
// 3. Arrow functions ---> this берётся из внешнего scope

// =================== GLOBAL SCOPE ============================================
// console.log(this) // (browser - window, nodejs - global)
// this.age = 25
// console.log(this.age) // 25
// console.log(this)
// =============== INSIDE FUNCTIONS ============================================

function foo() {
    console.log(this)
}

// foo() // global / window / undefined

// Объекты
// const user = {
//     name: 'John',
//     age: 30,
//     greeting() {
//         console.log(`Hello, my name is ${user.name}!`)
//     }
// }
// user.greeting() // Hello, my name is John
//
// const userTwo = {
//     name: 'Kate',
//     age: 25,
//     greeting: user.greeting
// }
// Что выведет в консоль?
// userTwo.greeting() // Hello, my name is John

// Метод объекта
// const user = {
//     name: 'John',
//     age: 30,
//     greeting() {
//         console.log(`Hello, my name is ${this.name}!`)
//     }
// }
// user.greeting() // Hello, my name is John
//
// const userTwo = {
//     name: 'Kate',
//     age: 25,
//     greeting: user.greeting
// }
//
// userTwo.greeting() // Hello, my name is Kate!

// Создайте объект planet с методом для представления планеты и её диаметра.
// Используйте метод объекта в контексте этого объекта.
// const planet = {
//     name: 'Earth',
//     diameter: 12742,
//     describe() {
//         console.log(`Planet ${this.name}, diameter ${this.diameter}`)
//     }
// }
// planet.describe() // Planet Earth, diameter 12742 km

// Создайте объект currencyConverter с методами для перевода валют
// Добавьте свойства dollarsRate и euroRate для хранения курсов обмена
// const currencyConverter = {
//     dollarsRate: 100,
//     euroRate: 110,
//     toRubles(amount, currency) {
//         if(currency === 'dollars') {
//             return amount * this.dollarsRate
//         } else if(currency === 'euros') {
//             return amount * this.euroRate
//         } else {
//             console.log('Incorrect currency')
//         }
//     }
// }
// console.log(currencyConverter.toRubles(100, 'dollars')) // 10000
// console.log(currencyConverter.toRubles(200, 'euros')) // 22000

// DOM
// Что выведется в консоль?
// this = currentTarget
// btn.addEventListener('click', foo)

// =============== CALL APPLY BIND =============================================
const person = {
    name: 'John Doe',
    birthYear: 1996,
    getAge(currentYear) {
        return currentYear - this.birthYear
    }
}
const getPersonAge = person.getAge.bind(person, 2023) // потеря контекста
// console.log(getPersonAge()) // 27

const person_2 = {
    name: 'Michael Smith',
    birthYear: 2001,
}

// console.log(person.getAge.call(person_2, 2023)) // 22
// console.log(person.getAge.apply(person_2, [ 2023 ])) // 22

// Создайте объект "timer" с методом для вывода текущего времени currentTime.
// Используйте метод `bind` для создания функции, которая будет выводить время.
const timer = {
    region: 'Siberia',
    currentTime() {
        const now = new Date()
        console.log(
            `Current time in ${this.region}: ${now.toLocaleTimeString()}`)
    }
}

const printTime = timer.currentTime.bind(timer)
// printTime(); // Current time: 13:00:00 PM

const character = {
    name: 'John',
    introduce() {
        console.log(`My name is ${this.name}`)
    }
}

const anotherCharacter = {
    name: 'Alice',
    introduce: character.introduce
}

// anotherCharacter.introduce()
// character.introduce.call(anotherCharacter)
// Что нужно написать, чтобы в консоли было `My name is Alice`?

// Создайте объект mathCalculator с методом для вычисления
// абсолютной разницы absoluteDifference между двумя числами.
// Используйте метод `apply` для передачи двух аргументов
// const mathCalculator = {
//     absoluteDifference(a, b) {
//         console.log(Math.abs(a - b))
//     }
// }
// mathCalculator.absoluteDifference.apply(null, [ 15, 8 ]) // 7

const calculator = {
    value: 5,
    double() {
        this.value *= 2
        console.log(this.value)
    }
}
// Что будет выведено в консоль?
// const half = calculator.double.call(calculator) // undefined
// half() // half is not a function

// =================== ARROW FUNCTIONS =========================================
const foo2 = () => {
    console.log(this)
}
// foo2()

const person2 = {
    name: 'John Doe',
    birthYear: 1996,
    getAge(currentYear) {
        return currentYear - this.birthYear
    },
    getName: () => {
        return this.name
    }
}
// Что выведется в консоль?
// console.log(person2.getAge(2023)) // 27
// console.log(person2.getName()) // '' / undefined
// console.log(this)

const obj = {
    a: 1,
    b: 2,
    print() {
        setTimeout(() => {
            console.log(this)
        })
    }
}
// obj.print() //

const obj2 = {
    value: 42,
    getValue: () => {
        console.log(this.value)
    }
}
// Что будет выведено в консоль?
// obj2.getValue() // undefined

const user3 = {
    name: 'Igor',
    tic() {
        setTimeout(function () {
            console.log(this)
        }, 1500)
    }
}
const user4 = {
    name: 'Victor',
    tic() {
        setTimeout(() => {
            console.log(this)
        }, 1500)
    }
}
// Что будет выведено в консоль?
// btn.addEventListener('click', user3.tic) // window
// btn.addEventListener('click', () => {
//     setTimeout(() => {
//         console.log(this)
//     }, 1500)
// }) // button

const john = {
    age: 53,
    showAge() {
        console.log(this.age)
    },
}
// Что будет выведено в консоль?
// setTimeout(john.showAge, 300) // undefined
// setTimeout(john.showAge.bind(john), 300) // 53
// setTimeout(() => john.showAge(), 300) // 53

const user2 = {
    age: 21,
    showAge() {
        function bar() {
            console.log(this.age)
        }

        bar.call({ age: 18 })
    }
}
// Что будет выведено в консоль?
// user2.showAge.call({ age: 25 }) // 18
// user2.showAge.call(user2) // 18

const student = {
    group: '52',
    students: [ 'John', 'Alex', 'Piter' ],
    showGroupStudent() {
        this.students.forEach((function (stud) {
            console.log(this.group + ' ' + stud)
        }).bind(this))
    }
}

const student2 = {
    group: '52',
    students: [ 'John', 'Alex', 'Piter' ],
    showGroupStudent() {
        this.students.forEach(stud => {
            console.log(this.group + ' ' + stud)
        })
    }
}
// Что будет выведено в консоль?
// student.showGroupStudent() // 52 John 52 Alex 52 Piter
// student2.showGroupStudent() // 52 John 52 Alex 52 Piter

// ================= KEYWORD NEW =================
// Функции-конструкторы для создания однотипных объектов
function Car(made, model, year) {
    // this = {}
    this.made = made
    this.model = model
    this.year = year

    this.start = function () {
        console.log('The car has started.')
    }
    this.stop = function () {
        console.log('The car has stopped.')
    }
    this.drive = function () {
        console.log('The car is in motion.')
    }
    // return this
}

// const bmw = new Car('BMW', 'M5', 2016)
// console.log(bmw)
// bmw.drive()

// Что будет выведено в консоль?
// const lada = Car('Lada', 'Vesta', 2023)
// console.log(lada) // undefined
// lada.drive() //  Cannot read properties of undefined

// Создайте функцию-конструктор для объектов Book
// У каждой книги должны быть свойства title и author
// Добавьте метод showInfo, который выводит информацию о книге
function Book(title, author) {
    this.title = title
    this.author = author
    this.showInfo = function () {
        console.log(`Book: ${this.title}, Author: ${this.author}`)
    }
}

// const book1 = new Book('Война и мир', 'Лев Толстой')
// const book2 = new Book('Преступление и наказание', 'Фёдор Достоевский')
// book1.showInfo() // Book: Война и мир, Author: Лев Толстой
// book2.showInfo() // Book: Преступление и наказание, Author: Фёдор Достоевский

// Создайте функцию-конструктор Counter, который будет иметь методы для
// увеличения и уменьшения значения счетчика.
// Используйте ключевое слово this для доступа к текущему значению счетчика.

function Counter() {
    this.value = 0
    this.increment = function () {
        this.value++
    }
    this.decrement = function () {
        this.value--
    }
}

// const counter = new Counter()
// counter.increment()
// counter.increment()
// counter.decrement()
// console.log(counter.value) // 1

// Создайте функцию-конструктор Calculator с методами subtract и multiply.
// Создайте функции subtractFive и multiplyByTwo а основе этих методов

function Calculator() {
    this.subtract = function (a, b) {
        console.log(a - b)
    }
    this.multiply = function (a, b) {
        console.log(a * b)
    }
}

// const calculator2 = new Calculator()
// const subtractFive = calculator2.subtract.bind(calculator2, 5)
// const multiplyByTwo = calculator2.multiply.bind(calculator2, 2)
// subtractFive(10) // -5
// multiplyByTwo(8) // 16

////////////////////////////////////////////////////////////////////////////////
function bar() {
    console.log(this)
}

const alex = {
    age: 24,
    showAge: bar
}

// Что будет выведено в консоль?
alex.showAge() // alex
alex.showAge.bind({ one: 1 })() // { one: 1 }

function Car2() {
    console.log(this)
}

// Что будет выведено в консоль?
new (Car2.bind({ two: 2 }))() // {}


