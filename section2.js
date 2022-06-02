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