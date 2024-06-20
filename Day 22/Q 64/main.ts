// Q 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. 
// For example, if provided with "Age: " and 30, it should give back "Age: 30".

//// This function mixes a text and a number into one text
function combineStringNumbers(text: string , number : number) {
    return text + number
};
console.log(combineStringNumbers("Age: ", 30));
