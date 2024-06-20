// Question 104: Create a function that generates a random hexadecimal color code.

function hexaDecimal(): string{
 const color = "#" +Math.floor(Math.random() * 0xfffffff).toString(16).padStart(6, "0")
 return color;
}
console.log(hexaDecimal());
// / We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.

