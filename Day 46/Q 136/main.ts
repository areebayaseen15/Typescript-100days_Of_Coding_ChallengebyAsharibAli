//Question 136: Use console.log() to debug and track the value of a variable inside a loop.

//repetition of the loop is called an iteration. 
for (let i = 0; i < 5; i++) {
 console.log(`Iteration of i is ${i}, value: ${i*2}`);
     
}
console.log(`,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`);

 //Or

for (let i = 0; i < 5; i++) {
    let value = i * 2;
    console.log('The value of i is:', i);
    console.log('The value of value is:', value);
}
