"use strict";
//Question 132: Discuss the difference between default and named exports in JavaScript modules
Object.defineProperty(exports, "__esModule", { value: true });
// In JavaScript modules, both default and named exports are used to export values from a module so
//  they can be used in other modules. However, they have different syntaxes and purposes. Here are the
//  key differences between the two:
// Importing default export
var defaultexport_1 = require("./defaultexport");
(0, defaultexport_1.default)(); // Output: This is a default export
//  importing named export
var namedexport_1 = require("./namedexport");
console.log(namedexport_1.name); // Output: JavaScript
(0, namedexport_1.greet)(); // Output: Hello, JavaScript
// we can  Rename named export during import
var namedexport_2 = require("./namedexport");
(0, namedexport_2.greet)(); // Output: Hello, JavaScript
