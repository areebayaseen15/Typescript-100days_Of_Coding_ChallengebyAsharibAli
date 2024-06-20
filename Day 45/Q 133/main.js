"use strict";
//Question 133: Write a JavaScript object and convert it into a JSON string.
Object.defineProperty(exports, "__esModule", { value: true });
// Javascript object
var JavaScriptObject = {
    person: "Areeba",
    age: 24,
    city: "karachi",
};
//convert the object into JSON string
var jsonString = JSON.stringify(JavaScriptObject);
console.log(jsonString); // output;  {"name":"Areeba","age":24,"city":"Karachi"}
