// Question 117: Implement a switch statement that evaluates an expression and uses the default case if
// none of the cases match.

function result(score: string): string {
  switch (score) {
    case "A1":
      return "Auspecious";
      break;
    case "A":
      return"Excellent";
      break;
    case "B":
      return "Good";
      break;
    case "C":
      return "Need To work hard";
      break;
    case "D":
      return "Poor";
      break;
    default:
      return "Fail";
      break;
  }
}
console.log(result("f"));
//Output Fail //Default case
