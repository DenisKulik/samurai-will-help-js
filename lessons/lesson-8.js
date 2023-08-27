// ============================ Classes ========================================

// ============================ ООП ============================================

// =============================================================================

// Что выведется в консоль?
// console.log(alex.__proto__ === Object.prototype)
// console.log(alex.__proto__.__proto__ === Object.prototype)
// console.log(alex.__proto__ === Person.prototype)
// console.log(Person.__proto__)

// Создайте класс ProductItem для представления товаров в интернет-магазине.
// Каждый товар должен иметь свойства price и quantity.
// Добавьте метод calculateTotal(), который будет возвращать общую стоимость товара.

// const phone = new ProductItem(500, 2)
// console.log('Total cost:', phone.calculateTotal()) // Total cost: 1000

// ============================== get/set ======================================

// Создайте класс Student, который будет представлять студента с именем и массивом оценок.
// Используйте геттер и сеттер для оценок так, чтобы сеттер проверял допустимые
// значения (от 1 до 10), и геттер вычислял средний балл

// const student = new Student('Alice')
// student.grades = [ 9, 8, 7, 9, 10 ]

// console.log('Оценки студента:', student.grades) // Оценки студента: [9, 8, 7, 9, 10]
// console.log('Средний балл:', student.averageGrade) // Средний балл: 8.6

// student.grades = [ 11, 8, 7 ] // Оценки должны быть в диапазоне от 1 до 10

// ========================== Свойства классов =================================
class PersonWithoutConstructor {
}

const person1 = new PersonWithoutConstructor()
person1.name = 'Alice'

const person2 = new PersonWithoutConstructor()
person2.name = 'Bob'

// Что выведется в консоль?
// person1.introduce()
// person2.introduce()

class PersonWithConstructor {
    name = 'Walter'

    constructor() {
        return `{ name: 'Jessie' }`
    }
}

const person3 = new PersonWithConstructor()
// console.log(person3)

// ========================== Наследование классов =============================
class Animal {
}

// Что выведется в консоль?
// console.log(Dog.prototype.__proto__ === Function.prototype)
// console.log(Dog.prototype.__proto__ === Animal.prototype)

// Переопределите метод makeSound, он должен выдавать Woof! Woof!
// myDog.makeSound()

// Переопределение конструктора

// Расширьте метод run методом makeSound родительского класса
// myDog.run() // Animal sound, Buddy running!

// Найти ошибку
// class Vehicle {
//     constructor(type) {
//         this.type = type;
//     }
//
//     startEngine() {
//         console.log(`${this.type} engine started.`);
//     }
// }

// class Car extends Vehicle {
//     constructor(type, brand) {
//         this.type = type;
//         this.brand = brand;
//     }

//     startEngine() {
//         super.startEngine();
//         console.log(`Brand: ${this.brand}`);
//     }
// }

// const car = new Car("Car", "Toyota");
// console.log(car.type)

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

// console.log(cakeRecipe.name)
// console.log(cakeRecipe.displayIngredients())

// Создайте класс Shape, который имеет свойства width и height.
// От него унаследуйте классы Rectangle (Прямоугольник) и Triangle (треугольник).
// Добавьте методы для вычисления площади для каждой фигуры.

// const rectangle = new Rectangle(5, 10);
// console.log("Rectangle Area:", rectangle.getArea()); // 50

// const triangle = new Triangle(4, 7);
// console.log("Triangle Area:", triangle.getArea()); // 14

// ===================== Статические свойства и методы =========================

// Создайте класс Counter, у которого будет статическое свойство count
// для подсчета количества созданных объектов этого класса.
// У каждого подкласса должен быть свой собственный счетчик,
// который увеличивается при создании нового объекта.

// const counter1 = new Counter()
// const counter2 = new Counter()
// console.log(Counter.getCount()) // 2

// const subCounter1 = new SubCounter()
// const subCounter2 = new SubCounter()

// console.log(SubCounter.getSubCount()) // 2
// console.log(Counter.getCount()) // 4

// =================== Приватные методы и свойства =============================

class Circle {
}

const circle = new Circle(5);
// console.log(circle.radius);
// console.log(circle.calculateArea());
// console.log(circle.getArea());

// Что выведется в консоль?
class Animals {
    _age = 10;
}

class Lion extends Animals {
    getAge() {
        return this._age;
    }
}

const lion = new Lion();
// console.log(lion.getAge())

class Vehicle {
    static age = 30;
}

class Car extends Vehicle {}

// console.log(Car.age)


class Timer {
    #startTime;

    startTimer() {
        this.#startTime = new Date();
    }

    getTimeElapsed() {
        const currentTime = new Date();
        const elapsedMilliseconds = currentTime - this.#startTime;
        return Math.floor(elapsedMilliseconds / 1000);
    }
}

// const timer = new Timer()
// timer.startTimer()
// console.log(timer.startTime)
// console.log(timer.getTimeElapsed())



