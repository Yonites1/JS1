//What? Accessing student object
// How? Using .operator or using ['property naem']

const student = {
    name: 'Levy',
    age: 50,
    address: {
        street: '7322 Herman',
        zipcode: '92104',
        city: 'Irvin'
    }
}

console.log(`Student city: ${student.address.city}`);
//OR console.log(`Student city using []: ${student[`address`][`city`]}`);

// What? To add two methods
// How? Declare the two fuction inside the student object

student.greet = function () {
    console.log('Hello '.concat(student.name)); // This is another way. check class video.
   
}

let street1 = '4356 Hawley blvd';
let city1 = 'LA'
let zipcode1 = '92116'

student.changeAddress = (street1, city1, zipcode1)=>{
        student.address.street = street1;
        student.address.city = city1;
        student.address.zipcode = zipcode1;
}

student.greet();//We are inoking
student.changeAddress(street1, city1, zipcode1);
console.log(`Student's street after modification: ${student.address.street}`); 
console.log(`Student's city after modification: ${student.address.city}`); 
console.log(`Student's zipcode after modification: ${student.address.zipcode}`); 
console.log(student.address);
