
// THIS, PROTOTYPE_____________________________________________START

function pushUp() {
    console.log('push', this)
}

const person = {
    name: 'Denis',
    age: 28,
    makePushUp: pushUp,
    makePushUpWindow: pushUp.bind(document),
    logInfo: function (job, phone) {
        console.group(`${this.name} more:`)
            console.log(`Name is ${this.name}`)
            console.log(`Age is ${this.age}`)
            console.log(`Job is ${job}`)
            console.log(`Job is ${phone}`)
        console.groupEnd()
    }
}

const katya = {
    name: 'Kateryna',
    age: 23,
}


// person.logInfo.bind(katya, 'Frontend', '8-800-800-8080')()
// person.logInfo.call(katya, 'Frontend', '8-800-800-8080')
// person.logInfo.apply(katya, ['Frontend', '8-800-800-8080'])


///===========

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const ararayray = [4, 23, 76, 12, 5]

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

Array.prototype.multBy = function (n) {
    return this.map((i) => {
        return i * n
    })
}

Array.prototype.sayHello = (name) => {
    console.log(`Hello ${name}. You know JS very good`)
}

console.log(ararayray.multBy(8))

console.log(ararayray.sayHello('Denis'))

// THIS, PROTOTYPE_____________________________________________END
