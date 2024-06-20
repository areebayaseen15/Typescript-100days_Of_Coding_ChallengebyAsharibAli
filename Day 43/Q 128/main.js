//Question 128: Create an arrow function that takes multiple parameters and returns the product of all
//  parameters.
//Creating arroow function
var arrowFunction = function (num1, num2, num3) {
    return num1 * num2 * num3; // produt of all parameters
};
console.log(arrowFunction(2, 3, 4)); //Output 24
//Or
var multipleParameters = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    return nums.reduce(function (total, number) { return total * number; });
};
console.log(multipleParameters(2, 3, 4)); //output 24
