//Question 92: Write a function to remove the last element from an array and return the removed element.

function removeLastElement<T>(fruits:T[]) : T | undefined {
    return fruits.pop();
}

let fruits : string[] = ["Apple" , "Mango" , "Banana"]
console.log(removeLastElement(fruits)); //to call remove element
console.log(fruits);  // remainning element in the array


