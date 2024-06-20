"use strict";
// export class
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Person;
}());
exports.Person = Person;
// Exports the Person class
