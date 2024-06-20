//Question 124: Create a function inside an object that returns the object's own name property using the
// this keyword.

let person = {
  name: "Areeba",
  fatherName: "Yaseen",
  getName: function (): string {
    return this.name;
  },
};
console.log(person.getName()); //output Areeba

