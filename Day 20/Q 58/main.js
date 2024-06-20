// Q 58: Write a simple program that can take lots of scores and find their average.
function averageScors() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(averageScors(90, 100, 80, 60));
