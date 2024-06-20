// Q 56:- Keep Only Strings: Given a mix of different types of items, make a new list that has
//  only the words.
// mixed arrays inculding string, numbers and boolean.
var mixedArrays = ["bag", 3, "school", true, "students", 8, false];
// seperating the arrays with string
var stringArrays = mixedArrays.filter(function (item) { return typeof item == "string"; });
// Shows the list of just words
console.log(stringArrays);
