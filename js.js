let value1 = NaN;
let value2 = NaN;
let result = NaN;
let operator = '';

function add(n1, n2) {
    return (n1 + n2);
};

function subtract(n1, n2) {
    return (n1 - n2);
};

function multiply(n1, n2) {
    return (n1 * n2);
};

function divide(n1, n2) {
    return (n1 / n2);
};

function operate(operator, n1, n2) {
    if (operator === '+') {
        return add(n1,n2);
    } else if (operator === '-') {
        return subtract(n1,n2);
    } else if (operator === '*') {
        return multiply(n1,n2);
    } else if (operator === '/') {
        return divide(n1,n2);
    };
};

let solution = document.querySelector('#solution');
function updateSolution(value) {
    let content = document.createTextNode(value);
    solution.appendChild(content);
};

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        updateSolution(number.textContent);
        placeholder.textContent = '';
    });
});

let placeholder = document.querySelector('#placeholder-value');
const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        if (!value1 && solution.textContent) {
            value1 = Number(solution.textContent);
            operator = operation.textContent;
            solution.textContent = '';
            placeholder.textContent = value1;
        } else if (value1 && solution.textContent) {
            value2 = Number(solution.textContent);
            result = operate(operator, value1, value2)
            value1 = result;
            value2 = NaN;
            result = NaN;
            placeholder.textContent = value1;
            solution.textContent = '';
            operator = operation.textContent;
        };
    });
});