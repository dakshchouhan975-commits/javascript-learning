// string is a sequence of character used to represent text 

let str="Daksh";
// to check the string length 
console.log(str.length);
// to access indivisual string  by their index value
console.log(str[2]);

// templates literals 
let specialstring = `This is a specialstring`;
console.log(specialstring);

// why to use template literals insted of double or singel quoates so this is a exampel 
// it is a way to have embedded expresion in strings 
let obj={
item:"Bottle",
Price:20,
};
let output =`The price of ${obj.item} is ${obj.Price}`;
console.log(output);

// escape character 
// \n for next line 
// \t for tab space
console.log("Daksh \nChouhan");

// String Method 
// 1.str.toUpperCase()

let kl ="rohitsharma";
kl =kl.toUpperCase();
console.log(kl);

let ship="TITANIC";
console.log(ship.toLowerCase());

let color="Black";
console.log(color.trim());

let Class="Design";
console.log(Class.slice(2,5));

let weight="61";
let unit="kg";
console.log(weight.concat(unit));
// console.log(weight+scale); we can also write like this
// console.log("this is my weight"+weight+unit);

let kidname="rohit";
console.log(kidname.replace("r","m"));

// if we use replace then all matching value will change 

let thought="I love coading";
console.log(thought.charAt(0));


