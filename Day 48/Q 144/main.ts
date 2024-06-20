// Question 144: Explain the use of the Promise.all() method with an example.

let promise1 = Promise.resolve(3);
let promise2 = 50;
let promise3 = new Promise<string>((resolve)=>{
    setTimeout(resolve,100,"foo");
});

Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values); //[ 3, 50, 'foo' ]
    
});
// / This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their
//  results.