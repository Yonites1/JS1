let celTemp = 30; /* Declared variables for both Celsius & Fahrenheit */ 
let farTemp = 90;

let convFarTemp = (celTemp * 9/5) + 32; /* Given formaula - (Celsius × 9/5) + 32 */
                  (30 * 9/5) + 32;
console.log(convFarTemp);

let convCelTemp = (farTemp - 32) * 5/9; /* Given formaula - (Fahrenheit - 32) × 5/9*/
                  (90 - 32) * 5/9;

console.log(convCelTemp);

console.log("Original Temperature:")
console.log("Celsius:", celTemp)
console.log("Fahrenheit:", farTemp)
console.log("\nConverted Temperature:")
console.log("Celsius:", convCelTemp)
console.log("Fahrenheit:", convFarTemp)

/**///
