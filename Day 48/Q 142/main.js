//Question 142: Create a Promise that resolves with "Hello, World!" after 2 seconds.
var hellopromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello,World!");
    }, 2000);
});
hellopromise.then(function (message) {
    console.log(message);
});
// After 2 seconds, "Hello, World!" will be logged to the console.
