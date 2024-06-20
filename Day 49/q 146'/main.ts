// Question 146: Show an example of a callback function used to filter an array of numbers.

function callbackExample(callback: (...numbers:number[])=> void){
    let numbers = [1,2,3,4,5,6,7,8,9,10]
    callback(...numbers);
}
callbackExample(function(...numbers:number[]){
    let filteredNumbers = numbers.filter((number)=>number > 5)
    console.log(filteredNumbers );// output [ 6, 7, 8, 9, 10 ]
    
});