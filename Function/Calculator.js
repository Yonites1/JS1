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

console.log("Addition:", addition(6, 9));
console.log("Subtraction:", subtraction(2, 3));
console.log("Multiplication:", multiply(4, 8));
console.log("Division:", divide(12, 3));