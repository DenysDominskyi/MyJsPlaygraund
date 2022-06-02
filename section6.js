function Dog(name) {
    this.dogName = name
    this.voice = () => console.log('My name is ' + this.dogName)
}

let dog1 = new Dog('Altai')
let dog2 = new Dog('Sirko')

dog2.voice()
dog1.voice()

// Object car
function Car(name) {
    this.name = name
    this.isTurnOn = false
    this.speed = 0
    this.engine = {
        v: 2.7,
        horsePower: 300,
        isTurnOn:false
    }
}

Car.prototype.start = function () {
        this.isTurnOn = true
        this.speed = 80
        this.engine.isTurnOn = true
        console.log(this.name, " ", this.speed)
}

let reno = new Car('reno')
console.log(reno.engine.isTurnOn)
reno.start()
let mers = new Car('mers')
console.log(mers.engine.isTurnOn)
reno.start()