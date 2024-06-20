// Question 117: Implement a switch statement that evaluates an expression and uses the default case if
// none of the cases match.
function result(score) {
    switch (score) {
        case "A1":
            console.log("Auspecious");
            break;
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Need To work hard");
            break;
        case "D":
            console.log("Poor");
            break;
        default:
            console.log("Fail");
            break;
    }
}
result("f");
