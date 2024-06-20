// Question 126: Explain how the this keyword changes its value when used inside a nested function 
//within a method.
// Demonstrates 'this' behavior change in a nested function
var myName = {
    name: "Areeba",
    outerfunction: function () {
        var _this = this;
        console.log(this.name); // Works as expected, logs "Areeba"
        var nestedFunction = function () {
            console.log(_this.name); // Still accesses myName 'name' due to arrow function capturing 'this' from outer scope
        };
        nestedFunction(); //Areeba
    },
};
myName.outerfunction(); //Areeba
// This example shows that using an arrow function for the inner method preserves the 'this' conte
