// Q 59:Add a Special Number: Make a program that creates custom adders. These adders can add a specific 
// number to any other number you give them later.
// This program makes a function that adds a specific number
function customAdders(addNumber) {
    // This is the magic box. It takes a number and adds your special number to it
    return function (number) {
        return number + addNumber;
    };
}
// making magic box that add special number(5)
var addFive = customAdders(5);
console.log(addFive(7)); // If we put 10 in the box, it gives us 15
// We made a function (magic box) that adds 5 to any number.
