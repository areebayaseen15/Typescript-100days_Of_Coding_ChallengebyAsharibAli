//Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// We ll take map countries from previous question (112):
var countries1 = new Map();
countries1.set("Islamabad", "Pakistan"); //adds islamad to Pakistan
countries1.set("Dehli", "India"); //adds dehli to india
countries1.set("Baijing", "China"); //adds baijing to china
console.log(countries1);
function capitalOfCanada(canada) {
    if (countries1.has("Canada")) {
        console.log("The capital of canada is ".concat(countries1.get("canada")));
    }
    else {
        console.log("Canada is not in the Map");
    }
}
capitalOfCanada(countries1);
// Checks if Canada is in our Map and logs the capital if it exists.
