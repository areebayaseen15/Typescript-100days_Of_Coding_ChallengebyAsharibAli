// Question 95: Write a function that uses the .filter() method to return an array of numbers greater
//  than 10.

function filters(number:number[]) :number[]{
    return number.filter((number) => number>10)
}
console.log(filters([15, 2 , 30]));// it will only contain numbers greater than 10

