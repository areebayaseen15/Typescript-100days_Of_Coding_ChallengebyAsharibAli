// Qno 53:Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what 
// a computer programmer knows, like coding languages, tools, and software frameworks. Find a way 
// to get three specific skills from this list and show them.


let programmerSkills = {
    languages: ["Java", "TypeScript", "Python"],
    frameworks: ["React", "node.js", "Anguar"],
    tools: ["Git", "Webpack", "Docker"],
  };

  let {languages , frameworks , tools} = programmerSkills

console.log(
    `Language: ${languages[0]}, Framework: ${frameworks[0]}, Tool: ${tools[0]}`
  );

  
  console.log(
    `Language: ${languages[1]}, Framework: ${frameworks[1]}, Tool: ${tools[1]}`
  );
  

  console.log(
    `Language: ${languages[2]}, Framework: ${frameworks[2]}, Tool: ${tools[2]}`
  );
  