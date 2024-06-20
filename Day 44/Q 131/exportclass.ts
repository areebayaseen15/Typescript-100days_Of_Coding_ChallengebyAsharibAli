// export class

// export class person {
//     name : string;
//     Constructor (name : string){
//         this.name = name;
//     }
//     greet(){
//         console.log(`Hello, My name is ${this.name}`);
        
//     }
// }
// // // Exports the student class

// In file: Person.ts
export class Person {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  // Exports the Person class