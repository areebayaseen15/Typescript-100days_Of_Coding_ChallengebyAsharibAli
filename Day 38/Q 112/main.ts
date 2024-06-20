//Question 112: Create a Map that stores the names of countries as keys and their capitals as values.
// Add three countries to the Map.
 
//Map=> A Map holds key-value pairs where the keys can be any datatype.
// A Map remembers the original insertion order of the keys.

let countries = new Map<string,string>();
countries.set("Islamabad" , "Pakistan");    //adds islamad to Pakistan
countries.set("Dehli", "India");      //adds dehli to india
countries.set("Baijing", "China");   //adds baijing to china

console.log(countries);
