// Question 127: Convert a traditional function expression to an arrow function.

//Traditional function
function traditionalFunction() : number{
    return 24 + 26;
}

//convert to Arrow Function
let arrowFunction = () : number =>{
         return 24 + 26
}

console.log(traditionalFunction());// output 50
console.log(arrowFunction()); // output 50

