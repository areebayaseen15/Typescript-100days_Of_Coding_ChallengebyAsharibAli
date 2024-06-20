//Question 134: Take a JSON string and parse it into a JavaScript object.

const jsonString1 = `{
    "person":"Areeba",
    "age":24,
    "city":"karachi"
}`

// Parses the JSON string back into a JavaScript object
const JavaScriptObject1 = JSON.parse(jsonString1);

console.log(JavaScriptObject1); // Output; { person: 'Areeba', age: 24, city: 'karachi' }
// This  shows how to take a JSON string and convert it back into a JavaScript object.