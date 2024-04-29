///n = 10 will apply to 'for', 'while' and do-while//

let n = 10;

for ( let i=2; i<=2*n; i+=2){
    console.log(i)

}


 //"while" 
let i = 2;
while (n>=0){
    console.log(i);
n--;
i+=2;

}

//do-while//

let j = 2;
do { 
    console.log(j);
    n--;
    j+=2;
}while(n>0);