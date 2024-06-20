// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and 
// logs all of its properties and values.

function objectProperty(object:object) {
    for (let property in object){
        console.log(`${property}:${object[property]}`);
    }
};
// Using the function with a car object
objectProperty({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue",
  });
  // It tells us each piece of information stored about the car.