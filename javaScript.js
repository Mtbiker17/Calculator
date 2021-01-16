
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
operate('/', 12, 4);