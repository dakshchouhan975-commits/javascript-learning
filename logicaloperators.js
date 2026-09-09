// and && operator
// in this both condition should be true to get true

let a = 5;
let b = 6;

//  let condition1= a<b;  //true
//  let condition2= b===6; //true

let condition1 = a < b; //true
let condition2 = b === 5; //false

console.log("condition1 && condition2 =", condition1 && condition2);

let boys = 12;
let girls = 12;
console.log(boys == girls && boys == 12);

let burger = 12;
let students = 15;

console.log(burger == students && students == 15);


// logical or || operator
// in this if both condition are false then only it will show false else true

 let x= 35;
 let y=33;
 console.log("x||y",x<y || x!=y);
 console.log("x||y",x>y || x!=y);

// logical not ! operator
// it reverses it makes true -> false , false->true

let coffee = 10;
let jar = 12;

console.log("coffee!jar",!(coffee==jar));

let toffee = 10;
let kids = 10;

console.log("toffee!kids",!(toffee==kids));