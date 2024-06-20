//Question 74: Swapping Variables: Demonstrate how to swap the values of two variables.
// Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
// This function swaps the values of two variables
function swapValues() {
    var a = 5;
    var b = 10;
    console.log("Before swaping value a = ".concat(a, " and b = ").concat(b));
    //   let temp = a;
    //   a = b;
    //   b = temp;
    //   console.log(`After swaping values a =${a} and b =${b}`);
    // or
    console.log("After swaping values a =".concat(b, " and b =").concat(a));
}
swapValues(); // We use a temporary variable to hold one value while we swap them, like a magic trick!
