function Slider() {
    this.imagesUrls = []
    this.currentImgIndex = 0
    this.showPrevBtn = null
    this.showNextBtn = null
    this.firstSliderImg = null

    this.initSlider = function(elId) {
        // find elements
        const el = document.querySelector('#' + elId)

        this.showPrevBtn = el.querySelector('.show-prev')
        this.showNextBtn = el.querySelector('.show-next')
        this.firstSliderImg = el.querySelector('.first-slider-img')

        // subscribe to events
        this.showPrevBtn.addEventListener('click', (e) => {
            this.onShowPrevClick(e)
        })

        this.showNextBtn.addEventListener('click', (e) => {
            this.onShowNextClick(e)
        })

        // create img array

        this.imagesUrls.push('first-slider/1.jpg', 'first-slider/2.jpg', 'first-slider/3.jpg', 'first-slider/4.jpg')

        this.firstSliderImg.src = this.imagesUrls[this.currentImgIndex]
        this.showPrevBtn.disabled = true
    }

    this.onShowPrevClick = function(e) {
        this.showNextBtn.disabled = false
        this.currentImgIndex--
        this.firstSliderImg.src = this.imagesUrls[this.currentImgIndex]
        // disabled prev btn if need
        if (this.currentImgIndex === 0) {
            this.showPrevBtn.disabled = true
        }
    }

    this.onShowNextClick = function(e) {
        this.showPrevBtn.disabled = false
        this.currentImgIndex++        
        this.firstSliderImg.src = this.imagesUrls[this.currentImgIndex]
        // disabled next btn if need
        if (this.currentImgIndex === (this.imagesUrls.length - 1)) {
            this.showNextBtn.disabled = true
        }
    }
}


