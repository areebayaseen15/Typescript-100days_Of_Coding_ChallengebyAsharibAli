// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.


//.this
// The then() method provides two callbacks:
// One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.

//.catch =>The catch statement defines a code block to handle any error.

let promise = new Promise<string>((resolve, reject)=>{
    const success = Math.random() > 0.5;// Randomly choose success or failure
    if(success){
        resolve("Success!");
    }else {
        reject(new Error("Failure"))
    }
});
promise.then((result)=>console.log(result));// Handles a successful resolution
promise.catch((error)=> console.log(error.message));// Handles a rejection
