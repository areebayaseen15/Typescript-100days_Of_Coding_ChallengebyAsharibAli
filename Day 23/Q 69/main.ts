// Q 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both 
// the quotient and the remainder. Use an object to return both values.

function divideAndReminder(dividend : number , devisor : number){
//    calculate quotient and reminder
    let quotient = Math.floor(dividend / devisor);
    let reminder = dividend % devisor;

    // Return both in an object
    return {quotient , reminder};
}

console.log(divideAndReminder(10 , 3));

