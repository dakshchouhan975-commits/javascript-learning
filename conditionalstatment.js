// to implement some condition we use conditional statments

// if statment to chech the statment
 let age = 12;
 if(age>=18){
    console.log(" you can vote");
 }
 if(age < 18){
    console.log("you can't vote");

 }


 let marks = 90;
 if(marks>=40){
    console.log("pass");
 }
 if(marks < 40){
    console.log("fail");

 }

 let mode = "dark";
 let color;
 if(mode==="dark"){
    color ="black";
 }

 if(mode==="light"){
    color="white";
 }
 console.log(color);

//  if-else statment

let limit = 70;
if(limit<=60){
    console.log("no rule break")
}
else{
    console.log("overspeeding")
}

let opening = 10;
if (opening<=10){
    console.log("Allowed");
}
else{
    console.log("Not Allowed");
}


// find even or odd

let number = 1841;
if(number%2===0){
    console.log("Even")
}
else{
    console.log("Odd");
}


//else-if statment

let battery=100;
if(battery<=50){
    console.log("not charge");
}
else if(battery<=90){
console.log("almost");
}
else{
    console.log("Full Charged");
}

let height = 5;
if(height===6){
    console.log("yes");
}
else if(height===5){
    console.log("true");
}
else{ 
    console.log("false");
}

// ternary operators
// condition? true output:false output

let balance=2000;
let result = balance>1000 ? "safe" : "not safe";
    console.log(result);

 let range = 10;
 let distance= range>10 ? "need fuel":"no need";
 console.log(distance); 
 
 

//  switch statment

let fruit = "apple";
switch (fruit)
{
    case "apple":
    console.log("keeps doctor away");
    break;

    case "mango":
        console.log("king of fruits");
        break;

        default:
            console.log("eat fruits");
            
}