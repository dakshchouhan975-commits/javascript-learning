// Q1. Prompt the user to enter their full name. Generate a username for them based on the input.
// Start username with @, followed by their full name and ending with the full name length.

// Example:
// User name = "shradhakhapra"
// Username should be = "@shradhakhapra13"

let fullname=prompt("enter full name without spaces");
let username="@"+fullname+fullname.length;
console.log(username);
