"use strict";
//Question 130: Explain how to export a function from one JavaScript file and import it into another file.
Object.defineProperty(exports, "__esModule", { value: true });
// For this we use modules for export and import 
// first make a file and creat function then export this
//then make another file and import the exported file here
var function_1 = require("./function");
var function_2 = require("./function");
var function_3 = require("./function");
console.log((0, function_1.sum)(2, 3, 4, 5, 6)); // output 20
console.log((0, function_2.subtract)(15, 5, 5)); // output 5
console.log((0, function_3.multiply)(2, 3, 4)); // output 24
