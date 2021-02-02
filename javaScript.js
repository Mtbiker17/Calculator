let calcInput = document.querySelector('#calcInput');
const deleteButton = document.getElementById('deleteButton');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operators]')
const allClearButton = document.getElementById('allClear');
const equalsButton = document.getElementById('equalsButton');
const exponentButton = document.getElementById('exponentButton');
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
    answer = +(a * b).toFixed(10);
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
    } else if (operator === 'x' || operator === '*') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    } else if (operator === 'pow'){
        power(base, a);
    }
};

function getOperand() {
    a = calcInput.textContent;
    if(a === "."){
        calcInput.textContent = "0.";
        return;
    }
    parseInt(a);
    if(isNaN(a)){
        alert("You can only have one decimal in the number");
        removeLastInput();
    }
};

function getOperator(buttonContent) {
    if(buttonContent === "x" && calcInput.textContent === "0"){
        a = calcResult.textContent;
        b = calcInput.textContent;
        add(a, b);
        operator = "x";
        return;
    }
    if (operator == "") {
       a = calcInput.textContent;
       calcResult.textContent = a;
    } else {
       a = calcInput.textContent;
       b = calcResult.textContent;
       operate(a, operator, b);
   }
    operator = buttonContent;
    resetInput();
};

function evaluate(){
    getOperator();
    if(operator === "pow"){
        a = calcInput.textContent;
        operate(a, operator, base);
    } else {
      a = calcInput.textContent;
      b = calcResult.textContent;
      operate(a, operator, b);
    }
    resetInput();
    console.log(a, operator, b)
};

function exponent() {
    if (calcInput.textContent === "0"){
        calcResult.textContent = "You must enter base number first";
    } else {
    base = calcInput.textContent;
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

function clearDisplay() {
    calcInput.textContent = "";
};

function resetInput() {
    calcInput.textContent = 0;
};

function resetAll() {
    calcInput.textContent = 0;
    calcResult.textContent = 0;
    a = "";
    b = "";
    operator = "";
};

function removeLastInput() {
    calcInput.textContent = calcInput.textContent.toString().slice(0, -1);
    a = calcInput.textContent;
        if(calcInput.textContent === "") {
            calcInput.textContent = 0;
        }
};

numberButtons.forEach((button) => 
button.addEventListener('click', () => displayScreen(button.textContent)));

numberButtons.forEach((button) => button.addEventListener('click', () => getOperand()));

operatorButtons.forEach((button) => button.addEventListener('click', () => getOperator(button.textContent)));

equalsButton.addEventListener('click', evaluate);

allClearButton.addEventListener('click', resetAll);

deleteButton.addEventListener('click', removeLastInput);

exponentButton.addEventListener('click', exponent);

//key functionality
window.addEventListener('keydown', function(e) {
    keyInput(e.key);
});

function keyInput(key) {
    if(key === "Backspace") {
        removeLastInput();
    }
    if(key === "1" || key === "2" || key === "3" || key === "4" || key === "5" ||
       key === "6" || key === "7" || key === "8" || key === "9" || key === "0") {
            parseInt(key);
            displayScreen(key);
    }
    if(key === "Enter" || key === "="){
        evaluate();
    }
    if(key === "+" || key === "-" || key === "/" || key === "*"){
        if(key === "*"){
            key === "x";
        }
        getOperator(key);
    }
    if(key === "."){
        displayScreen(key);
        getOperand();
    } else {
        return;
    }
};
