//Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
function comparingString(name1, name2) {
    return name1.toLowerCase() === name2.toLowerCase();
}
console.log(comparingString("areeba", "AREEBA")); // True
console.log(comparingString("areeba", "quraishi")); //False
