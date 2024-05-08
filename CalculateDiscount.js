function calculateDiscountPrice(originalPrice, discount){
    if(isNaN(price) || isNaN(discount)){
        return "Invalid input"

    }
const discountedPrice = (originalPrice*(discount/100))
    
    return originalPrice - discountedPrice

}

const discountedPrice = (originalPrice, discount, callback)=>{ 
     if(isNaN (originalPrice) || isNaN(discount)){
        return "Invalid input"

}
const discountedPrice = originalPrice - (originalPrice*(discount/100)); //anoynymous fuction for callback
callback(discountedPrice);
}

const printDiscountedPrice= (discountedPrice)=>{
console.log("discountedPrice", discountedPrice);

}

console.log("calculatedDiscountPrice", 
calculateDiscountPrice(100, 10));
discountedPrice(100, 10, printDiscountedPrice);

//results not working 