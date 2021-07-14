const display = document.getElementById('display')

//This section of code declares buttons and sets up event listeners for button click

const num1 = document.getElementById('num1')
console.log(num1)

num1.addEventListener('click', function (event) {
    console.log(event.target.innerText)//Question - why is the console.log important to how this event function runs?
    console.log('button clicked')
    display.innerText += event.target.innerText
})
// Question - is there a way to write this as a function so we don't have to copy/paste numerous times?
/* Something like: 
variable.addEventListener 
*/

const num2 = document.getElementById('num2')

num2.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num3 = document.getElementById('num3')

num3.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num4 = document.getElementById('num4')

num4.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num5 = document.getElementById('num5')

num5.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num6 = document.getElementById('num6')

num6.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num7 = document.getElementById('num7')

num7.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num8 = document.getElementById('num8')

num8.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num9 = document.getElementById('num9')

num9.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const num0 = document.getElementById('num0')

num0.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const add = document.getElementById('add')

add.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const minus = document.getElementById('minus')

minus.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const multiply = document.getElementById('multiply')

multiply.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const divide = document.getElementById('divide')

divide.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const decimal = document.getElementById('decimal')

decimal.addEventListener('click', function(event){
    console.log(event.target.innerText)
    console.log('button clicked')
    display.innerText += event.target.innerText
})

const equals = document.getElementById('equals')

equals.addEventListener('click', function(event){
    for 
})

// const clear = document.getElementById('clear')

// clear.addEventListener('click', function(event){
//     console.log(event.target.innerText)
//     console.log('button clicked')
//     display.innerText += event.target.innerText
// })