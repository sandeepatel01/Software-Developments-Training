// ************** Array *************

let teas = ["Masala Chai", "Green Chai", "Black Chai", "Ginger Chai"];

console.log(teas[0]); // Masala Chai
console.log(`Total Chai type: ${teas.length}`); // Total Chai type: 4

teas.push("Herbal Tea") // Add value of array End - Insert at last position

const data = teas.pop(); // return pop value
console.log(data); // Herbal Tea


let index = teas.indexOf("Ginger Chai");
console.log(index); // 3

if (index !== -1) {  // when Ginger Chai not find then return -1
  teas.splice(index, 1);
}
console.log(teas); // Modify original arr - [ 'Masala Chai', 'Green Chai', 'Black Chai' ]

teas.forEach((chai, index) => {
  console.log(`${index}: ${chai}`);
}) // chai - all values of arr


// *********** Array Operations *****************

let moreTeas = ["Oolong Tea", "White Tea"];

let allTeas = teas.concat(moreTeas);
console.log(allTeas);

let newTeas = [...teas, "Chamolina tea"];
console.log(newTeas);  // [ 'Masala Chai', 'Green Chai', 'Black Chai', 'Chamolina tea' ]


// ************************ Objects Literals *******************************

let ChaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brown sugar",
    spices: ["Daalchini", "Ginger"]
  },
  instruction: "Boil water, add tea leaves, milk, sugar and spices"
};

console.log(ChaiRecipe.ingredients.spices[1]); // Ginger

let updatedChaiRecipe = {
  ...ChaiRecipe, //sprede ChaiRecipe
  instruction: "Boil water, add tea leaves, milk, sugar and spices with some love",
}

console.log(updatedChaiRecipe);

let { name, ingredients } = ChaiRecipe  // Objects Destructing
let [firstChai, secondChai] = teas //Array Destructing

console.log("Ingredients: ", ingredients);
console.log("secondChai: ", secondChai);