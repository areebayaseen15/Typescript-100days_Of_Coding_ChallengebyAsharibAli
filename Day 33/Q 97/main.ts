//Question 97: Write a function that returns the current date in the format "DD-MM-YYYY".


function getCurrentDateFormatted(): string {
    const now: Date = new Date();
    const day: string = String(now.getDate()).padStart(2, "0"); // Ensures the day is two digits
    const month: string = String(now.getMonth() + 1).padStart(2, "0"); // Adds 1 because months are 0-indexed
    const year: number = now.getFullYear();
    return `${day}-${month}-${year}`;
  }
  
  console.log(getCurrentDateFormatted()); // Outputs the current date in DD-MM-YYYY format
  