//Question 132: Discuss the difference between default and named exports in JavaScript modules

// In JavaScript modules, both default and named exports are used to export values from a module so
//  they can be used in other modules. However, they have different syntaxes and purposes. Here are the
//  key differences between the two:

// Importing default export
import myFunction from './defaultexport';
myFunction();  // Output: This is a default export


//  importing named export
import { name, greet } from "./namedexport";
console.log(name);  // Output: JavaScript
greet();  // Output: Hello, JavaScript

// we can  Rename named export during import
import { greet as sayHello } from './namedexport';
sayHello();  // Output: Hello, JavaScript
