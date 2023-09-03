// ========================== Синхронный код ===================================
// выполняется построчно

// console.log('Start')
//
// function fetchTodos() {
//     const start = Date.now()
//     while (Date.now() - start < 2000) {}
//     console.log('Todos was received from the server!')
// }
//
// fetchTodos()
//
// console.log('End')

// ========================== Асинхронный код ==================================

// console.log('Start')

// function fetchTodos() {
//     setTimeout(function () {
//         console.log('Todos was received from the server!')
//     }, 2000)
// }
// fetchTodos()

// console.log('End')

// ========================== Callback hell ====================================
// Что такое callback?
// это функция, которая передается как аргумент в другую функцию

// function fetchTodos() {
//     setTimeout(function () {
//         console.log('Todos was received from the server!')
//
//         setTimeout(function () {
//             console.log('Tasks list were received from the server!')
//
//             setTimeout(function () {
//                 console.log('Tasks details received from the server!')
//             }, 1000)
//
//         }, 1000)
//
//     }, 1000)
// }

// ============================ Promises =======================================
// объект

const promise = new Promise((resolve, reject) => {
    // тело промиса синхронно
    resolve('Success')
    // reject('Error')
})

// console.log(promise)

// Что выведется в консоль?
// console.log(1)
// const pr = new Promise((resolve, reject) => {
//     console.log(2)
//     resolve()
// })
// console.log(3)
// 1 2 3

// Что выведется в консоль?
// const promise2 = new Promise((resolve, reject) => {
//     resolve(1)
//     setTimeout(() => resolve(2), 1000)
// })
// promise2.then((res) => console.log(res))
// 1

// Методы промиса
// then, catch, finally

// const fetchUserData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const success = false
//         if (success) {
//             resolve('Data uploaded successfully')
//         } else {
//             reject('Error loading data')
//         }
//     }, 1000)
// })

// fetchUserData
//     .then((res) => {
//             console.log(res)
//         },
//         // (err) => {
//         //     console.log(err)
//         // }
//     )

// fetchUserData
//     .catch((err) => {
//         console.log(err)
//     })

// finally - выполняется при любом исходе
// fetchUserData
//     .finally(() => {
//         console.log('Finish')
//     })

// Что выведется в консоль?
// console.log('start')
// const promise3 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })
// promise3.then(res => {
//     console.log(res)
// })
// console.log('end')

// start 1 end 2

// Что выведется в консоль?
// console.log('start')
// const promise4 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })
// promise4.then(res =>
//     console.log(res)
// )
// console.log('end')

// start 1 3 end 2

// Что выведется в консоль?
// console.log('start')
// const promise5 = new Promise((resolve, reject) => {
//     console.log(1)
// })
//
// promise5.then(res => {
//     console.log(2)
// })
// console.log('end')

// start 1 end

// Что выведется в консоль?
// console.log('start')
// const fn = () => (new Promise((resolve, reject) => {
//     console.log(1)
//     reject('error')
// }))
// console.log('middle')
// fn().catch(err => {
//     console.log(err)
// })
// console.log('end')

// start middle 1 end error

// ========================== Promise chaining =================================

const fetchUserData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true
        if (success) {
            resolve('Data uploaded successfully')
        } else {
            reject('Error loading data')
        }
    }, 1000)
})

// fetchUserData
//     .then((res) => new Promise((resolve, reject) => {
//         reject(2)
//     }))
//     // .then(() => 5)
//     .catch((err) => {
//        return 6
//     })
//     .catch((e) => console.error(e.message))
//     .then((res) => console.log(res))
//     .finally(() => console.log('finish'))

// Что выведется в консоль?
// const p = new Promise((resolve, reject) => {
//     reject(Error('fail!'))
// })
//     .catch(error => console.log(error.message))
//     .catch(error => console.log(error.message))

// fail!

// Что выведется в консоль?
// const prom = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Step 1')
//         reject('error')
//     }, 1000)
// })
// prom
//     .then(
//         (result) => {
//             console.log('Step 2:', result)
//             return 'Additional info'
//         },
//         (error) => {
//             console.log('Step 3:', error)
//             return 'Restored'
//         }
//     )
//     .then((info) => {
//         console.log('Step 4:', info)
//     })
//
// console.log('Step 5')

// Step 5 Step 1 Step 3:error Step 4:Restored

// Что выведется в консоль?
// const promise6 = new Promise((resolve, reject) => {
//     console.log('Step 1')
//     resolve('Success!')
// })
// promise6
//     .then((result) => {
//         console.log('Step 2:', result)
//         throw new Error('Error')
//     })
//     .catch((error) => {
//         console.log('Step 3:', error.message)
//         return 'Restored'
//     })
//     .then((info) => {
//         console.log('Step 4:', info)
//     })
// console.log('Step 5')
// Step 1 Step 5 Step 2:Success! Step 3: Error Step 4:Restored

// ============================= Promise API ===================================

// console.log(new Promise(() => {}))

// const resolvedPromise = Promise.resolve('Success!')
// resolvedPromise.then((result) => {
//     console.log(result)
// })
//
// const rejectedPromise = Promise.reject('Error!')
// rejectedPromise.catch((error) => {
//     console.error(error)
// })

// const all1 = Promise.resolve(1)
// const all2 = Promise.resolve(2)
// const all3 = Promise.resolve(3)

// Promise
//     .all([all1, all2, all3])
//     .then(res => {
//         console.log(res)
//     })
//
// Promise
//     .allSettled([all1, all2, all3])
//     .then(res => {
//         const success = res.filter((el) => el.status === 'fulfilled')
//         console.log(success)
//     })

// const race1 = new Promise((res, rej) => setTimeout(rej, 100, 'race 1'))
// const race2 = new Promise((res, rej) => setTimeout(res, 500, 'race 2'))

// Promise
//     .race([ race1, race2 ])
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((e) => {
//         console.log(e)
//     })

// Promise
//     .any([ race1, race2 ])
//     .then((res) => {
//         console.log(res)
//     })

// Что выведется в консоль?
// Promise
//     .reject('error')
//     .then(data => console.log('ok'))
//     .catch(error => {
//         console.log(error)
//         return '1'
//     })
//     .then(data => {
//         console.log(data)
//     })

// error 1

// Что выведется в консоль?
// Promise.resolve()
//        .then(() => console.log(1))
//        .then(() => console.log(2))
//
// Promise.resolve()
//        .then(() => console.log(11))
//        .then(() => console.log(12))

// 1 11 2 12

// Что выведется в консоль?
// Promise
//     .reject('reject1') // +
//     .catch((t) => t + 'catch1') // +
//     .catch((t) => t + 'catch2')
//     .then((t) => t + 'then1') // +
//     .finally((t) => {
//         console.log(t + 'finally')
//     })
//     .then((t) => console.log(t)) // +

// -
// undefinedfinally
// reject1catch1then1 // 2
// error

// Что выведется в консоль?
// console.log('start')
// Promise.resolve(1).then((res) => {
//     console.log(res)
// })
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
// console.log('end')

// start end 1 2

// Выведите последовательно в консоль сначала start, а затем finish
// const namesPr = new Promise((resolve, reject) => {
//     resolve('start')
// })
// namesPr
//     .then((res) => {
//         console.log(res)
//         return Promise.reject('finish')
//     })
//     .catch((err) => {
//         console.log(err)
//     })