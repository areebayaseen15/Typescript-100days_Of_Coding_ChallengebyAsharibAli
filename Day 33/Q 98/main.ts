//Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

function daysLeftUntillNewYear() : number{
    const today = new Date();
    const newYear = new Date(today.getFullYear() + 1 , 0 , 1);
    const diff = newYear.getTime()- today.getTime()
    const days = Math.ceil(diff/ (1500 * 60 * 60 * 24));
    return days;
} 
console.log(daysLeftUntillNewYear() + "days left untill new Year.");
