setInterval(() => {
    let hours = document.getElementById('hours')
    let minutes  = document.getElementById('minutes')
    let seconds  = document.getElementById('seconds')
    let ampm = document.getElementById('ampm')

    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let hrDot = document.querySelector('.hr-dot')
    let minDot = document.querySelector('.min-dot')
    let secDot = document.querySelector('.sec-dot')

    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let am = h >= 12 ? "PM" : "AM"

    // convert 24hr clock to 12hr clock
    if (h > 12) {
        h = h - 12
    }
    // add zero before single digit number
    h = (h < 10) ? '0' + h : h
    m = (m < 10) ? '0' + m : m
    s = (s < 10) ? '0' + s : s


    hours.innerHTML = h + '<br><span>Hours</span>'
    minutes.innerHTML = m + '<br><span>Minutes</span>'
    seconds.innerHTML = s + '<br><span>Seconds</span>'
    ampm.innerHTML = am

    //12 hrs clock
    hh.style.strokeDashoffset = 315 - (315 * h) / 12
    // 60 minutes
    mm.style.strokeDashoffset = 315 - (315 * m) / 60
    // 60 seconds
    ss.style.strokeDashoffset = 315 - (315 * s) / 60

    // 360 / 12 = 30
    hrDot.style.transform = `rotate(${h * 30}deg)`

    // 360 / 60 = 6
    minDot.style.transform = `rotate(${m * 6}deg)`

    // 360 / 60 = 6
    secDot.style.transform = `rotate(${s * 6}deg)`
})

