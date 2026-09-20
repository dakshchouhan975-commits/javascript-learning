//Create a function using the "function" keyword that takes a String as an argument & 
// returns the number of vowels in the string.

function vowels(str){
    let count=0;
for (const char of str){
    if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
    }}
return count;
}
vowels("Daksh chouhan");


// Create an arrow function to perform the same task.


const vow=(stri)=>{
    let count=0;
for (const char of stri){
    if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
        count++;
    }}
return count;
}
vowels("Daksh chouhan");
