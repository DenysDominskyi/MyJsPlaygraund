function Dog(name) {
    this.dogName = name
    this.voice = () => console.log('My name is ' + this.dogName)
}

let dog1 = new Dog('Altai')
let dog2 = new Dog('Sirko')

dog2.voice()
dog1.voice()