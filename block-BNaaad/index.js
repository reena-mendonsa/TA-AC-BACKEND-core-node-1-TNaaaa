console.log('Welcome to Node Js');

function sum(){
    let sum=0;
    for(let i=1;i<=10;i++){
        sum = sum+i;
    }
    return sum;
}

let sumOfNum = sum();
console.log(sumOfNum);