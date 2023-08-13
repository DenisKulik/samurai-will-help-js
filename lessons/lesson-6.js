// this

// 'use strict'

// 1. Global Scope
// 2. Inside functions (not arrow functions)
// 3. Arrow functions

// =================== GLOBAL SCOPE ============================================

// =============== INSIDE FUNCTIONS ============================================

function foo() {
    console.log(this)
}

// foo()

const user = {
    name: 'John',
    age: 30,
    greeting() {
        console.log(`Hello, my name is ${user.name}!`)
    }
}
// user.greeting()

const userTwo = {
    name: 'Kate',
    age: 25,
    greeting: user.greeting
}
// Что выведет в консоль?
// userTwo.greeting()

// Метод объекта

// Создайте объект planet с методом для представления планеты и её диаметра.
// Используйте метод объекта в контексте этого объекта.
// planet.describe() // Planet Earth, diameter 12742 km

// Создайте объект currencyConverter с методами для перевода валют
// Добавьте свойства dollarsRate и euroRate для хранения курсов обмена
// console.log(currencyConverter.toRubles(100, 'dollars')) // 10000
// console.log(currencyConverter.toRubles(200, 'euros')) // 22000

// DOM
// Что выведется в консоль?
// btn.addEventListener('click', foo)

// =============== CALL APPLY BIND =============================================
const person = {
    name: 'John Doe',
    birthYear: 1996,
    getAge(currentYear) {
        return currentYear - this.birthYear
    }
}
// const getPersonAge = person.getAge
// console.log(getPersonAge(2023))

// const person2 = {
//     name: 'Michael Smith',
//     birthYear: 2001,
// }

// console.log(person.getAge.call(person2, 2023))
// console.log(person.getAge.apply(person2, [ 2023 ]))

// Создайте объект "timer" с методом для вывода текущего времени currentTime.
// Используйте метод `bind` для создания функции, которая будет выводить время.
// const printTime = timer.currentTime.bind(timer)
// printTime(); // Current time: 13:00:00 PM

const character = {
    name: 'John',
    introduce() {
        console.log(`My name is ${this.name}`)
    }
}

const anotherCharacter = {
    name: 'Alice'
}

// Что нужно написать, чтобы в консоли было `My name is Alice`?

// Создайте объект mathCalculator с методом для вычисления
// абсолютной разницы absoluteDifference между двумя числами.
// Используйте метод `apply` для передачи двух аргументов.
// mathCalculator.absoluteDifference.apply(null, [ 15, 8 ]) // 7

const calculator = {
    value: 5,
    double() {
        this.value *= 2
        console.log(this.value)
    }
}
// Что будет выведено в консоль?
// const half = calculator.double.call(calculator)
// half()

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
// console.log(person.getAge(2023))
// console.log(person.getName())

const obj = {
    a: 1,
    b: 2,
    print() {
        setTimeout(function () {
            console.log(this)
        })
    }
}
// obj.print()

const obj2 = {
    value: 42,
    getValue: () => {
        console.log(this.value)
    }
}
// Что будет выведено в консоль?
// obj2.getValue()

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
// btn.addEventListener('click', user3.tic)
// btn.addEventListener('click', user4.tic)

const john = {
    age: 53,
    showAge() {
        console.log(this.age);
    },
}
// Что будет выведено в консоль?
// setTimeout(john.showAge, 300)
// setTimeout(john.showAge.bind(john), 300)
// setTimeout( () => john.showAge(), 300)

const user2 = {
    age: 21,
    showAge() {
        const bar = () => {
            console.log(this.age)
        }

        bar.call({ age: 18 })
    }
}
// Что будет выведено в консоль?
// user2.showAge.call({ age: 25 })

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
// student.showGroupStudent()
// student2.showGroupStudent()

// ================= KEYWORD NEW =================

function Car(make, model, year) {
    this.make = make
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
}

// Что будет выведено в консоль?
// const lada = Car('Lada', 'Vesta', 2023)
// console.log(lada)
// lada.drive()

// Создайте функцию-конструктор для объектов Book
// У каждой книги должны быть свойства title и author
// Добавьте метод showInfo, который выводит информацию о книге

// const book1 = new Book('Война и мир', 'Лев Толстой')
// const book2 = new Book('Преступление и наказание', 'Фёдор Достоевский')
// book1.showInfo() // Book: Война и мир, Author: Лев Толстой
// book2.showInfo() // Book: Преступление и наказание, Author: Фёдор Достоевский

// Создайте функцию-конструктор Counter, который будет иметь методы для увеличения и уменьшения значения счетчика.
// Используйте ключевое слово this для доступа к текущему значению счетчика.

// const counter = new Counter()
// counter.increment()
// counter.increment()
// counter.decrement()
// console.log(counter.value) // 1

// Создайте функцию-конструктор Calculator с методами subtract и multiply.
// Создайте функции subtractFive и multiplyByTwo а основе этих методов

// const calculator = new Calculator()
// const subtractFive = calculator.subtract.bind(calculator, 5)
// const multiplyByTwo = calculator.multiply.bind(calculator, 2)
// subtractFive(10) // -5
// multiplyByTwo(8) // 16

function bar() {
  console.log(this)
}

const alex = {
  age: 24,
  showAge: bar
}
// Что будет выведено в консоль?
// alex.showAge()
// alex.showAge.bind({ one: 1 })()

function Car2() {
  console.log(this)
}

// Что будет выведено в консоль?
// new (Car2.bind({ two: 2 }))()


