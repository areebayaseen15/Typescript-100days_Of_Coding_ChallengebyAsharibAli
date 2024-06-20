//Question 136: Use console.log() to debug and track the value of a variable inside a loop.
for (var i = 0; i < 5; i++) {
    console.log("Iteration of i is ".concat(i, ", value: ").concat(i * 2));
}
for (var i = 0; i < 5; i++) {
    var value = i * 2;
    console.log('The value of i is:', i);
    console.log('The value of value is:', value);
}
