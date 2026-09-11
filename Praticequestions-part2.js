/*Q1). Get user to input a number using prompt("enter number:").
 check if number is a multiple of 5 or not */
//  prompt("enter a number")
// prompt("enter a number")
  let number=prompt("enter a number:");
  if(number%5===0){
     console.log(number, "yes it is");
  }
  else{
     console.log(number, "no it is not");
  }

//  Q2). Write a code which can give grades to students  according to their Score
//  80-100, A
//  70-79,B
//  60-69,C
//  50-59,D
//  0-49,F

let score =prompt("Enter you marks");
let grade;
if (score>=80 && score<=100){
    grade="A"
}
else if(score>=70 && score<=79){
    grade="B"

}
else if(score>=60 && score<=69){
    grade="C"

}
else if(score>=50 && score<=59){
    grade="D"

}
else if (score>=0 && score<=49){
    grade="F"

}

console.log(grade);