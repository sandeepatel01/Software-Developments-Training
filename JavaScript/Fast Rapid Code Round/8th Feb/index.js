// Problem: Create an array containing different types of teas.
let teas = ["Green Tea", "Black Tea", "Oolong Tea", "White Tea", "Herbal Tea"];

// Problem: Add "Chamomile Tea" to the existing list of teas.
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas.
teas.splice(2, 1); // slice contains the index and the number of elements to remove
console.log(teas);

// Problem: Find the index of "Oolong Tea" in the list of teas and remove it.
const index = teas.indexOf("Oolong tea");
if (index !== -1) {
  teas.splice(index, 1);
}
console.log(teas);

// Problem: Filter the list to only include teas that are caffeinated - ["Green Tea", "Black Tea", "Chamomile Tea"].
const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");
console.log(caffeinatedTeas);

// Problem: Sort the list of teas in alphabetical order.
teas.sort();
console.log(teas);

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding"Herbal Tea").
let caffeinatedCount = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedCount++;
  }
}
console.log(caffeinatedCount);

// Problem: Use a for loop to create a new array with all tea names in uppercase.
let uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);

// Problem: Use a for loop to find the tea name with the most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
};
console.log(longestTea);

// Problem: Use a for loop to reverse the order of teas in the array.
for (let i = teas.length - 1; i >= 0; i--) {
  console.log(teas[i]);
}