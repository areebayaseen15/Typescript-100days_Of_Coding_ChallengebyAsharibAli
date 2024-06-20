// Question 150: Describe how asynchronous callbacks differ from synchronous code execution
//              Asynchronous and synchronous
//Asynchronous callbacks and synchronous code execution are two fundamental concepts in programming that
//  describe how tasks are executed in relation to each other
console.log("************Synchronous Example******");
//  In synchronous code execution, tasks are performed one after another in a sequential manner. Each task 
// must complete before the next one begins
console.log("Task 1");
console.log('Task 2');
console.log('Task 3');
//will execuate sequentually Output Task 1, Task 2, Task 3
console.log("************Asynchronous Example****************");
// Asynchronous callbacks allow certain tasks to be executed in the background, enabling other code to run 
// without waiting for the asynchronous task to complete. 
console.log('Task 1');
setTimeout(function () {
    console.log('Task 2');
}, 1000);
console.log('Task 3');
//Output Task 1 , Task 3 ,Task 2
