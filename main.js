const container = document.querySelector('.calculator')
const display = document.getElementById('display')

// const num1 = document.getElementById('num1')
// console.log(num1)

container.addEventListener('click', function(event){
    console.log(event.target.innerText)
    display.innerText += event.target.innerText
})

function clearDisplay(){
    display.innerText = ''
}

document.querySelector(".clear").addEventListener('click', function(){
    console.log('CLEAR!')
    clearDisplay()
})

const equate = document.querySelector('.equals')

equate.addEventListener('click', function(event){
    let equation = display.innerText
    try {
        console.log(eval(equation))
        display.innerText = eval(equation)
    } catch (SyntaxError) {
        display.innerText = 'Error'
    }
})

