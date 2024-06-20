// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic
//  operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication,
//      division) on x using compound operators.

function compoundOperators() {
   let x = 4;
   console.log("initial value =",x);
   
   // addition
   x += 2;
   console.log("After addition x becomes",x);
   
   // Subtraction
   x -= 2;
   console.log("After subtraction x becomes",x);

   //Multipication

x *= 3;
   console.log("After multiplication x becomes",x);

   // Division
   x /= 4;
   console.log("After division x becomes",x);
} 

compoundOperators() // We simplify arithmetic operations on x using compound assignment operators, like a shortcut.