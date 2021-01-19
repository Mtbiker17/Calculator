const calcInput = document.querySelector('#calcInput');
const calcResult = document.querySelector('#calcResult');
const deleteBtn = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operators]')
const clearButton = document.querySelector('[data-allClear]');
let firstOperand = '';
let secondOperand = '';

function add (a, b){
    let answer = a + b;
    console.log(answer);
}

function subtract(a, b){
    let answer = a - b;
    console.log(answer);
}

function multiply(a, b){
    let answer = a * b;
    console.log(answer);
}

function divide(a, b){
    let answer = a / b;
    console.log(answer);
}

//operate calculator based on entered operand
function operate(operator, a, b){
    if (operator === '+') {
       add(a, b);
    } else if (operator === '-') {
       subtract(a, b);
    } else if (operator === '*') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    }
}

function display(number){
    if(calcInput.textContent === "0"){
        clearDisplay();
    }
    if(calcInput.textContent.length === 34){
        alert("Sorry, You've reached the limit of integers");
        return;
    } 
    calcInput.textContent += number;
    console.log(calcInput.textContent);
}

function clearDisplay(){
    calcInput.textContent = "";
}

function resetScreen(){
    calcInput.textContent = 0;
    calcResult.textContent = 0;
}

function removeLast() {
    calcInput.textContent = calcInput.textContent.toString().slice(0, -1);
    console.log(calcInput.textContent);
}

//event listeners

numberButtons.forEach((button) => 
button.addEventListener('click', () => display(button.textContent))
);

operatorButtons.forEach((button) => 
button.addEventListener('click', () => display(button.textContent))
);

clearButton.addEventListener('click', resetScreen);

deleteBtn.addEventListener('click', removeLast);