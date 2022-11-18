let currentNumber = "";
let previousNumber = "";
let operator = "";

const currentDisplay = document.querySelector('.currentNumber');
const previousDisplay = document.querySelector('.previousNumber');

const equal = document.querySelector('.equal');

const decimal = document.querySelector('.decimal'); 

const clear = document.querySelector('.clear');

const backspace = document.querySelector('.backspace');

const numberButtons = document.querySelectorAll('.number');

const operators = document.querySelectorAll('.operator');

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b !== 0){
        return a/b;
    }
    return "ERROR: division by zero";
}

function operate(a, opr, b){
    let res = "";

    if(opr === "+"){
        res = add(a, b);
    }
    else if(opr === "-"){
        res = subtract(a, b);
    }
    else if(opr === "*"){
        res = multiply(a, b);
    }
    else if(opr === "/"){
        res = divide(a, b);
    }

    return res;
}

function displayNumber(num){
    currentNumber += num;
    currentDisplay.textContent = currentNumber;
}

function handleOperator(opr){
    operator = opr;

    previousNumber = currentNumber;
    previousDisplay.textContent = previousNumber + opr;

    currentDisplay.textContent = "";
    currentNumber = "";
}

function clearAll(){
    previousNumber = "";
    previousDisplay.textContent  = "";

    currentNumber = "";
    currentDisplay.textContent = "";

    operator = "";
}

function makeResult(){
    if (currentNumber.includes(".")){
        currentNumber = parseFloat(currentNumber);
    }
    else{
        currentNumber = parseInt(currentNumber);
    }

    if (previousNumber.includes(".")){
        previousNumber = parseFloat(previousNumber);
    }
    else{
        previousNumber = parseInt(previousNumber);
    }

    currentNumber = operate(currentNumber, operator, previousNumber);
    currentDisplay.textContent = currentNumber;

    previousNumber = "";
    previousDisplay.textContent = "";
}

numberButtons.forEach(number => {
    number.addEventListener('click', (event) => {
        displayNumber(event.target.textContent);
    })
});

operators.forEach(opr => {
    opr.addEventListener('click', (event) => {
        handleOperator(event.target.textContent);
    })
});

clear.addEventListener('click', (event) => {
    clearAll();
});

decimal.addEventListener('click', () => {
    if(!currentDisplay.textContent.includes(".")){
        currentNumber += ".";
        currentDisplay.textContent = currentNumber;
    }
});

equal.addEventListener('click', () => {
    makeResult();
});

backspace.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1);
    currentDisplay.textContent = currentNumber;
});

