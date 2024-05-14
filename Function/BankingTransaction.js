let accountBalance = 1000;

function depositMoney(amount) {
    if(isNaN(amount)){
        console.log("Invalid input")
    } else{ 

    accountBalance+=amount;

    console.log(`deposit amount ${amount}
                new balance: ${accountBalance} `
    )
}
}



function withdraw (amount) {

    if(isNaN(amount)){
        console.log("Invalid input")
    } else{ 

    accountBalance-=amount;
    console.log(`Withdraw amount ${amount}
                New Balance: ${accountBalance}`
    )

}
}

function viewBalance(){
    console.log("Current Balance", accountBalance);
}

//Important note: console.log is only when there a return//

depositMoney(2000);
withdraw(2000);
viewBalance();