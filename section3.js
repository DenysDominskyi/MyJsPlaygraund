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

// 3.2

const sectionThreeTwo = document.querySelector('.section3-2')
const circlesArray = Array.from(sectionThreeTwo.children)

for (let i = 0; i < circlesArray.length; i++){
    circlesArray[i].addEventListener('click', e => {
        const clickedCircle = e.target.closest('div')
        const circleIndex = circlesArray.findIndex(circle => circle === clickedCircle)
        console.log(circleIndex)
        circlesArray[circleIndex].classList.toggle('active')
        findActiveCircle()
    })
}

function findActiveCircle() {
    const activeCircle = document.querySelector('.circle.active')
    console.log(activeCircle)
}

