const mainDocument = document.querySelector('body')
mainDocument.style.background = 'rgb(63, 68, 67)'

let homeSection = document.createElement('section')

// innerHTML
// outherHTML
// textContent

homeSection.innerHTML = `<div>New <span class="color">DOM</span> webpage</div>`
console.log(homeSection)

// insert a new element

// --before object--
// mainDocument.before(home)

// --after object--
// mainDocument.after(home)

// --at the begin in object--
// mainDocument.prepend(home)

// --at the end in object--
// mainDocument.append(home)

mainDocument.prepend(homeSection)

const firstDiv = homeSection.querySelector('div')
const secondDiv = document.createElement('div')

const unorderList1 = document.createElement('ul')
const unorderList1li = document.createElement('li')
const unorderList1liClone = unorderList1li.cloneNode(true)


homeSection.append(unorderList1)
unorderList1.prepend(unorderList1li)
unorderList1.append(unorderList1liClone)

homeSection.append(secondDiv)

unorderList1li.innerHTML = '<span>JUST DO IT !</span>'
unorderList1liClone.innerHTML = '<span>NEVER GIVE UP !</span>'
// textContent

secondDiv.insertAdjacentHTML(
    'afterbegin',
    `<h1>Lets <span class="color">GO </span>!</h1>`
)

// --insertAdjacentHTML--
// beforebegin
// afterbegin
// beforeend
// afterend

secondDiv.append(unorderList1)


console.log(firstDiv.nextElementSibling)

console.log(secondDiv.previousElementSibling)

secondDiv.className = 'center'
unorderList1.className = 'ul-list'

firstDiv.classList.add('main__header')

unorderList1li.style.color = 'rgb(32, 214, 153)'
unorderList1liClone.style.color = 'rgb(32, 214, 153)'

const crossLine = document.createElement('div')
crossLine.classList.add('cross-line')
homeSection.append(crossLine)
crossLine.style.cssText = `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    background: rgb(32, 214, 153);
    color: black;
`
crossLine.insertAdjacentHTML(
    'afterbegin',
    `<a>Create your own legend</a>`
)

const byTagName = document.querySelector('[data-say-hi]')
console.log(byTagName.dataset.sayHi)

const allLi = unorderList1.querySelectorAll('li')
console.log(allLi)

for (const ili of allLi) {
    if (ili.innerText === 'JUST DO IT !') {
        console.log(ili)
    }
}