const display = document.getElementById('display')

// //This section of code declares buttons and sets up event listeners for button click

// const num1 = document.getElementById('num1')
// console.log(num1)

const container = document.querySelector('.calculator')

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



// num1.addEventListener('click', function (event) {
//     console.log(event.target.innerText)//Question - why is the console.log important to how this event function runs?
//     console.log('button clicked')
//     display.innerText += event.target.innerText






// const equals = document.getElementById('equals')

// display.addEventListener('input', function(event){
//     console.log(event.target.innerText)
//     Selection.toString(display.innerText)
// })




// equals.addEventListener('click', function(event){
//     console.log(event.target.innerText)
//     Selection.toString(display.innerText)
// })



// equals.addEventListener('click', function(event){
//     for 
// })

// const clear = document.getElementById('clear')

// clear.addEventListener('click', function(event){
//     console.log(event.target.innerText)
//     console.log('button clicked')
//     display.innerText += event.target.innerText
// })