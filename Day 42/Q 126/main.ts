// Question 126: Explain how the this keyword changes its value when used inside a nested function 
//within a method.

// Demonstrates 'this' behavior change in a nested function
const myName = {
    name: "Areeba",
    outerfunction:function (){
      console.log(this.name); // Works as expected, logs "Areeba"
    

      let nestedFunction = () => {
        console.log(this.name); // Still accesses myName 'name' due to arrow function capturing 'this' from outer scope
      };
  
      nestedFunction();//Areeba
    },
  };
  
  myName.outerfunction(); //Areeba
  // This example shows that using an arrow function for the inner method preserves the 'this' conte