//Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.

//First craete a map of the students:
let students = new Map<number,string>();
students.set(1 , "Hannan");
students.set(2 , "Saim");
students.set(3 , "Umer");

console.log(students);

// Iterate over a Map of student IDs and names, and log each pair to the console.

students.forEach((name , id)=>{
    console.log(`Student ID:${id} , Name : ${name}`);
    
})
// This loop goes through each student and logs their ID and name.