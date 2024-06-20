// Qn0 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets 
// of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order,
//  then log the result.

let set1prices = [ 1200 , 1500 , 1000];
let set2prices = [ 1100 , 1300 , 1600];

let result = [...set1prices , ...set2prices].sort((a , b)=> a - b);

console.log(result);
