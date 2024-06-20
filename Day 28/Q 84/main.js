// Replacing Text in a String: Write a function that takes a sentence and replaces all instances of 
// the word "JavaScript" with "TypeScript".
function javascripttotypescript(sentence) {
    return sentence.replace(/javascript/g, "typescript");
}
// Example: Changing a programming language name in a sentence
console.log(javascripttotypescript("I love javascript, javascript is Awseome"));
// Outputs: "I love TypeScript and TypeScript is awesome!"
// Every "JavaScript" in the sentence is changed to "TypeScript".
