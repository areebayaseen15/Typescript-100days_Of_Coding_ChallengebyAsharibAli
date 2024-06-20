// Question 125: Modify a method in an object to use the this keyword to access another property in 
// the same object.

let student = {
    name: "Areeba",
    fatherName: "Yaseen",
    age: 24,
    city: "Karachi",
    education: "B.com",
    course: "Cloud applied for GenAI",
    studentFullName: function (): string {
      return `${this.name} ${this.fatherName}`;
    },
  };
  console.log(student.studentFullName()); // Areeba Yseen
  
  