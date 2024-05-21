const fruits1 = ['Guava', 'Orange', 'Blueberry']
const fruits2 = ['Strawberry','MangoApple']

const allFruits = [...fruits1, ...fruits2];
console.log (`All fruits:${allFruits}`); //OR ;"All fruits", allfFruits]

//Spread operator items for function argument/ Pass the array with a spread operate in the argument

function addNumbers  (number1, number2, number3) {
    if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
    return; "Invalid input" 
    }
    return number1 + number2 + number3;
}

const arrayOfNumbers = [1,2,3]

let result = addNumbers (...arrayOfNumbers)
console.log (`Sum of the number: ${result}`)


// Rest Operator

const multiply = (number1, ...Numbers)=> {
    if(isNaN(number1) || !Array.isArray(Numbers)){ //'!Array.isArray' is checking 'if ...Numbers' is an array//
        return;
     }

     let product = 1;
     Numbers.forEach(Number=>{
        product *=Number;   // product = product * number;
     })

     return number1 * product;

     /* 
     OR return numbers.reduce((product, num)=>producr*num, 1).
      this short formula will replace 
      let product = 1;
     Numbers.forEach(Number=> {
        product *=Number;  1
     })

     return number1 * product; 
     */ 
 }

 let result1 =  multiply(1,2,3,4,);
 console.log(`Prodcut result from rest Op: ${ result1}`)

 // Spreading Values from an Array//

 const colors = ['red', 'blue','yellow']

 const copiedColors = [...colors];

console.log(`CopiedColors: ${copiedColors}`) //OR console.log("CopiedColors", copiedColors)

