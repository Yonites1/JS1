// Create car object

const car = {
    make:' Hyundai',
    model:' Elantra',
    year: 2023,
}

console.log(`Car model:${car.make}`);
console.log(`Car year:${car.year}`);

// Add new method

car.start = function() {
    console.log('The car is starting'); 
}

car.start();//This is the way to invoke a fuction