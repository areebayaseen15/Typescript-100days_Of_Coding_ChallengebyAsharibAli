//Question 145: Create a function that accepts a callback and invokes it with some arguments.

function processUserInput(callback: (name:string)=> void){
    let name = "Sir Mubashir Ali";
    callback(name);
}
processUserInput(function(name : string){
    console.log("Hello", name);
    
});