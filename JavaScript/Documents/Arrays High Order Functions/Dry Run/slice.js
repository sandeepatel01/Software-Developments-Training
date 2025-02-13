const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

// Extracting a portion of an array

const newFruits = fruits.slice(2, 4);    // Extracts elements from index 2 to 3 (4 is not included)
console.log("Original: ", fruits);      // Original:  [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log("Updated: ", newFruits);    // Updated:  [ 'Lemon', 'Apple' ]


// Copying an array

const copyFruits = fruits.slice();  // Copies the entire array
console.log("Copied Fruits: ", copyFruits);  // Copied Fruits:  [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]


// Extracting elements from the end

const lastTwoFruits = copyFruits.slice(-2)  // Extracts last two elements
console.log("Last two Fruits: ", lastTwoFruits);  // Last two Fruits:  [ 'Apple', 'Mango' ]


// Extracting without an end index

const fromIndex2 = fruits.slice(2);   // Extracts from index 2 to the end
console.log("All Fruits from index 2: ", fromIndex2);  // All Fruits from index 2:  [ 'Lemon', 'Apple', 'Mango' ]

console.log("Original 😎: ", fruits);  // Original 😎:  [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]