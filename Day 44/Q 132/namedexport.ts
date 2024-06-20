//     Named Export 

// A module can have multiple named exports. This is useful when you need to export multiple values from 
// a module. When importing named exports, you must use the same names as the exported values, enclosed in
//  curly braces {}. You can also use as to rename them during import.

export const name = 'JavaScript';
export function greet() {
  console.log('Hello, ' + name);
}

