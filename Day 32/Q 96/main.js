// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers
//  in an array.
function reduce(numbers) {
    return numbers.reduce(function (accumulator, current) { return accumulator + current; }, 0);
}
console.log(reduce([1, 2, 3, 4, 5]));
// it will sum numbers in arrays
