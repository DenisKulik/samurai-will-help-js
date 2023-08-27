// ============================ Classes ========================================
// Класс - расширяемый шаблон для создания однотипных объектов
// ============================ ООП ============================================
// Абстракция (abstraction) – выделение сущностных черт объекта и
// игнорирование деталей, которые не важны. User: username, password, login(), logout()

// Инкапсуляция (incapsulation) - объединение данных и функциональности в оболочку
// - класс, а также сокрытие деталей их реализации от пользователя

// Наследование (inheritance) - механизм, позволяющий наследовать одними классами
// свойства и методы других классов для дальнейшего расширения или модификации

// Полиморфизм (polymorphism) - принцип, который позволяет объектам разных типов
// использовать одинаковые методы

// =============================================================================
class User {
    constructor(username, password) {
        this.username = username
        this.password = password
    }

    login() {
        console.log(`Hi, ${this.username}`)
    }

    logout = () => {
        console.log(`Bye, ${this.username}`)
    }
}

const alex = new User('Alex', 'qwerty')
// console.log(alex)
// alex.login()
// alex.logout()

// Что выведется в консоль?
// console.log(alex.__proto__ === Object.prototype) // false
// console.log(alex.__proto__.__proto__ === Object.prototype) // true
// console.log(alex.__proto__ === User.prototype) // true
// console.log(alex.__proto__ === Function.prototype) // true
// console.log(User.__proto__) // Function.prototype
// console.log(typeof User) // function

// Создайте класс ProductItem для представления товаров в интернет-магазине.
// Каждый товар должен иметь свойства price и quantity.
// Добавьте метод calculateTotal(), который будет возвращать общую стоимость товара.
class ProductItem {
    // this
    constructor(price, quantity) {
        this.price = price
        this.quantity = quantity
    }

    calculateTotal() {
        return this.price * this.quantity
    }
}

const phone = new ProductItem(500, 2)
// console.log('Total cost:', phone.calculateTotal()) // Total cost: 1000

// ============================== get/set ======================================

class Product {
    constructor(name) {
        this.name = name
        this._price = 0
    }

    get price() {
        return this._price
    }

    set price(value) {
        if (value < 0) {
            console.log('Цена должна быть положительным числом')
            return
        }
        this._price = value
    }
}

// const product1 = new Product('lemon')
// product1.price = 10
// console.log(product1.price)
// const product2 = new Product('apple')
// product2.price = -10
// console.log(product2.price)

// Создайте класс Student, который будет представлять студента с именем и массивом оценок.
// Используйте геттер и сеттер для оценок так, чтобы сеттер проверял допустимые
// значения (от 1 до 10), и геттер вычислял средний балл

class Student {
    constructor(name) {
        this.name = name
        this._grades = []
    }

    get grades() {
        return this._grades
    }

    set grades(gradesArr) {
        if (gradesArr.every(g => g >= 1 && g <= 10)) {
            this._grades = gradesArr
            return
        }
        console.log('Оценки должны быть в диапазоне от 1 до 10')
    }

    averageGrade = () => {
        return this._grades.reduce((acc, el, _, arr) => acc + el / arr.length,
            0)
    }
}

// const student = new Student('Alice')
// student.grades = [ 9, 8, 7, 9, 10 ]

// console.log('Оценки студента:', student.grades) // Оценки студента: [9, 8, 7, 9, 10]
// console.log('Средний балл:', student.averageGrade()) // Средний балл: 8.6

// student.grades = [ 11, 8, 7 ] // Оценки должны быть в диапазоне от 1 до 10

// ========================== Свойства классов =================================
class PersonWithoutConstructor {
    name = ''

    introduce() {
        console.log(`Hello, my name is ${this.name}`)
    }
}

// const person1 = new PersonWithoutConstructor()
// person1.name = 'Alice'
//
// const person2 = new PersonWithoutConstructor()
// person2.name = 'Bob'
//
// // Что выведется в консоль?
// person1.introduce() // Hello, my name is Alice
// person2.introduce() // Hello, my name is Bob

// class PersonWithConstructor {
//     name = 'Walter'
//
//     constructor() {
//         this.name = 'Ilya'
//         return `{ name: 'Jessie' }`
//     }
// }

// const person3 = new PersonWithConstructor()
// console.log(person3) // name = 'Jessie'

// ========================== Наследование классов =============================
class Animal {
    constructor(name) {
        this.name = name
    }

    makeSound() {
        console.log('Animal sound')
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name)
        this.age = age
    }

    run() {
        super.makeSound()
        console.log(`${this.name} running!`)
    }

    makeSound() {
        console.log('Dog sound')
    }
}

class Bobik extends Dog {
    gav() {
        super.makeSound()
        console.log(`${this.name} running!`)
    }
}

// const myDog = new Dog('Buddy')
// myDog.run()
// myDog.makeSound()
//
// const bobik = new Bobik('Bobik')
// bobik.gav()

