const readline = require('readline-sync');

let userName = readline.question(`Hello, Welcome to Close to Home. 
    Please enter your Name: `);
    console.log(`${userName}. Welcome to Close to Home!`);
//1. Module Values, Data Types, and Operations: I would use readline sync to prompt the user for thier name and output a greeting. while useing template literals to keep it simple.
// 2. Module Stringing characters together: Template literals line 5

let password = "";
let isValid = false;
// 3. Module Control Structures and Logic: boolens will be used to validate the users input.  

while(!isValid){
    password = readline.question("Enter a password: ");
}
    let passwordLength = password.length;
    let passwordUpperCase = /[A-Z]/.test(password);
    let passwordNumber = /0-9/.test(password);

for (let i = 0; i < passwordLength; i++) {
    let char = password [i];
    if (char >= "A" && char <= "Z") {
        passwordUpperCase = true;
    }
    if (char >= "0" && char <= "9") {
    passwordNumber= true;
    }

if (passwordLength >= 8 && passwordUpperCase && passwordNumber){
    isValid = true;
} else {
    console.log("Password is not valid.");
    };
};
// 4. Module Working with Loops: using while, and If else loops would help the user create a personal password. much like the practice quiz. 


familyPassword = (inputPassword, storedPassword);{
    if (inputPassword === storedPassword) {
        console.log("Access Granted");
        return true;
    } else {
        console.log("Access denied")
        return false;
    }
};
// I will need to create an family password. 

let familyMembers = ["Tom", "Jen", "Sally,"];
let addFamilyMeber (userName){
    familyMembers.push(userName);
}
// 5. Module Building Arrays: Arrays will store famliy members information. 
let removeFamilyMembers (userName){
    familyMembers.filter(member => member !== userName)
}
// 6. Module Using Arrays: Array Iterator, Since this apps allows new members, I will need to use the push() method to add new members and filter() to remove members. 