// class Animal {
//     static type = "ANIMAL"

//     constructor(options) {
//         this.name =  options.name
//         this.age =  options.age
//         this.hasTail =  options.hasTail
//     }

//     voice() {
//         console.log('I am animal')
//     }
// }

// // const animal = new Animal({
// //     name: 'Animal',
// //     age: 5,
// //     hasTail: true,
// // })

// class Cat extends Animal {
//     static type = "CAT"

//     constructor(options) {
//         super(options)
//         this.color = options.color
//     }

//     voise() {
//         super.voice()
//         console.log('I am cat')
//     }

//     get ageInfo() {
//         return this.age * 7
//     }

//     set ageInfo(newAge) {
//         this.age = newAge
//     }
// }

// const cat = new Cat({
//     name: 'Cat',
//     age: 7,
//     hasTail: true,
//     color: 'black'
// })


// -----Example-----

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

function tellSomethink(text, selector) {
    const element = document.querySelector(selector)
    element.style.position = 'relative'
    const newText = document.createElement('div')
    newText.style.position = 'absolute'
    newText.style.left = '100%'
    newText.style.width = '100%'
    newText.style.background = 'hsl(213, 38%, 41%, 0.3)'
    newText.style.borderRadius = '10px'
    newText.style.marginLeft = '20px'
    newText.style.padding = '10px'
    newText.style.cursor = 'default'
    newText.innerHTML = `Hello, I am ${text}`
    element.append(newText)
    console.log(element)
    setTimeout(deleteText, 2500)
    function deleteText() {
        newText.remove()
    }
}

class Box extends Component{
    constructor(options) {
        super(options.selector)
        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
        this.$el.style.margin = options.margin
        this.$el.style.cursor = options.cursor
        this.selector = options.selector
        this.color = options.color
        this.text = this.color + options.text
        this.$el.addEventListener('click', () => tellSomethink(this.text, this.selector))
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    margin: `10px`,
    cursor: `pointer`,
    color: 'red',
    text: ` square`,
})

const box2 = new Box({
    selector: '#box2',
    size: 120,
    margin: `10px`,
    cursor: `pointer`,
    color: 'blue',
    text: ` square`,
})

class Circle extends Box{
    constructor(options) {
        super(options)
        this.$el.style.borderRadius = '50%'
    }
    
    larger() {
        this.$el.style.width = '140px'
        this.$el.style.height = '140px'
    }
}

const circle1 = new Circle({
    selector: '#circle1',
    size: 100,
    margin: `10px`,
    cursor: `pointer`,
    color: 'green',
    text: ` circle`,
})

const circle2 = new Circle({
    selector: '#circle2',
    size: 80,
    margin: `10px`,
    cursor: `pointer`,
    color: 'purple',
    text: ` circle`,
})