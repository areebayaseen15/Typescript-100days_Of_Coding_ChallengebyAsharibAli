// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then
//  update the year property to 2021. Show how to perform these operations.


let car1 : any = {
    make : "Toyota",
    model : "Corolla",
    year : 2020
};
// Add new property color and property updating year
car1.color = "blue";
car1.year = 2021;

console.log(car1);
