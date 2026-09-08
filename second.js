// DATA TYPES IN JAVA script
let Name="Daksh";

//this is string data type
// way to find data type
console.log(typeof Name);

let age = 21;
console.log(typeof age);

// it is number data type

let isfollow = true;
console.log(typeof isfollow);

// it is boolean data type

let boog;
console.log(typeof boog);

// it is undefined

let block = null;
console.log(typeof block);

// it is object 

let num =BigInt(1234);
console.log(typeof num);

// it is bigint output will be 1234n

let sim =Symbol("Hello!");
console.log(typeof sim);

// it is symbol output is Sumbol("Hello!")



// Object= collection of value

const Student ={
    Name: "Daksh Chouhan",
    age:21,
    cgpa:8.9,
    ispass:true,
}; 
console.log(Student.age);
// if we want any particular key to print we use 
// console.log(Student["Name"]);
// also write this as console.log(Student.age);

// we can assing key new value by

Student["age"] = Student["age"]+1;
console.log(Student.age);

// one more
Student["Name"] = "Rahul Yadav";
