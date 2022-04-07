const box = document.querySelector('.box')
const shadowLeftRigth = document.querySelector('.left-right')
const shadowUpDown = document.querySelector('.up-down')
const shadowTransparency = document.querySelector('.transparency')
const shadowSize = document.querySelector('.size')
const shadowColor = document.querySelector('.color')
const shadowOpasity = document.querySelector('.opasity')
const generator = document.querySelector('.generator')
const inset = document.querySelector('.inset')


shadowLeftRigth.addEventListener('input', shadowGenerator)
shadowUpDown.addEventListener('input', shadowGenerator)
shadowTransparency.addEventListener('input', shadowGenerator)
shadowSize.addEventListener('input', shadowGenerator)
shadowColor.addEventListener('input', shadowGenerator)
inset.addEventListener('input', shadowGenerator)

function shadowGenerator() {
    let insetValue = ''
    if (inset.checked) {
        insetValue = 'inset'
    }
    box.style.boxShadow = `${shadowLeftRigth.value}px ${shadowUpDown.value}px ${shadowTransparency.value}px ${shadowSize.value}px ${shadowColor.value} ${insetValue}`
    generator.textContent = `box-shadow: ${shadowLeftRigth.value}px ${shadowUpDown.value}px ${shadowTransparency.value}px ${shadowSize.value}px ${shadowColor.value};`
}

shadowGenerator()



