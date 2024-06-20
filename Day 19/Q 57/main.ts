// Q 57:Find the Average Grade: Given a list of grades, calculate the average grade.


// List of grades
let grades = [94 , 80 , 64 , 75 , 63];

// Average grades

let averageGrades = grades.reduce((total , grade) => total + grade,0) / grades.length


// Shows the average grade
console.log(averageGrades);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.

