// calculator
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