// Q 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. 
// Round the result to two decimal places.

function decimals(num1:number , num2:number){
    return Math.round(num1 * num2 * 100)/100;
}
console.log(decimals(0.2 , 7.6));
