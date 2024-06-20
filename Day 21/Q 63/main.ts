// Q 63:Shape Shifter: Write a program that can describe either a circle or a rectangle using a special
//  type alias, including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles

type shape = {
    kind: "circle" |"rectangle",
    radius?: number;    //only for circles
    width?:number;      //for rectangle
    height?: number;    // for rectangle

};
// Describing a circle using our Shape type
let circle: shape = {
    kind: "circle",
    radius: 5,
  };

  // Describing a rectangle using our Shape type
let rectangle: shape = {
  kind: "rectangle",
  width: 10,
  height: 20,
};

// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
// We made a flexible program that can describe different shapes in detail.
