//                               Task1
// The postfix and prefix forms
// What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
//Answer 
c = 2 // ++a is pre increament increament a to 2 and will return new value 2
alert(c)
d = 1 // b++ incraments b to 2 but as it is post incramebt so it will return previous result 
alert(1)

//                                       Task 2
// Assignment result
// What are the values of a and x after the code below?

let e = 2;

let x = 1 + (e *= 2);
//solution
e = 2* 2;
e =4;
x = 1 + e
x = 5
alert(x) // 5

// Task 3
// Type conversions
// What are results of these expressions?

"" + 1 + 0  // "10"
"" - 1 + 0    // -1
true + false   // 1
6 / "3"    // 2
"2" * "3"       // 6
4 + 5 + "px"   // 9px
"$" + 4 + 5     // "$45"
"4" - 2         // 2
"4px" - 2      // NaN
"  -9  " + 5     //"-95"
"  -9  " - 5      // -14
null + 1     //0
undefined + 1    // NaN
" \t \n" - 2   // -2


//     Task 3
// Fix the addition
// importance: 5
// Here’s a code that asks the user for two numbers and shows their sum.

// It works incorrectly. The output in the example below is 12 (for default prompt values).

// Why? Fix it. The result should be 3.

let f = prompt("First number?", 1);
let g = prompt("Second number?", 2);

alert(f + g); // 12
//solution
   // we ll convert prompt string to number by using + or number() before operands
   alert(+f + +g); // 3