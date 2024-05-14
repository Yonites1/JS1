/*Definitions
Q1 - Destructure an Array - first and second colors into variables color1 and color2.
Q2 - Skipping Elements: (You can skip elements by leaving empty slots in the destructuring pattern:)
Q3 Rest Parameter - The rest parameter (...) can be used to capture the remaining elements of an array into a new array: 
Q4 Default Values - You can provide default values for variables in case the array doesn't have enough elements:
Q5 Swapping Values - Array destructuring makes it easy to swap the values of two variables:

*/

//Q1 
const colors = ['red', 'yellow', 'black'];
const [color1, color2] = colors;
console.log("color1", color1); 
console.log("color2", color2);

//Q2

const numbers = [42, 26, 18, 74, 58]; // or new Array
const [, , thirdNumber] = numbers;
console.log("Third number", thirdNumber);

//Q3

const fruits = ['Passionfruit', 'Guava', 'Blueberry'];
const [firstFruit, ...otherFruits] = fruits;
console.log("First fruit", firstFruit); 
console.log("Other fruits",otherFruits); 

//Q4 

/* Example
const shapes = ['circle', 'round', 'rectangle'];
const [firstShape, secondShape, thirdShape = 'hexagon'] = shapes;
console.log(firstShape);
console.log(secondShape);
console.log(thirdShape);
*/

const shapes = [];
const [firstShape = 'circle'] = shapes;
console.log("First Shape", firstShape);

//Q5

let a = 5;
let b = 10;

[a,b] = [b,a];

console.log("a", a);
console.log("b", b);

//DONE//
