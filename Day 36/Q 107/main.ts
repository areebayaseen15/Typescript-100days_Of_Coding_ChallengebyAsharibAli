// Question 107: Write a condition using logical operators that checks if a number is divisible by both 2 and 3

let number = function (num:number) :boolean{
    return num % 2 === 0 && num % 3 ===0;
}
console.log(number(6)); //true
console.log(number(8)); //false
