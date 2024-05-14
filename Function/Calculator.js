function divide(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Not a valid number"; 
    }
    return a / b;
}

function addition(a, b) {
    return a + b;
}

function subtraction(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

console.log("Addition:", addition(2, 3));
console.log("Subtraction:", subtraction(2, 3));
console.log("Multiplication:", multiply(2, 3));
console.log("Division:", divide(2, 3));