let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let circles = document.querySelectorAll('.step')
let befor = document.querySelector('.progress')
circles = Array.from(circles)
let active = 1

next.addEventListener('click', e => {
    circles[active].style.transitionDelay = '.4s'
    active++
    prev.disabled = false
    if (active > circles.length) {
        active = circles.length
    }
    circles[active - 1].classList.add('active')
    console.log(active)
    update();
})


prev.addEventListener('click', e => {
    active--
    circles[active].style.transitionDelay = '0s'

    if (active <= 1) {
        active = 1
        prev.disabled = true
    }
    circles[active].classList.remove('active')

    update();
})


function update() {
    let activeCircle = document.querySelectorAll('.active')
    befor.style.width = (activeCircle.length - 1) / (circles.length - 1) * 100 + '%'

};



