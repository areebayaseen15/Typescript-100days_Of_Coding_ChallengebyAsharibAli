//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables.
// Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

// This function swaps the values of two variables
function swapValues() {
  let a = 5;
  let b = 10;
  console.log(`Before swaping value a = ${a} and b = ${b}`);

  let temp = a;
  a = b;
  b = temp;
  console.log(`After swaping values a =${a} and b =${b}`);

// or
// console.log(`After swaping values a =${b} and b =${a}`);

  
}
swapValues();// We use a temporary variable to hold one value while we swap them, like a magic trick!
