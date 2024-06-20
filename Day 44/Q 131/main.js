"use strict";
//Question 131: Create two modules; one that exports a class, and another that imports the class and 
// creates an instance.
Object.defineProperty(exports, "__esModule", { value: true });
var exportclass_1 = require("./exportclass");
var areeba = new exportclass_1.Person("Areeba");
areeba.greet(); // Outputs: Hello, my name is Areeba
// This snippet imports the Person class and usees to creat instance
