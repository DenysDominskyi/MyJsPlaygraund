const person = Object.create(
    {
        calculateAge() {
            console.log('Age:', this.deathYear - this.birthYear)
        }
    },
    {
    name: {
        value: 'Bogdan Hmelnitskiy',
        enumerable: true, //щоб поле було видно
        writable: true, //щоб поле можна було змінювати
        configurable: true  //щоб поле можна було видаляти
    },
    birthYear: {
        value: 1596,
        enumerable: false, //за замовчуванням
        writable: false, //за замовчуванням
        configurable: false //за замовчуванням
        
    },
    deathYear: {
        value: 1657,
        enumerable: false, //за замовчуванням
        writable: false, //за замовчуванням
        configurable: false //за замовчуванням
    },
    age: {
        get() {
            // return this.deathYear - this.birthYear
            return new Date().getFullYear() - this.birthYear
        },
        set(value) {
            document.body.style.background = 'hsl(205, 22%, 20%)'
            console.log('Set age', value)
            
      }
    }
})

// person.name = 'Petro Doroshenko'

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('Key', key, person[key])
    }
}

