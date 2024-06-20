// Question 116: Create a switch case that matches several cases to the same code block, representing 
// seasons

function seasons(month: string): void {
  switch (month) {
    case "December":
    case "January":
    case "February":
      console.log("Its Winter");
      break;
    case "March":
    case "April":
    case "May":
      console.log("Its spring");
      break;
    case "June":
    case "July":
    case "August":
      console.log("Its Summer");
    case "September":
    case "October":
    case "November":
      console.log("Its Autumn");
      break;
    default:
      console.log("Invalid Month");
  }}
  seasons("January"); // Output Its winter


// Or


function logSeason(month: number): void {
    switch (month) {
      case 12:
      case 1:
      case 2:
        console.log("Winter");
        break;
      case 3:
      case 4:
      case 5:
        console.log("Spring");
        break;
      case 6:
      case 7:
      case 8:
        console.log("Summer");
        break;
      case 9:
      case 10:
      case 11:
        console.log("Fall");
        break;
      default:
        console.log("Invalid month");
        break;
    }
}

logSeason(4); // Outputs: Spring
// Multiple cases share the same code block to represent each season.