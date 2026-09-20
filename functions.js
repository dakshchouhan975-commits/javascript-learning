// it is a block of code that performs specific task and can be call whenever needed 

function myname(){
    console.log("Daksh Chouhan");
}

myname();

function meesage(msg){
    console.log(msg);
}
meesage("this is parameter")//argument i

// lets create a function that is used to calculate the sum of two numbers 

function sum(sum, n){
    console.log(sum+n);
}
sum(10,5);


function alpha(a,b){
s=a+b;
return s;
}
let val=alpha(10,10);
console.log(val);


// ARROW Function = COMPACT WAY OF WRITING A FUNCTION

const arrowsum=(a,b)=>{
    console.log(a*b);
}
arrowsum(10,10);