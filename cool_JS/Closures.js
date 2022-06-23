

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }

// const addOne = createIncrementor(1)
// const addTwo = createIncrementor(2)


// console.log(addOne(10))
// console.log(addOne(88))

// console.log(addTwo(10))
// console.log(addTwo(88))


// -----------------------------
// function urlGenerator(domain) {
//     return function (url) {
//         return `http://${url}.${domain}`
//     }
// }

// const comUrl = urlGenerator('com')
// const uaUrl = urlGenerator('ua')

// console.log(comUrl('google'))
// console.log(comUrl('netflix'))

// console.log(uaUrl('google'))
// console.log(uaUrl('wikipedia'))




// TASK ! ! !

/*
    Написать свою футнкцию bind
    Пример работы:

    function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, $(this.job)`)
    }

    const person1 = {name: 'Михаил', age: '22', job: 'Frontend'}
    const person2 = {name: 'Елена', age: '19', job: 'SMM'}

    bind(person1, logPerson)
    bind(person2, logPerson)
*/

function bind(person, fn) {
    return function (...args) {
        fn.apply(person, args)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
    }

    const person1 = {name: 'Михаил', age: '22', job: 'Frontend'}
    const person2 = {name: 'Елена', age: '19', job: 'SMM'}

    bind(person1, logPerson)()
    // bind(person2, logPerson)()