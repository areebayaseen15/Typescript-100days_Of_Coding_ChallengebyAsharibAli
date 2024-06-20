//Question 129: Explain how this behaves differently in arrow functions compared to traditional functions.
var _this = this;
// comparing "this" in traditional function and arrow function
// In regular functions the this keyword represented the object that called the function, 
var traditionalFunction = {
    property: "car",
    accessProperty: function () {
        console.log("Tradinal Function:", this.property); //// 'this' refers to traditionalFunction object
    }
};
traditionalFunction.accessProperty();
// The handling of "this" is different with arrow functions there are no binding of this.
//Arrow functions do not bind their own this, instead, they inherit the one from the parent scope,
var arrowFunction = {
    property: "Bike",
    accessProperty: function () {
        console.log("arrowFunction", _this.property);
    }
};
arrowFunction.accessProperty(); // output Undefined (as this propert does not work same in arrow function
// as it does in tradinal function)
