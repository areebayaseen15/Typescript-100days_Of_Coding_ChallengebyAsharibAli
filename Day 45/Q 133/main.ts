//Question 133: Write a JavaScript object and convert it into a JSON string.


// Javascript object
let JavaScriptObject ={
    person : "Areeba",
    age : 24,
    city : "karachi",
}

//convert the object into JSON string

let jsonString = JSON.stringify(JavaScriptObject);

console.log(jsonString); // output;  {"name":"Areeba","age":24,"city":""}
