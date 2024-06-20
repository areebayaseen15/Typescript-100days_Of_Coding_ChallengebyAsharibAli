// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and
// declarations by creating one of each that performs the same task, such as squaring a number.

// Function declaration for squaring a number
function squareDecaration(number: number): number {
  return number * number;
}
// Function expression for squaring a number
const squareExpression = function (number: number): number {
  return number * number;
};

console.log(squareDecaration(4));
console.log(squareExpression(4));
