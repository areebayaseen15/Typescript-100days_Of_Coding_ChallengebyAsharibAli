//Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceElement(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruit = ["Apple", "Banana", "Strawberry"];
replaceElement(fruit);
console.log(fruit);
