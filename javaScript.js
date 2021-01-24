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
function operate(a, operator, b){
    if (operator === '+') {
       add(a, b);
    } else if (operator === '-') {
       subtract(a, b);
    } else if (operator === 'x') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    }
    console.log(a, operator);
}

function getOperation(){
    if(calcInput.textContent === "0") return;
    a = calcInput.textContent;
    getOperator(operator);
    clearDisplay();
    calcInput.textContent = "0";
    console.log(a, operator);
}

function evaluate(){
    b = calcInput.textContent;
    operate(a, operator, b);
}

function getOperator(buttonContent){
    operator = buttonContent;
}

function display(number){
    if(calcInput.textContent === "0"){
        clearDisplay();
    };
    if(calcInput.textContent.length === 34){
        alert("Sorry, You've reached the limit of integers");
        return;
    } else {
        calcInput.textContent += number;
    };
};

function clearDisplay(){
    calcInput.textContent = "";

}

function resetScreen(){
    calcInput.textContent = 0;
    a = 0
    b = 0
    operator = "";
    console.log(a, operator, b);
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

result.addEventListener('click', evaluate);

allClear.addEventListener('click', resetScreen);

deleteBtn.addEventListener('click', removeLast);