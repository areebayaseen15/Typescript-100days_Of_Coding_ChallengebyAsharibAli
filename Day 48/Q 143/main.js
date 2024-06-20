// Question 143: Show how to use the .then() and .catch() methods to handle Promise resolution and rejection.
//.this
// The then() method provides two callbacks:
// One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.
//.catch =>The catch statement defines a code block to handle any error.
var promise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5; // Randomly choose success or failure
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
promise.then(function (result) { return console.log(result); }); // Handles a successful resolution
promise.catch(function (error) { return console.log(error.message); }); // Handles a rejection
