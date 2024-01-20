let square_size = window.innerWidth / 100
let current_color = '#FF0000'
let square_html = `<div class="square" style="width: ${square_size}px; height: ${square_size}px"></div>`
let container = document.querySelector('.container')

let result_html = ''
let colors = ['#FF0000', '#00FF00', '#0000FF', '#E3913F', '#65668E', '#D78A76', '#3E3332', '#A5C9DC', '#8EDCCf', '#5B5117']

for (let i = 0; i < Math.ceil(window.innerHeight / square_size) * 100; i+=1) {
    if (i == 0) {
        result_html += `<div class="clear" style="width: ${square_size}px; height: ${square_size}px;"><i class="fa-solid fa-rotate-left"></i></div>`
    } else if (0 < i && i < 11) {
        result_html += `<div class="palette" style="width: ${square_size}px; height: ${square_size}px; background: ${colors[i - 1]}"></div>`        
    } else {
        result_html += square_html
    }
}

container.innerHTML = result_html

let squares = document.querySelectorAll('.square')
let palettes = document.querySelectorAll('.palette')
let clear_btn = document.querySelector('.clear')

let isPressed = false

for (let i = 0; i < squares.length; i+=1) {
    squares[i].addEventListener('mouseenter', function() {
        if (isPressed) {
            anime({
                targets: squares[i],
                background: current_color,
                duration: 600,
                easing: 'linear'
            })
        }
    })
}

for (let i = 0; i < palettes.length; i+=1) {
    palettes[i].addEventListener('click', function() {
        current_color = palettes[i].style.background
    })
}

document.addEventListener('mousedown', function(e) {
    e.preventDefault()
    isPressed = true
})

document.addEventListener('mouseup', function() {
    isPressed = false
})


clear_btn.addEventListener('click', function() {
    for (let i = 0; i < squares.length; i+=1) {
        squares[i].style.background = 'black'
    }
})