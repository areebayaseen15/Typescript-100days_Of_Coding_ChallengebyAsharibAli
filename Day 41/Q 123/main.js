//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function logUntillVowelFound(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("vowel found : ".concat(char));
            break; //stops the loop as first vowel found
        }
        console.log(char);
    }
}
console.log(logUntillVowelFound("Areeba")); //stops at A
console.log(logUntillVowelFound("mnpqorstu")); //stops at o
