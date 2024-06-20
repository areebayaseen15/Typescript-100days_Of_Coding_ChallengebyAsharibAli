//Question 135: Explain how you can format a JSON string with proper indentation for readability.

//// Reusing the person object from Question 133
let JavaScriptObject3 ={
    person : "Areeba",
    age : 24,
    city : "karachi",
}

//convert the object into JSON string with identication

let jsonString3 = JSON.stringify(JavaScriptObject3,null, 2); 
// The '2' specifies the number of spaces to use as white space


console.log(jsonString3); 
/* Outputs:
{
  "name": "Alice",
  "age": 30,
  "city": "Wonderland"
}
*/
// Shows how adding indentation to the JSON string makes it easier to read.
