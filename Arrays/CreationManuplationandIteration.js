const fruits = ['apple', 'banna', 'cherry' ]
const fruits1 = new Array ("apple", "banana", "cherry")

console.log("second fruit", fruits[1]);
fruits[2] = "Dragon fruit";
console.log("length of fruit", fruits.length);

fruits.push("Kiwi");
console.log("Kiwi added", fruits);
fruits.pop();
console.log("Kiwicremoved", fruits)


//for loop

for (let i=0; i<fruits.length; i++){
    console.log(fruits)
}


//forEach

fruits.forEach((fruit)=>{ 
    console.log(fruits);
}

)


