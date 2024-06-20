// Qno 49:
// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple 
// hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function myhobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby, "."));
    });
}
myhobbies("reading", "coding", "sleeping");
