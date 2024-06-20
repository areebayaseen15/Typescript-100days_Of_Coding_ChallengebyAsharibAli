// Question 139: List three reserved words in JavaScript and create a valid use case for each.
//Reversed Words: In JavaScript you cannot use these reserved words as variables, labels, or function names:
//1 : let/ const =>used to declare a block-scoped local variable
var value = 3.142; // we cannot use let/const as a variable name
console.log(value);
//2 :   function // This keyword cannot be used as variable it is noly used to make function
function add(a, b) {
    console.log(a + b);
}
console.log(add(2, 3));
// 3: for => for is used for making for loop
for (var i = 0; i < 3; i++) {
    console.log('Hello , World');
}
// Demonstrates valid use cases for the reserved words 'let', 'function', and 'for'.
