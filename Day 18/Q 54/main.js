// Q 54 : Making Flexible Object Keys: Learn how to set up a list where you can change 
// the name of each section based on what you need at that moment, like adjusting labels based on
//  user choice.
// A way to make a flexible list
function flexibleList(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preferenc
var userPreference = flexibleList("theme", "dark");
// Showing the user's choice
console.log(userPreference);
