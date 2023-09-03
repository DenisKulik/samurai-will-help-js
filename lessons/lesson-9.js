// ========================== Синхронный код ===================================

// console.log('Start')

// function fetchTodos() {
//     const start = Date.now()
//     while (Date.now() - start < 2000)
//     console.log('Todos was received from the server!')
// }

// fetchTodos()

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

// ============================ Promises =======================================

// Что выведется в консоль?
// console.log(1)
// const pr = new Promise((resolve, reject) => {
//     console.log(2)
//     resolve()
// })
// console.log(3)

// Что выведется в консоль?
// const promise2 = new Promise((resolve, reject) => {
//     resolve(1)
//     setTimeout(() => resolve(2), 1000)
// })
// promise2.then(console.log)

// Методы промиса
// then, catch, finally

// const fetchUserData = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         const success = true
//         if (success) {
//             resolve('Data uploaded successfully')
//         } else {
//             reject('Error loading data')
//         }
//     }, 1000)
// })

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

// Что выведется в консоль?
// console.log('start')
// const promise5 = new Promise((resolve, reject) => {
//     console.log(1)
// })
// promise5.then(res => {
//     console.log(2)
// })
// console.log('end')

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

// ========================== Promise chaining =================================

// Что выведется в консоль?
// const p = new Promise((resolve, reject) => {
//     reject(Error('fail!'))
// })
//     .catch(error => console.log(error.message))
//     .catch(error => console.log(error.message))

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

// ============================= Promise API ===================================

// Что выведется в консоль?
// Promise.reject("error")
//        .then(data => console.log('ok'))
//        .catch(error => {
//            console.log(error);
//            return "1";
//        })
//        .then(data => {
//            console.log(data);
//        })

// Что выведется в консоль?
// Promise.resolve()
//        .then(() => console.log(1))
//        .then(() => console.log(2))

// Promise.resolve()
//        .then(() => console.log(11))
//        .then(() => console.log(12))

// Что выведется в консоль?
// Promise
//     .reject('reject1')
//     .catch((t) => t + 'catch1')
//     .catch((t) => t + 'catch2')
//     .then((t) => t + 'then1')
//     .finally((t) => t + 'finally')
//     .then((t) => console.log(t))

// Что выведется в консоль?
// console.log('start')
// Promise.resolve(1).then((res) => {
//     console.log(res)
// })
// Promise.resolve(2).then((res) => {
//     console.log(res)
// })
// console.log('end')

// Выведите последовательно в консоль сначала start, а затем finish
// const namesPr = new Promise(() => {})
// namesPr.then().catch()