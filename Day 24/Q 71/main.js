// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not.
//  Try to reassign a const-declared variable and catch the error.
// Example with let 
var myName = "areeba";
myName = "Areeba Quraishi";
console.log(myName); // it will log Areeba quraishi
// Same Example using const 
var myName2 = "areeba";
myName2 = "Areeba Quraishi"; // this line is showing error because const is not reassignable
console.log(myName2);
