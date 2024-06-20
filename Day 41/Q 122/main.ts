//Question 122: Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.


let i = 10
while( i >= 1){
    if(i === 5){
        console.log(i);
        break; // Exits the loop when counter reaches 5
        
    }
    console.log(i);
    i--;
    
}
// Logs the countdown from 10 but stops abruptly when it hits 5.