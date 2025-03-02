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

// console.log(ChaiRecipe.ingredients.spices); // [ 'Daalchini', 'Ginger' ]
// console.log(ChaiRecipe.ingredients.spices[0]); // Daalchini
// console.log(ChaiRecipe.instruction); // Boil water, add tea leaves, milk, sugar and spices
// console.log(ChaiRecipe.ingredients.milk); // Full Cream Milk

// const person = {
//   name: "Amit",
//   age: 25,
//   greet: function () {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// // console.log(person.name); // Amit
// // console.log(person.age); // 25
// // person.greet(); // Hello, my name is Amit

// console.log(person["name"]); // Amit

// person['age'] = 30;
// console.log(person["age"]); // 30

const population = {
  male: 4,
  female: 93,
  others: 10
};

// Iterate through the object
for (const key in population) {
  // if (population.hasOwnProperty(key)) {

  // }
  console.log(`${key}: ${population[key]}`);
}

