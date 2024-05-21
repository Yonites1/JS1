//Validating an email
// Passing a call back fucntion

const printEmail = (isValid)=> {
    isValid? 
    console.log('Email is valid'): console.log('Email is invalid');
}


function validateEmail(email, callback){
    let at = email.includes('@');
    let dot = email.includes('.');

    if(at && dot){
        callback(true);
    
    }else {
        callback(false);
    }

}

validateEmail('book@manamultimediacom', printEmail)


/*Another way of creating 
  function validateEmail(email, callback){
if(email. length==0){ 
return "invalid input";
}
const emailRegex = /^[a-zA-Z0-9._&+-]+@[a-zA-Z0-9.-]+\. [a-zB-Z]{2, }$/;

callback(emailRegex.test (email))
  }

function printEmail(isValid){
console. log("isValid email", isValid);

}

validateEmail("@.", printEmail);

*/