// Что выведется в консоль?
// console.log(Dog.prototype.__proto__ === Function.prototype) // false
// console.log(Dog.prototype.__proto__ === Animal.prototype) // true

// Найти ошибку
// class Vehicle {
//     constructor(type) {
//         this.type = type
//     }
// }
//
// class Car extends Vehicle {
//     constructor(type, brand) {
//         super(type)
//         this.brand = brand
//     }
// }
//
// const car = new Car('Car', 'Toyota')
// console.log(car.type) // error

// Что выведется в консоль?
class Ingredient {
    constructor(name, quantity) {
        this.name = name
        this.quantity = quantity
    }
}

class Recipe {
    constructor(name) {
        this.name = name
        this.ingredients = []
    }

    addIngredient(ingredient) {
        this.ingredients.push(ingredient)
    }

    displayIngredients() {
        return this.ingredients.map(ing => ing.name).join(', ')
    }
}

const flour = new Ingredient('Flour', '2 cups')
const sugar = new Ingredient('Sugar', '1 cup')
const cakeRecipe = new Recipe('Chocolate Cake')

cakeRecipe.addIngredient(flour)
cakeRecipe.addIngredient(sugar)

// console.log(cakeRecipe.ingredients) // [flour, sugar]
// console.log(cakeRecipe.name) // 'Chocolate Cake'
// console.log(cakeRecipe.displayIngredients()) // Flour, Sugar

// Создайте класс Shape, который имеет свойства width и height.
// От него унаследуйте классы Rectangle (Прямоугольник) и Triangle (треугольник).
// Добавьте методы для вычисления площади для каждой фигуры.

class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getArea() {
        return 0
    }
}

class Rectangle extends Shape {
    getArea() {
        return this.width * this.height
    }
}

class Triangle extends Shape {
    getArea() {
        return (this.width * this.height) / 2
    }
}

// const rectangle = new Rectangle(5, 10);
// console.log("Rectangle Area:", rectangle.getArea())

// const triangle = new Triangle(4, 7);
// console.log("Triangle Area:", triangle.getArea())

// ===================== Статические свойства и методы =========================

// age = 15             // публичное public       -> наследуется
// _age = 10            // защищенное protected   -> наследуется
// static age = 30      // статическое static     -> наследуется
// #age = 20            // приватное private      -> не наследуется

class MathOperations {
    static PI = 3.14159

    static add(x, y) {
        return x + y
    }

    static subtract(x, y) {
        return x - y
    }
}

const operation = new MathOperations()
console.log(operation) // {}

// Создайте класс Counter, у которого будет статическое свойство count
// для подсчета количества созданных объектов этого класса.
// У каждого подкласса должен быть свой собственный счетчик,
// который увеличивается при создании нового объекта.

class Counter {
    static count = 0

    constructor() {
        Counter.count++
    }

    static getCount() {
        return Counter.count
    }
}

class SubCounter extends Counter {
    static count = 0

    constructor() {
        super()
        SubCounter.count++
    }

    static getSubCount() {
        return SubCounter.count
    }
}

// const counter1 = new Counter()
// const counter2 = new Counter()
// console.log(Counter.getCount()) // 2
//
// const subCounter1 = new SubCounter()
// const subCounter2 = new SubCounter()
//
// console.log(SubCounter.getSubCount()) // 2
// console.log(Counter.getCount()) // 4

// =================== Приватные методы и свойства =============================

class Circle {
    #radius // Приватное свойство

    constructor(radius) {
        this.#radius = radius
    }

    #calculateArea() { // Приватный метод
        return Math.PI * this.#radius ** 2
    }

    getArea() {
        return this.#calculateArea()
    }
}

const circle = new Circle(5)
// console.log(circle.#radius)
// console.log(circle.#calculateArea())
// console.log(circle.getArea())

// age = 15             // публичное public       -> наследуется
// _age = 10            // защищенное protected   -> наследуется
// static age = 30      // статическое static     -> наследуется
// #age = 20            // приватное private      -> не наследуется

// Что выведется в консоль?
class Animals {
    _age = 10
}

// const cat = new Animals()
// console.log(cat._age)

class Lion extends Animals {
    getAge() {
        return this._age
    }
}

// const lion = new Lion()
// console.log(lion.getAge())

class Vehicle {
    static age = 30
}

class Car extends Vehicle {}

console.log(Car.age)

class Timer {
    #startTime

    startTimer() {
        this.#startTime = new Date()
    }

    getTimeElapsed() {
        const currentTime = new Date()
        const elapsedMilliseconds = currentTime - this.#startTime
        return Math.floor(elapsedMilliseconds / 1000)
    }
}

class SubTimer extends Timer {
}

// console.log(SubTimer.#startTime)

const timer = new Timer()
// timer.startTimer()
// console.log(timer.#startTime) // error
// console.log(timer.getTimeElapsed()) // some value



