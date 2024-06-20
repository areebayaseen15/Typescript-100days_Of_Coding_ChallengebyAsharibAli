//Question 131: Create two modules; one that exports a class, and another that imports the class and 
// creates an instance.


import { Person } from "./exportclass";

const areeba = new Person("Areeba");
areeba.greet(); // Outputs: Hello, my name is Areeba
// This snippet imports the Person class and usees to creat instance