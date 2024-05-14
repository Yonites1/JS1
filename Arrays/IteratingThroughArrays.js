
//Iterating Through Arrays 

const numbers = [1,2,3,4];
console.log("NUmber for loop");

for (let i=0; i<numbers.length; i++){

    console.log(numbers[i])// What will happens if we insert 'i' inside bracket after 'numbers'
}


//Q2 foreach

console.log("NUmber for loop");

numbers.forEach((number, index, numbers)=> {
    console.log(`number:${number}  index: ${index} number:${numbers}`)
})

//Q3 - map Method

const grades = new Array(60,60,90);
const squaredGrades = grades.map((grade)=> grade * grade);//more explaination
console.log(`square grades: ${squaredGrades}`);


//Q4 - filter method

const ages = [13,56,78,89];
const adults = ages.filter(age=>age>18);
console.log(`Ages greater than 18: ${adults}`); // OR ("Adults", adults);



