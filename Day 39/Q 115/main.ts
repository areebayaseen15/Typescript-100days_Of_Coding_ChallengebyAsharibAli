// Question 115: Use a switch statement to log the days of the week based on a number (1-7).

function daysOfWeek(dayNumber: number): void {
  switch (dayNumber) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("invalid Day Number");
      break;
  }
}
daysOfWeek(3); // Output Wednesday