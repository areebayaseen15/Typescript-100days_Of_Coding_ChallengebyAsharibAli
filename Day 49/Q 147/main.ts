// Question 147: Explain how to handle errors in a callback pattern.

function data(callback:(error:Error|null , data?:string)=>void
): void{
    const error=new Error("Failed to fetch Data...");// Simulating an error condition
    const data="Some data";
    // Simulate fetching data with a chance of error
    if(Math.random()>0.5){
        callback(null,data);// No error, data is fetched successfully
    }else {
        callback(error); // Passes error to the callback
      }
    }
//// Using the fetchData function with error handling in the callback
data((error,data) => {
    if(error){
        console.error(error.message);// Handles the error
    }else{
        console.log(data); // Processes the data   
    }
});
// Demonstrates a callback pattern where errors are handled gracefully.
