
const sliderButtonLeft = document.getElementById('slider-button-left')
const sliderButtonRight = document.getElementById('slider-button-right')
const slides = document.querySelectorAll('.slide')
let currentSlideIndex = 0

sliderButtonLeft.disabled = true

// show slide from left

sliderButtonLeft.addEventListener('click', moveSlideRight)
sliderButtonLeft.addEventListener('click', delayPrevSlide)

function moveSlideRight() {
    slides[currentSlideIndex].style.right = '-900px'
    console.log('move slide right')
}

function delayPrevSlide() {
    setTimeout(showPrev, 200)
}
function showPrev() {
    sliderButtonRight.disabled = false
    slides[currentSlideIndex].style.right = '0px'
    slides[currentSlideIndex].classList.remove('moveLeft')
    slides[currentSlideIndex].classList.toggle('active')
    slides[currentSlideIndex].classList.remove('moveRight')
    currentSlideIndex--
    slides[currentSlideIndex].classList.toggle('moveRight')
    slides[currentSlideIndex].classList.toggle('active')
    if (currentSlideIndex === 0) {
        sliderButtonLeft.disabled = true
    }
    console.log('show prev slide')
}

// show slide from right

sliderButtonRight.addEventListener('click', moveSlideLeft)
sliderButtonRight.addEventListener('click', delayNextSlide)

function moveSlideLeft() {
    slides[currentSlideIndex].style.right = '900px'
    console.log('move slide left')
}    

function delayNextSlide() {
    setTimeout(showNext, 200)
}    
function showNext() {
    sliderButtonLeft.disabled = false
    slides[currentSlideIndex].style.right = '0px'
    slides[currentSlideIndex].classList.remove('moveRight')

    slides[currentSlideIndex].classList.toggle('active')
    slides[currentSlideIndex].classList.remove('moveLeft')
    currentSlideIndex++
    slides[currentSlideIndex].classList.toggle('moveLeft')
    slides[currentSlideIndex].classList.toggle('active')
    if (currentSlideIndex === (slides.length - 1)) {
        sliderButtonRight.disabled = true
    }
    console.log('show next slide')
}    

