//Question 137: Implement a try-catch block to handle potential errors in a block of code.

import { error } from "console";

try {
    //intentionally causing an error
    throw new Error("Something went wrong");
    
}catch (error){
    console.log(error.message); // Logs the error message
    
}
// This code tries to execute a block that throws an error, and the catch block handles the error graceful