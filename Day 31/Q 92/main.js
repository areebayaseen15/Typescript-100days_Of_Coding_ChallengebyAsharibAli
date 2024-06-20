//Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(fruits) {
    return fruits.pop();
}
var fruits = ["Apple", "Mango", "Banana"];
console.log(removeLastElement(fruits));
console.log(fruits);
