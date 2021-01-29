let calcInput = document.querySelector('#calcInput');
const deleteBtn = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operators]')
const allClearButton = document.querySelector('[data-allClear]');
const equalsButton = document.querySelector('[data-result]');
const exponentBtn = document.querySelector('[data-exponent]');
const decimalBtn = document.querySelector('[data-decimal]');
let a = "";
let b = "";
let operator = "";

function add(a, b) {
    answer = +(+b + +a).toFixed(10);
    calcResult.textContent = answer;
};

function subtract(a, b) {
    answer = +(b - a).toFixed(10);
    calcResult.textContent = answer;
};

function multiply(a, b) {
    answer = +(b * a).toFixed(10);
    calcResult.textContent = answer;
};

function divide(a, b) {
    answer = +(b / a).toFixed(10);
    calcResult.textContent = answer;
};

function power(base, a) {
    answer = +Math.pow(base, a).toFixed(10);
    calcResult.textContent = answer;
};

function operate(a, operator, b) {
    if (a === "0" && operator === '/') {
        alert("You can't divide by zero");
        resetAll();
    } else if (operator === '+') {
       add(a, b);
    } else if (operator === '-') {
       subtract(a, b);
    } else if (operator === 'x') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    } else if (operator === 'pow'){
        power(base, a);
    }
    console.log(b, operator, a);
};
function getFirstOperand() {
    a = calcInput.textContent;
    console.log(`a = ${a}`);
};

function checkEval() {
    if (operator == "") {
       a = calcInput.textContent;
       calcResult.textContent = a;
    } else {
       a = calcInput.textContent;
       b = calcResult.textContent;
       operate(a, operator, b);
   }
};

function getOperator(buttonContent) {
    checkEval();
    operator = buttonContent;
    resetInput();
    console.log(`operator = ${operator}`);
};

function evaluate(){
    if(operator === "pow"){
        a = calcInput.textContent;
        operate(a, operator, base);
    } else {
      a = calcInput.textContent;
      b = calcResult.textContent;
      operate(a, operator, b);
    }
    resetInput();
};

function exponent() {
    if (calcInput.textContent === "0"){
        calcResult.textContent = "You must enter base number first";
    } else {
    base = calcInput.textContent;
    console.log("base =", base);
    calcResult.textContent = "Enter exponent"
    resetInput();
    operator = "pow"
    }
};

function displayScreen(number){
    if (calcInput.textContent === "0") {
        clearDisplay();
    }
    if (calcInput.textContent.length === 34) {
        alert("Sorry, You've reached the limit of integers");
        return;
    } else {
        calcInput.textContent += number;
    }
 };

function addDecimal() {
    if (calcInput.textContent.includes(".")) {
        return;
    } else {
        calcInput.textContent += ".";
    }
};

function clearDisplay() {
    calcInput.textContent = "";
};

function resetInput() {
    calcInput.textContent = 0;
};

function resetAll() {
    calcInput.textContent = 0;
    calcResult.textContent = 0;
    a = 0;
    b = 0;
    operator = "";
};

function removeLast() {
    calcInput.textContent = calcInput.textContent.toString().slice(0, -1);
    a = calcInput.textContent;
    console.log(`a = ${a}`);
        if(calcInput.textContent === "") {
            calcInput.textContent = 0;
        }
};

numberButtons.forEach((button) => 
button.addEventListener('click', () => displayScreen(button.textContent))
);

numberButtons.forEach((button) => 
button.addEventListener('click', () => getFirstOperand()));

operatorButtons.forEach((button) => 
button.addEventListener('click', () => getOperator(button.textContent)));

decimalBtn.addEventListener('click', addDecimal);

equalsButton.addEventListener('click', evaluate);

allClearButton.addEventListener('click', resetAll);

deleteBtn.addEventListener('click', removeLast);

exponentBtn.addEventListener('click', exponent)