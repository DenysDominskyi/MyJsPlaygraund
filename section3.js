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