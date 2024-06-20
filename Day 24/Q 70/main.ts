// Q 70:Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers 
// from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.


// This function prints numbers from 1 to 5 using a loop

function loopWithLet() {
    for (let i = 1; i <= 5 ; i++ )
        {
            // Uses let for loop variable i
            console.log(i);     //logs number from 1 to 5
            
        }
}
loopWithLet()