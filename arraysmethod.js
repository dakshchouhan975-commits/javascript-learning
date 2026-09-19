let fruits=["apple","banana","lichi"];
fruits.push("kiwi");
console.log(fruits.slice(0,2));


let bike=["kawasaki","BMW","bullet","gt"];
bike.pop("gt");
bike.unshift("honda cbr");
console.log(bike);

let like=[67,89,99,6060];
console.log(like.toString());

let x=[85,595,96,696];
let y=["daksh","divya","shubham","rohit"];
let combine=x.concat(y);
console.log(combine);

let num=[1,2,3,4,5,6,7,8];
num.splice(1,3,9,10);
// first is index number then how much we have to delete and after what we have to add
console.log(num);


// let's practise
// Q). create an array to store companies ->"bloomberg","microsoft","uber","google","ibm","netflix"?
// add.  remove the first company from array
// b.  remove uber&add ola in its place 
// c.  add amazon at the encodeURI

let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
companies.shift(0);
companies.splice(1,1,"ola");
companies.push("amazon");
console.log(companies);
