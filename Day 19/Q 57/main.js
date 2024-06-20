// Q 57:Find the Average Grade: Given a list of grades, calculate the average grade.
// List of grades
var grades = [94, 80, 64, 75, 63];
// Average grades
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
// Shows the average grade
console.log(averageGrades);
// First, we add up all the grades. Then, we divide by how many grades there are to get the average.
