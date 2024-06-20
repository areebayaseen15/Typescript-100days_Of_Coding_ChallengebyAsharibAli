// Qn0 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets 
// of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order,
//  then log the result.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var set1prices = [1200, 1500, 1000];
var set2prices = [1100, 1300, 1600];
var result = __spreadArray(__spreadArray([], set1prices, true), set2prices, true).sort(function (a, b) { return a - b; });
console.log(result);
