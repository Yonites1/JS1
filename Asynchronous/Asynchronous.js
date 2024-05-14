//Implemeting Callback
//Passing a function as a parimeter

const add = (result) => {
    return result;
}

function sum (number1, number2, callback){
    if(isNaN(number1) || isNaN(number2)){
        return;
    }
let sum = number1 + number2;
    return callback(sum);

}

console.log(`Summation result: ${ sum(-1,-3, add)}`)