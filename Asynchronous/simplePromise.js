
//Assuming you have data
const students = [
    {
        Name: "Hailu",
        Age: 20,
        Education: "BA"
    },
    {
        Name: "Berhe",
        Age: 30,
        Education: "Masters"
    },
    {
        Name: "Hiwot",
        Age: 35,
        Education: "PHD"
    },
]

const simplePromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const above30 = students.filter((student)=>student.Age>30);//Ex. if you put 40, it would be error
        if(above30.length>0){
            resolve(above30);
            
        }else {
            reject(above30);
        }
    }, 2000)//2 sec

});

simplePromise.then(data=>{
    console.log(data);
}).catch ((error)=>{
    console.log("Error block", error);
})

///// SET TIMEOUT


function delayedMessage(){
    setTimeout(()=>{
        console.log("Hellow from delayed message");

    }, 2000);
}

delayedMessage();


// ASYNC FUNCTION *very important note: "simple{Promise.then... must be commented out in order for this to work. }

async function fetchStudents(){
    try {

    const response = await fetch (
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    return data = response.json();

    console.log (data);

} catch(error){
    console.log(error);
}
}

const result = fetchStudents();
result.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(result);
})

/// CountDownTime very important note: 

function countdownTimer(){
    let counter = 5;
    const timer = setInterval(()=>{
        counter--;
        console.log(counter+"s");
        if(counter==0){
            console.log("Time's up");
            clearInterval(timer);
        }
    },1000);
}
countdownTimer();


/* 
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

.catch(error=>{
    console.error(error);
})
*/