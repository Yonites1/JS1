//What? Accessing student object
// How? Using .operator or using ['property naem']

const student = {
    name: 'Betty',
    age: 50,
    address: {
        street: '7322 Herman',
        zipcode: '94200',
        city: 'Irvin'
    }
}

console.log(`Student city: ${student.address.city}`);
//OR console.log(`Student city using []: ${student[`address`][`city`]}`);




