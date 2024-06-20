//Question 128: Create an arrow function that takes multiple parameters and returns the product of all
//  parameters.


//Creating arroow function
let arrowFunction = (num1:number,num2:number,num3:number) : number =>{
    return num1 * num2 * num3 // produt of all parameters
};
console.log(arrowFunction(2,3,4)); //Output 24

//Or

let multipleParameters = (...nums : number[]) : number => {
    return nums.reduce((total , number)=> total * number)
}
console.log(multipleParameters(2,3,4)); //output 24
