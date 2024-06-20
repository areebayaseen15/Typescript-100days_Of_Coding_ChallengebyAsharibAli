// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3
var number = function (num) {
    return num % 2 === 0 && num % 3 === 0;
};
console.log(number(6)); //true
console.log(number(8)); //false
