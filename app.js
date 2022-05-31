
    var firstName = 'firstName';
    // window.alert(firstName.value);

    var secondNameEl = 'secondName'
    // window.alert(secondNameEl.value)

    var countryId = 'country'
    // window.alert(countryId.value)

    var cityEl = 'city';
    // window.alert(cityEl.value);

    countryId.value = 'EN';

    cityEl.value = 'Berlin';


function theFirst(id) {
    const element = document.getElementById(id)
    return element
}

theFirst(firstName)
theFirst(firstName)
theFirst(secondNameEl)
theFirst(firstName)
theFirst(cityEl)
theFirst(cityEl)

// SECTION 2

function addErrorClass(id) {
    const element = document.getElementById(id)
    element.className = "error-class"
}

function setErrorClass() {
    addErrorClass('one')
    addErrorClass('two')
    addErrorClass('three')
}

// window.setTimeout(setErrorClass, 2000 )

var button = document.getElementById("button")

button.addEventListener('click', onButtonClick)

function onButtonClick() {
    addErrorClass('two')
}

// ====

function onFirstName() {
    addErrorClass('one')
}

var firstNameEl = document.getElementById('one')

firstNameEl.addEventListener('keyup', onFirstName)

// section 3

const circles = document.querySelectorAll('.circle')
let activeLight = 0

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
setInterval(changeLight, 2000) 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function changeLight() {
    circles[activeLight].className = 'circle red'
    activeLight++

    if (activeLight === 1) {
        circles[activeLight].className = 'circle yellow active-yellow'
    }
    if (activeLight === 2) {
        circles[1].className = 'circle yellow'
        circles[activeLight].className = 'circle green active-green'
    }
    
    if (activeLight > 2) {
        activeLight = 0
    }

    if (activeLight === 0) {
        circles[activeLight].className = 'circle red active-red'
        circles[2].className = 'circle green'
    }

}

// section 4
const inputOne = document.getElementById('numberOne')
const inputTwo = document.getElementById('numberTwo')


// const buttonPlus = document.getElementById('buttonPlus')
// const buttonMinus = document.getElementById('buttonMinus')
// const buttonMultiply = document.getElementById('buttonMultiply')
// const buttonDevide = document.getElementById('buttonDevide')
//  >>>>>>>>>>>>>>>>>
// const operationsButtons = [buttonPlus, buttonMinus, buttonMultiply, buttonDevide]
// >>>>>>>>>>>>>>>>>>
const operationsButtons = document.getElementsByClassName('operation-button')

function makeOperation(operationCode) {
    let number1 = Number(inputOne.value)
    let number2 = Number(inputTwo.value)
    
    if (operationCode === '+') {
        var result = number1 + number2;
    } else if (operationCode === '-') {
        var result = number1 - number2;
    } else if (operationCode === '*') {
        var result = number1 * number2;
    } else if (operationCode === '/') {
        var result = number1 / number2;
    }
    window.alert(result)
}

function operationButtonClick(eventObject) {
    var clickElement = eventObject.currentTarget
    var operation = clickElement.innerHTML
    makeOperation(operation)
}

for (let i = 0; i < operationsButtons.length; i++) {
    operationsButtons[i].addEventListener('click', operationButtonClick)
}


// section 5

sliderObject.initSlider()
