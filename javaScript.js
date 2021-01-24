let calcInput = document.querySelector('#calcInput');
const deleteBtn = document.querySelector('[data-delete]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operators]')
const allClear = document.querySelector('[data-allClear]');
const result = document.querySelector('[data-result]');
const exponentBtn = document.querySelector('[data-exponent]');


function add (a, b){
    answer = +a + +b
    calcResult.textContent = answer;
}
function subtract(a, b){
    answer = a - b;
    calcResult.textContent = answer;
}
function multiply(a, b){
    answer = a * b;
    calcResult.textContent = answer;
}
function divide(a, b){
    answer = a / b;
    calcResult.textContent = answer;
}
function power(a, b){
    answer = Math.pow(a, b)
    calcResult.textContent = answer;
}

function operate(a, operator, b){
    if (b === "0" && operator === '/'){
        alert("You can't divide by zero");
        resetScreen();
    } else if (operator === '+') {
       add(a, b);
    } else if (operator === '-') {
       subtract(a, b);
    } else if (operator === 'x') {
        multiply(a, b);
    } else if (operator === '/') {
        divide(a, b);
    } else if (operator === 'pow'){
        power(a, b);
    }
    console.log(a, operator, b);
}

function getOperation(){
    if(calcInput.textContent === "0") return;
    a = calcInput.textContent;
    getOperator(operator);
    calcInput.textContent = "0";
    calcResult.textContent = a;
    console.log(a, operator);
}

function evaluate(){
    b = calcInput.textContent;
    operate(a, operator, b);
    calcResult.textContent = answer;
    resetInput();
    calcInput.textContent = 0;
}

function getOperator(buttonContent){
    operator = buttonContent;
}

function exponent(){
    a = calcInput.textContent;
    calcResult.textContent = "Enter exponent"
    calcInput.textContent = 0;
    b = calcInput.textContent;
    operator = "pow"
    operate();
}

function display(number){
    if(calcInput.textContent === "0"){
        clearDisplay();
    }
    if(calcInput.textContent.length === 34){
        alert("Sorry, You've reached the limit of integers");
        return;
    } 
    if(calcInput.textContent.includes("..")){
        calcResult.textContent = "You can only place one decimal!"
        calcInput.textContent = 0;
    }
    else {
        calcInput.textContent += number;
    }
};

function clearDisplay(){
    calcInput.textContent = "";
}

function resetInput(){
    calcInput.textContent = 0;
    a = answer;
    b = 0
    operator = "";
}

function resetAll(){
    calcInput.textContent = 0
    calcResult.textContent = 0
    a = 0;
    b = 0
    operator = "";
}

function removeLast() {
    calcInput.textContent = calcInput.textContent.toString().slice(0, -1);
        if(calcInput.textContent === ""){
            calcInput.textContent = 0;
        }
}

numberButtons.forEach((button) => 
button.addEventListener('click', () => display(button.textContent))
);

operatorButtons.forEach((button) => 
button.addEventListener('click', () => getOperator(button.textContent))
);

operatorButtons.forEach((button) =>
button.addEventListener('click', getOperation));

result.addEventListener('click', evaluate);

allClear.addEventListener('click', resetAll);

deleteBtn.addEventListener('click', removeLast);

exponentBtn.addEventListener('click', exponent)