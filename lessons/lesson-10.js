// ============================ try/catch ======================================
// try {
//     throw new Error('I\'m custom error')
// } catch (e) {
//     console.error(e.message)
// } finally {
//     console.log('ok')
// }

// ============================ async/await ====================================

async function getPosts() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
        })
        return res.json()
    } catch (e) {
        console.error(e.message)
    }
}

// console.log(getPosts().then(res => console.log(res)))

// переписать на async/await
// let isLoading = false
// const getTodosPr = () => {
//     isLoading = true
//     fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then((result) => {
//             console.log('result', result)
//         })
//         .catch((error) => {
//             console.log('error', error)
//         })
//         .finally(() => {
//             isLoading = false
//         })
// }

let isLoading = false
const getTodosA = async () => {
    try {
        isLoading = true
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/todos/1')
        const res = await response.json()
        return res
    } catch (e) {
        console.error(e.message)
    } finally {
        isLoading = false
    }
}

// console.log(getTodosA())

//============================== call stack ================================

// const multiply = (x, y) => x * y
//
// const res1 = multiply(2, 3)
// const res2 = multiply(4, 5)
// const res3 = multiply(6, 7)

const greet = (name) => {
    console.log(`Hello, ${name}!`)
}

const sayHello = () => {
    const myName = 'Alice'
    greet(myName)
    console.log('How are you?')
}

// Что выведется в консоль?
// sayHello()
// Hello Alice How are you?

// блокирующий код

// ============================ event loop =====================================
// Работа с асинхронным кодом

// это бесконечный цикл, который ожидает задачи в очереди,
// распределяет их и снова ожидает поступление новых задач

// const logMessage = (value) => {
//     console.log(value)
// }
//
// logMessage('Start!')
//
// setTimeout(() => {
//     logMessage('I\'m Timeout!')
// }, 0)
//
// Promise.resolve('I\'m Promise!').then((res) => {
//     logMessage(res)
//
//     setTimeout(() => {
//         console.log('I\'m Timeout 2!')
//     }, 0)
// })

// logMessage('End!')

// Start! End! I'm Promise! I'm Timeout 2! I'm Timeout!

// ============================= task queue ====================================
// Microtask - promises, queueMicrotask, mutationObserver - наиболее приоритетные
// Macrotask - timers, events, render...


// - все синхронные задачи ---> все микротаски ---> одна макротаска --->
// если появляются микротаски, то выполняются они ---> вторая макротаска...

// Что выведется в консоль?
// =============================================================================
// console.log(1)
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(2)
// })
//
// console.log(3)

// 1 2 3
// =============================================================================
// const log = (value) => {
//     console.log(value)
// }
//
// const one = () => Promise.resolve(1)
//
// const myFunc = async () => {
//     log(2)
//     const res = await one()
//     log(res)
// }
//
// log(3)
// myFunc()
// log(4)

// 3 2 4 1

// =============================================================================
// console.log(1)
//
// const promise2 = new Promise((resolve, reject) => {
//     console.log(2)
//     resolve(3)
// })
//
// promise2.then(res => {
//     console.log(res)
// })
//
// console.log(4)

// 1 2 4 3

// =============================================================================
// console.log(1)
//
// const promise1 = new Promise((resolve, reject) => {
//     console.log(2)
// })
//
// promise1.then(res => {
//     console.log(3)
// })
//
// console.log(4)

// 1 2 4

// =============================================================================
// console.log(1)
//
// const promise3 = new Promise((resolve, reject) => {
//     console.log(2)
//     resolve(3)
//     console.log(4)
// })
//
// promise3.then(res => {
//     console.log(res)
// })
//
// console.log(5)

// 1 2 4 5 3

// =============================================================================
// console.log(1)
//
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
//
// Promise.resolve(3).then((res) => {
//     console.log(res)
// })
//
// console.log(4)

// 1 4 2 3

// =============================================================================
// console.log(1)
//
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(2)
//     resolve(3)
// }))
//
// console.log(4)
//
// fn().then(res => {
//     console.log(res)
// })
//
// console.log(5)

// 1 4 2 5 3

// =============================================================================

// console.log(1)
//
// setTimeout(() => {
//     console.log(2)
// })
//
// Promise.resolve()
//     .then(() => {
//     console.log(3)
// })
//
// console.log(4)

// 1 4 3 2

// =============================================================================

// const promise4 = new Promise((resolve, reject) => {
//     console.log(1)
//     setTimeout(() => {
//         console.log(2)
//         resolve(3)
//         console.log(4)
//     }, 0)
//     console.log(5)
// })
//
// promise4.then((res) => {
//     console.log(res)
// })
//
// console.log(6)

// 1 5 6 2 4 3

// =============================================================================
// const timer1 = setTimeout(() => {
//     console.log(1)
//
//     const promise5 = Promise.resolve().then(() => {
//         console.log(2)
//     })
// }, 0)
//
// const timer2 = setTimeout(() => {
//     console.log(3)
// }, 0)

// 1 2 3

// =============================================================================
// console.log(1)
//
// const promise6 = Promise.resolve().then(() => {
//     console.log(2)
//
//     const timer2 = setTimeout(() => {
//         console.log(3)
//     }, 0)
// })
//
// const timer1 = setTimeout(() => {
//     console.log(4)
//
//     const promise7 = Promise.resolve().then(() => {
//         console.log(5)
//     })
// }, 0)
//
// console.log(6)

// 1 6 2 4 5 3

// =============================================================================
// console.log(1)
//
// setTimeout(() => console.log(2))
//
// Promise.resolve().then(() => console.log(3))
//
// Promise.resolve().then(() => setTimeout(() => console.log(4)))
//
// Promise.resolve().then(() => console.log(5))
//
// setTimeout(() => console.log(6))
//
// console.log(7)

// 1 7 3 5 2 6 4

// =============================================================================
// console.log(1)
//
// setTimeout(() => console.log(2))
//
// Promise.reject(3).catch(console.log)
//
// const pr = new Promise(resolve => setTimeout(resolve))
//
// Promise.resolve(5).then(console.log)
//
// console.log(6)
//
// setTimeout(() => console.log(7), 0)
//
// pr.then(() => console.log(4))

// 1 6 3 5 2 4 7

// =============================================================================
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0)
//
// Promise
//     .resolve()
//     .then(() => {
//         console.log(3)
//     })
//     .then(() => {
//         console.log(4)
//     })
//
// console.log(5)

// 1 5 3 4 2

// =============================================================================
// console.log(1)
//
// setTimeout(() => console.log(2), 1000)
//
// console.log(3)
//
// new Promise((res) => res(4)).then((data) => console.log(data))
//
// setTimeout(() => console.log(5), 2000)
//
// Promise.resolve(6).then((data) => console.log(data))
//
// new Promise((res) => setTimeout(() => res(7), 3000)).then((data) =>
//     console.log(data)
// )

// 1 3 4 6 2 5 7

// =============================================================================
// new Promise((res) => res(1)).then((data) => console.log(data))
//
// setTimeout(() => console.log(2), 2000)
//
// Promise.resolve(3).then((data) => console.log(data))
//
// console.log(4)
//
// new Promise((res) => setTimeout(() => res(7), 2000)).then((data) =>
//     console.log(data)
// )
//
// for (let i = 0; i < 2; i++) {
//     console.log(i)
// }

// 4 0 1 1 3 2 7

