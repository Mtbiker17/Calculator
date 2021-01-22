let calcInput = document.querySelector('#calcInput');
const deleteBtn = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operators]')
const allClear = document.querySelector('[data-allClear]');
const result = document.querySelector('[data-result]');
const buttons = document.querySelectorAll('button');

function add (a, b){
    calcInput.textContent = +a + +b;
}
function subtract(a, b){
    calcInput.textContent = a - b;
}
function multiply(a, b){
    calcInput.textContent = a * b;
}
function divide(a, b){
    calcInput.textContent = a / b;
}

//operate calculator based on entered operand
function operate(operator, a, b){
    if (operator === '+') {
       add(a, b);
    } else if (operator === '-') {
       subtract(a, b);
    } else if (operator === 'x') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    }
    console.log(operator, a, b);
}

function getOperation(){
    if(calcInput.textContent === "0") return;
    getOperator(operator);
    let a = calcInput.textContent;
    let b = 2;
    operate(operator, a, b);
}

function getOperator(operatorValue){
    operator = operatorValue;
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
}

function clearDisplay(){
    calcInput.textContent = "";
}

function resetScreen(){
    calcInput.textContent = 0;
}

function removeLast() {
    calcInput.textContent = calcInput.textContent.toString().slice(0, -1);
        if(calcInput.textContent === ""){
            calcInput.textContent = 0;
        }
}

//event listeners
numberButtons.forEach((button) => 
button.addEventListener('click', () => display(button.textContent))
);

operatorButtons.forEach((button) => 
button.addEventListener('click', () => getOperator(button.textContent))
);

operatorButtons.forEach((button) =>
button.addEventListener('click', getOperation));

allClear.addEventListener('click', resetScreen);

deleteBtn.addEventListener('click', removeLast);