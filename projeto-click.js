var slider = document.querySelectorAll('.slider') // Corrigido
var b1 = document.querySelector('.um')
var b2 = document.querySelector('.dois')
var b3 = document.querySelector('.tres')
let Current = 0

function hideSlider() {
    slider.forEach(item => item.classList.remove('ativo-slider'))
}

function showSlider() {
    slider[Current].classList.add('ativo-slider')
}

slider[0].classList.add('ativo-slider')

b1.addEventListener("click", () => {
    Current = 0
    hideSlider()
    showSlider()
    console.log('Slide 1 ativo')
})

b2.addEventListener("click", () => {
    Current = 1
    hideSlider()
    showSlider()
    console.log('Slide 2 ativo')
})

b3.addEventListener("click", () => {
    Current = 2
    hideSlider()
    showSlider()
    console.log('Slide 3 ativo')
})