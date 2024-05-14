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