// /////////////////////////////////////
// Proxy Theory
// /////////////////////////////////////

//  new Proxy (наш таргет, список хендлерів)

// Object
const person = {
    name: 'Botis',
    age: 30,
    job: 'manager'
}

const objectProxy = new Proxy(person, {
    get(target, prop) {
        console.log(`Getting prop ${prop}`)
        if (!(prop in target)) {
            return prop.split('_')
                .map(p => target[p])
                .join('_')
        }
        return target[prop]
    },
    set(target, prop, value) {
        if (prop in target) {
            target[prop] = value
        } else {
            throw new Error(`No ${prop} field in target`)
        }
    },
    has(terget, prop) {
        return ['age', 'name', 'job'].includes(prop)
    },
    deleteProperty(target, prop) {
        console.log('Deleting...', prop)
        delete target[prop]
        return true
    }
})

// Functions
const log = text => `Log: ${text}`

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('Calling fn...')

        return target.apply(thisArg, args).toUpperCase()
    }
})

// Classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const PersonProxy = new Proxy(Person, {
    construct(target, args) {
        console.log('Construct...')

        return new Proxy(new target(...args), {
            get(t, prop) {
                console.log(`Getting prop ${prop}`)
                return t[prop]
            }
        })
    }
})

const p = new PersonProxy('Vagen', 30)

// /////////////////////////////////////
// Proxy Examples
// /////////////////////////////////////

// wrapper
const withDefaultValue = (target, defaultValue = 0) => {
    return new Proxy(target, {
        get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue)
    })
}

const position = withDefaultValue({
        x: 24,
        y: 42,
    },
    0
)

// hidden properties
const withHiddenProps = (target, prefix = '_') => {
    return new Proxy(target, {
        has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
        ownKeys: obj => Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
        get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0)
    })
}

const datata = withHiddenProps({
    name: 'Gala',
    age: 18,
    _uid: 705134,
})

// Optimization

const IndexedArray = new Proxy(Array, {
    construct(target, [args]) {
        const index = {}
        args.forEach(item => index[item.id] = item)

        return new Proxy (new target(...args), {
            get(arr, prop) {
                switch (prop) {
                    case 'push': return item => {
                        index[item.id] = item
                        arr[prop].call(arr, item)
                    }
                    case 'findById': return id => index[id]
                    default: return arr[prop]
                }
            }
        })
    }
})

const users = new IndexedArray([
    {id: 1, name:'Micha', job: 'Leitenant Jn.', age: 19,},
    {id: 2, name:'Jora', job: 'Capitan', age: 28,},
    {id: 3, name:'Petya', job: 'Major', age: 36,},
    {id: 4, name:'Pupkin', job: 'General', age: 52,},
])
