let value1 = null;
let value2 = null;
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
    });
});

const operations = document.querySelectorAll('.operation');
operations.forEach((operation) => {
    operation.addEventListener('click', (e) => {
        operator = operation.textContent;
    });
});