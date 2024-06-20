// Q 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both 
// the quotient and the remainder. Use an object to return both values.
function divideAndReminder(dividend, devisor) {
    //    calculate quotient and reminder
    var quotient = dividend / devisor;
    var reminder = dividend % devisor;
    // Return both in an object
    return { quotient: quotient, reminder: reminder };
}
console.log(divideAndReminder(10, 3));
