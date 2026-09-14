// Q1). Print All Even Numbers From 1 To 100?

for(i=0;i<=100;i++){
if(i%2===0){
    console.log(i);
}
    
}

// Q2). Create a Game Where you Start with any random number .Ask the user to keep guessing the game number until the user enters correct number 

let Number = 7;
let usernum=prompt("Enter a number");
while(usernum!=Number){
usernum=prompt("you entered wrong number.Guess again");
}
console.log("congratulation you entered correct number");

// one more 


let name="daksh";
let username=prompt("enter your user name:");
while(username!=name){
    username=prompt("you entered wrong name.enter again");
}
console.log("congratulation you username is correct");