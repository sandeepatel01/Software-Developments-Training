const languages = ["HTML", "Javascript", "CSS", "C++"];

const newLang = languages.splice(0, 1);

//  Remove
console.log("Original Languages: ", languages);  //  [ 'Javascript', 'CSS', 'C++' ]
console.log("New Languages: ", newLang);  // [ 'HTML' ]

// Add 
newLang.splice(1, 0, "C", "Python")  // Adds "C" and "Python" at index 1

console.log("Add New Languages: ", newLang);  // [ 'HTML', 'C', 'Python' ]

// Replace
newLang.splice(2, 1, "Hindi");  // Replaces element at index 2 ("Python" → "Hindi")
console.log("Replace Python: ", newLang);  // [ 'HTML', 'C', 'Hindi' ]

// Removing all elements from a certain index
newLang.splice(1);  // Removes all elements from index 1 onward
console.log(newLang);