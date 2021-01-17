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
            calcInput.textContent = "0";
            calcResult.textContent = "0";
            break;
        case 'deleteBtn':
            console.log("try to make things delete here");
            break;
        case 'percentBtn':
            console.log("make percent button here? maybe?");
            break;
        case 'divideBtn':
            console.log("this will divide things, hopefully...");
            break;
        case 'sevenBtn':
            let seven = 7;
            console.log(seven);
            break;
        case 'eightBtn':
            let eight = 8;
            console.log(eight);
            break;
        case 'nineBtn':
            let nine = 9;
            console.log(nine);
            break;
        case 'addBtn':
            console.log("this will add, in a perfect world");
            break;
        case 'fourBtn':
            let four = 4;
            console.log(four);
            break;
        case 'fiveBtn':
            let five = 5;
            console.log(five);
            break;
        case 'sixBtn':
            let six = 6;
            console.log(six);
            break;
        case 'subtractBtn':
            console.log("lets try to subtract here");
            break;
        case 'oneBtn':
            let one = 1;
            console.log(one);
            break;
        case 'twoBtn':
            let two = 2;
            console.log(two);
            break;
        case 'threeBtn':
            let three = 3;
            console.log(three);
            break;
        case 'multiplyBtn':
            console.log("yes, multiply!");
            break;
        case 'zeroBtn':
            let zero = 0;
            console.log(zero);
            break;
        case 'decimalBtn':
            console.log("somehow, I have to make a decimal insert here..yikes");
            break;
        case 'resultBtn':
            console.log("and finally, hit the equals button to get your results");
            break;
    }
}

//event listeners
