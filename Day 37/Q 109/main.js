//Question 109: Write an if statement that logs "Good Morning" if the current time is before 12 PM.
var currenttime = new Date();
if (currenttime.getHours() < 12) {
    console.log("Good Morning");
}
