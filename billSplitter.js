let totalBillAmount = 250;
let numberOfPeople = 6;
let tipPercentages = 20;
let taxPercentages = 10;

let tipAmount = (totalBillAmount * tipPercentages)/100;
let taxAmount = (totalBillAmount * taxPercentages)/100;
let totalAmount = totalBillAmount + tipAmount + taxAmount;
let individualBill = totalAmount / numberOfPeople;

console.log (`tipAmount: ${{tipAmount}}`);
console.log (`taxAmount: ${{taxAmount}}`);
console.log (`totalAmount: ${totalAmount}`);
console.log (`individual Bill: ${individualBill}`);

