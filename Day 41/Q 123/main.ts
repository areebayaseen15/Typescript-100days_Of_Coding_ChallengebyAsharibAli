//Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.


function logUntillVowelFound(str:string) : void{
    let vowels = "aeiouAEIOU";
    for(let char of str){
        if(vowels.includes(char)){
            console.log(`vowel found : ${char}`);
            break; //stops the loop as first vowel found
        }
        console.log(char);
        
    }
}
console.log(logUntillVowelFound("Areeba")); //stops at A
console.log(logUntillVowelFound("mnpqorstu")); //stops at o

