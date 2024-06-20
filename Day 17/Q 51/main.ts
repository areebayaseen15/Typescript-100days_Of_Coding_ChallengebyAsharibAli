// Q 51:
// Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.


// Original function for calculating the area of a rectangle
function calculateArea(width: number, height: number ): number {
    return width * height;
  }  

// Refactored into an arrow function
let area = (width : number, height : number) :number =>
    width * height

console.log(area(50 , 7));

