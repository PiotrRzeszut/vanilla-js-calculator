const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const piButton = document.querySelector('[data-pi]');
const eButton = document.querySelector('[data-e]');
const sqrtButton = document.querySelector('[data-sqrt]');
const sqrButton = document.querySelector('[data-sqr]');
const oneDivButton = document.querySelector('[data-one-div]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});

piButton.addEventListener('click', () => {
    calculator.appendNumber(3.1415926535897932384626433832795);
    calculator.updateDisplay();
});

eButton.addEventListener('click', () => {
    calculator.appendNumber(2.7182818284590452353602874713527);
    calculator.updateDisplay();
});

sqrtButton.addEventListener('click', button => {
    calculator.sqrtOperation();
    calculator.updateDisplay();
});

sqrButton.addEventListener('click', button => {
    calculator.sqrOperation();
    calculator.updateDisplay();
});

oneDivButton.addEventListener('click', button => {
    calculator.oneDivOperation();
    calculator.updateDisplay();
});

equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});