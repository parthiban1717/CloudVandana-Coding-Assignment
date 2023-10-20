// Get the result input field and all the buttons
const resultField = document.getElementById('result');
const buttons = document.querySelectorAll('input[type="button"]');

// Initialize variables to store the current and previous values and the operator
let currentInput = '';
let previousInput = '';
let currentOperator = '';

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'AC') { // Change "c" to "AC"
            // Clear the input field and reset variables
            resultField.value = '';
            currentInput = '';
            previousInput = '';
            currentOperator = '';
        } else if (value === '=') {
            // Calculate the result and display it
            calculateResult();
        } else if (isNumeric(value) || value === '.') {
            // Append numeric values and decimal point to the current input
            currentInput += value;
            resultField.value = currentInput;
        } else if (isOperator(value)) {
            // Handle arithmetic operators
            if (currentInput !== '') {
                if (previousInput !== '') {
                    // Calculate the result if there's a previous value and operator
                    calculateResult();
                }
                previousInput = currentInput;
                currentInput = '';
                currentOperator = value;
            }
        }
    });
});

function isNumeric(value) {
    return /^\d*\.?\d*$/.test(value);
}

function isOperator(value) {
    return value === '+' || value === '-' || value === 'x' || value === '÷';
}

function calculateResult() {
    if (currentInput === '' || previousInput === '') {
        return;
    }
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            resultField.value = num1 + num2;
            break;
        case '-':
            resultField.value = num1 - num2;
            break;
        case 'x':
            resultField.value = num1 * num2;
            break;
        case '÷':
            if (num2 === 0) {
                resultField.value = 'Error';
            } else {
                resultField.value = num1 / num2;
            }
            break;
    }

    previousInput = resultField.value;
    currentInput = '';
    currentOperator = '';
}
