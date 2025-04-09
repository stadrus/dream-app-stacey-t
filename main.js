const readline = require('readline-sync');

let userName = readline.question(`Hello, Please enter your Name: `);
    console.log(`${userName}, welcome to Close to Home!`);
//1. Module Values, Data Types, and Operations: I would use readline sync to prompt the user for thier name and output a greeting. while useing template literals to keep it simple.
// 2. Module Stringing characters together: Template literals line 5


let userPassword = "";
let isValid = false;
// 3. Module Control Structures and Logic: boolens will be used to validate the users input. 

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
// 4. Module Working with Loops: using while, and If else loops would help the user create a personal password. much like the practice quiz. 




// function familyPassword (){
//     let familyPasswordLength = userPassword.length >=8;
//     let familyPasswordUpperCase =  /[A-Z]/.test(userPassword);
//     let familyPasswordNumber = /0-9/.test(userPassword);    
    

//     while (!isValid){
//         familyPassword = readline.question("Enter your family password: ");
//         if (familyPasswordLength && familyPasswordUpperCase && familyPasswordNumber){
//             isValid = true;
//             console.log("Valid Password.");
//     } else {
//             console.log("Password is not valid.");
//     }
//     }
    
// }
// familyPassword();

// // // I will need to create an family password. 
const familyMembers = [];

// function addFamilyMember (name) {
//     familyMembers.push(name);
//     console.log(`${name} added.`);
// }
// function getUsers(){
//     return familyMembers;
// }
// addFamilyMember("sally");

// console.log(getUsers());

function addFamilyMember (userName){
    console.log(familyMembers.push(userName));
}
addFamilyMember();

// 5. Module Building Arrays: Arrays will store famliy members information. 

// function removeFamilyMembers () {
//     familyMembers.filter(member => member !== userName)
// };
// removeFamilyMembers
// 6. Module Using Arrays: Array Iterator, Since this apps allows new members, I will need to use the push() method to add new members and filter() to remove members. 