// Delaying a message
// Using promise with setTimeout

const simplePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve ( "Message to clients");
    }, 2000);
});

simplePromise
.then(proomiseResult=>{
    return proomiseResult
}).then(message=>{
    console.log(message);
})

.catch