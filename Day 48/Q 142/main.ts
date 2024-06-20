//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.

let hellopromise = new Promise<string>((resolve) =>{
 setTimeout(()=> {
    resolve("Hello,World!");
 }, 2000);
});
hellopromise.then((message) => {console.log(message);
});
// After 2 seconds, "Hello, World!" will be logged to the console.