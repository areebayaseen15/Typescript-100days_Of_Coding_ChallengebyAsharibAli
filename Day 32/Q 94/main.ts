//Question 94: Use the .map() method to create a new array that contains the length of each word from 
// an array of words.

let words : string[] = ["Ayesha" , "Areeba", "Huzaifa", "Laiba"];
let lengthOfWords : number[] = words.map((word) => word.length);
console.log(lengthOfWords);
// Each number in the new array represents the length of the corresponding word in the original array.

