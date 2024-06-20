// Question 146: Show an example of a callback function used to filter an array of numbers.
function callbackExample(callback) {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    callback.apply(void 0, numbers);
}
callbackExample(function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var filteredNumbers = numbers.filter(function (number) { return number > 5; });
    console.log(filteredNumbers); // output [ 6, 7, 8, 9, 10 ]
});
