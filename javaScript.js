const calcInput = document.querySelector('#calcInput');
const calcResult = document.querySelector('#calcResult');
const allClearBtn = document.getElementById('allClearBtn');
const deleteBtn = document.getElementById('deleteBtn');

const buttons = document.querySelectorAll('button');
buttons.forEach(inputClick => inputClick.addEventListener('click', inputValue));


function add (input1, input2){
    let answer = input1 + input2;
    console.log(answer);
}

function subtract(input1, input2){
    let answer = input1 - input2;
    console.log(answer);
}

function multiply(input1, input2){
    let answer = input1 * input2;
    console.log(answer);
}

function divide(input1, input2){
    let answer = input1 / input2;
    console.log(answer);
}

let displayArray = [];
function displayInput(buttonValue){
    displayArray.push(buttonValue);
    calcInput.textContent = `${displayArray.join("")}`;
    console.log(displayArray);
}

function allClear(){
    calcInput.textContent = "0";
    calcResult.textContent = "0";
}

//operate calculator based on entered operand
function operate(operator, input1, input2){
    if (operator === '+') {
       add(input1, input2);
    } else if (operator === '-') {
       subtract(input1, input2);
    } else if (operator === '*') {
        multiply(input1, input2);
    } else if (operator === '/') {
        divide(input1, input2);
    }
}
operate('*', 12, 4);

//store and display input value on button 'click' event
function inputValue(event){
    switch (event.target.id){
        case 'allClearBtn':
            allClear();
            break;
        case 'deleteBtn':
            console.log("try to make things delete here");
            break;
        case 'percentBtn':
            console.log("make percent button here? maybe?");
            break;
        case 'divideBtn': {
            let buttonValue = " / ";
            displayInput(buttonValue);
            break;
        }
        case 'sevenBtn': {
            let buttonValue = 7;
            displayInput(buttonValue);
            break;
        }
        case 'eightBtn': {
            let buttonValue = 8;
            displayInput(buttonValue);
            break;
        }
        case 'nineBtn':{
            let buttonValue = 9;
            displayInput(buttonValue);
            break;
        }
        case 'addBtn': { 
            let buttonValue = " + ";
            displayInput(buttonValue);
            break;
        }
        case 'fourBtn': {
            let buttonValue = 4;
            displayInput(buttonValue);
            break;
        }
        case 'fiveBtn': { 
            let buttonValue = 5;
            displayInput(buttonValue);
            break;
        }
        case 'sixBtn': {
            let buttonValue = 6;
            displayInput(buttonValue);
            break;
        }
        case 'subtractBtn': {
            let buttonValue = " - ";
            displayInput(buttonValue);
            break;
        }
        case 'oneBtn': {
            let buttonValue = 1;
            displayInput(buttonValue);
            break;
        }
        case 'twoBtn': {
            let buttonValue = 2;
            displayInput(buttonValue);
            break;
        }
        case 'threeBtn': {
            let buttonValue = 3;
            displayInput(buttonValue);
            break;
        }
        case 'multiplyBtn': {
            let buttonValue = " * ";
            displayInput(buttonValue);
            break;
        }
        case 'zeroBtn': {
            let buttonValue = 0;
            displayInput(buttonValue);
            break;
        }
        case 'decimalBtn': {
            let buttonValue = ".";
            displayInput(buttonValue);
            break;
        }
        case 'resultBtn': {
            console.log("and finally, hit the equals button to get your results");
            break;
        }
    }
}

//event listeners
//add event