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
        return n1+n2;
    } else if (operator === '-') {
        return n1-n2;
    } else if (operator === '*') {
        return n1*n2;
    } else if (operator === '/') {
        return n1/n2;
    };
};