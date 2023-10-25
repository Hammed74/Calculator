const plus = document.querySelector(".plus");
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equals");
const numberButtons = document.querySelectorAll(".button");
const screenLast = document.querySelector(".screen-last")
const screenCurrent = document.querySelector(".screen-current");
const operatorButtons = document.querySelectorAll(".operator");

let firstOperand = ""
let secondOperand = ""
let currentOperation = null
let shouldResetScreen = false

equal.addEventListener("click", evaluate)
clear.addEventListener("click", clearScreen)

numberButtons.forEach(button => {
    button.addEventListener("click", () => appendNumber(button.textContent))
})

operatorButtons.forEach(button => {
    button.addEventListener("click", () => setOperation(button.textContent))
})

function appendNumber(number){
    if(shouldResetScreen === true){
        resetScreen()
    }
    screenCurrent.textContent += number
    shouldResetScreen = false
}

function setOperation(operator){
    if (currentOperation !== null){
        evaluate()
    }
    firstOperand = screenCurrent.textContent
    currentOperation = operator
    screenLast.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate(){
    secondOperand = screenCurrent.textContent
    screenLast.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    screenCurrent.textContent = operate(currentOperation, firstOperand, secondOperand)
    currentOperation = null

}

function clearScreen(){
    screenCurrent.textContent = ""
    screenLast.textContent = ""
    firstOperand = ""
    secondOperand = ""
    currentOperation = null
}

function resetScreen(){
    screenCurrent.textContent = ""
}

function add(a,b){
    return a + b
}

function multiply(a,b){
    return a *b
}

function subtract(a,b){
    return a - b
}

function divide(a,b){
    return a/b
}

function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case "+":
            return add(a,b);
        case "x":
            return multiply(a,b);
        case "-":
            return subtract(a,b);
        case "÷":
            return divide(a,b);
    }
}