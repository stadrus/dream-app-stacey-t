const readline = require('readline-sync');
//1. Module Values, Data Types, and Operations: I would use readline sync to prompt the user for thier name and output a greeting. while useing template literals to keep it simple.

// 2. Module Stringing characters together: Template literals
let userName = readline.question(`Hello, Please enter your Name: `);
    console.log(`${userName}, welcome to Close to Home!`);
// 3. Module Working with Loops: using while, and If else loops would help the user create a personal password. much like the practice quiz.
// 4. Module Control Structures and Logic: boolens will be used to validate the users input.

let userPassword = "";
let isValid = false;

while(!isValid){
    userPassword = readline.question("Enter a password: ");

    let passwordLength = userPassword.length === 8;
    let passwordUpperCase =  /[A-Z]/.test(userPassword);
    let passwordNumber = /0-9/.test(userPassword);

for (let i = 0; i < passwordLength; i++) {
    let char = userPassword [i];
    if (char >= "A" && char <= "Z") {
        passwordUpperCase = true;
    }
    if (char >= "0" && char <= "9") {
    passwordNumber= true;
    }

if (passwordLength && passwordUpperCase && passwordNumber){
    isValid = true;
    console.log("Valid Password.");
} else {
    console.log("Password is not valid.");
    }
}
}
 
//5. Module Using Arrays: Array Iterator, Since this apps allows new members, I will need to use the push() method to add new members and filter() to remove members.

let familyMembers = [];

function addFamilyMember (name) {
    familyMembers.push(name);
    console.log(`${name} added.`);
}
function getUsers(){
    return familyMembers;
}
addFamilyMember("Sally");
addFamilyMember("Tom");

console.log(getUsers());

//6. Module Building Arrays: Arrays will store famliy members information.// 
function removeFamilyMembers (name) {
    familyMembers.filter(name => name);
    console.log(`${name} has been removed.`);
}
function getUsers(){
    return familyMembers;
}
console.log(getUsers(removeFamilyMembers));
removeFamilyMembers("Sally");

 