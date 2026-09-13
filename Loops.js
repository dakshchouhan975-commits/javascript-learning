// Loops In Java Script
// loops are use to execute a piece of code again and again

// this is for loop
let name="Daksh Chouhan";
for(i=1;i<=10;i++){
    console.log(name);
}

// calculate sum of 1 to 10

let sum = 0;
for (i=1;i<=10;i++){
    sum=sum+i;
}
console.log("sum = ",sum);


// infinite loop in js= that never ends
// we should not run this else it may crash website
// let sum = 0;
// for (i=1;i>=0;i++){
//     sum=sum+i;
// }
// console.log("sum = ",sum+i);

// while loop 
// this is the way and syntax to use while loop
let destination="jaipur";
let i=1;
while (i<=5){
    console.log(destination);
    i++;
}

// one more
let status="done";
let I=1;
while(I<=10){
    console.log(status);
    I++
}

// do-while loop in this the condition is checked in last and it will give the output once if condition is false

let j=7;
do{
    console.log("Hello ji");
    j++;
} while(j<=5);

// for-of loop it helps to add loop on strings and array

let str="DakshChouhan"
let len=0;
for(let val of str){
    console.log("val=",val);
len++;
}
console.log("length is",len);

//for-in loop used for object returns the key

let student ={
name:"Daksh",
class:12,
rollno:7,
pass:true,
};
for(let key in student){
    console.log(key,student[key]);
}