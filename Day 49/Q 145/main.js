//Question 145: Create a function that accepts a callback and invokes it with some arguments.
function processUserInput(callback) {
    var name = "Sir Mubashir Ali";
    callback(name);
}
processUserInput(function (name) {
    console.log("Hello ", name);
});
