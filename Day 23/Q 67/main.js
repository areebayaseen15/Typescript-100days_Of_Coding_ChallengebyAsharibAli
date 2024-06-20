// Q67: Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a 
// string that represents a number (e.g., "5"). Return their sum as a number.
function mixedTypes(a, b) {
    return b + Number(a);
}
// Trying it with "5" and 5
console.log(mixedTypes("5", 5));
// The string "5" is turned into the number 5, and then added to 5.so ans will be 10
