// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {}
// that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

{
  let blocklet = "visible inside block";
  const blockconst = "Visible";
  console.log(blocklet); //work fine
  console.log(blockconst);
}
 
//  try to console outside the block
console.log(blocklet);    // will  not log outside the block
console.log(blockconst) // will  not log outside the block

// This shows that `let` and `const` keep variables safe inside the block where they're defined.
