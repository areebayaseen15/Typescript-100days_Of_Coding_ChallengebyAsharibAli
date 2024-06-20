//Question 130: Explain how to export a function from one JavaScript file and import it into another file.

// For this we use modules for export and import 
// first make a file and creat function then export this
//then make another file and import the exported file here

import { sum } from "./function";
import { subtract } from "./function";
import { multiply } from "./function";


console.log(sum(2,3,4,5,6)); // output 20
console.log(subtract(15,5,5)); // output 5
console.log(multiply(2,3,4,)); // output 24
