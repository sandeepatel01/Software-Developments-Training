// Problem: Create an object representing a type of tea with properties for name, type, and caffeine content.
const tea = {
  name: "Green Tea",
  type: "Green",
  caffeine: "Low"
}

// Problem: Access and print the name and type properties of the tea object.
// console.log(tea.name);
// console.log(tea.type);


//ProbLem: Add a new property origin to the tea object.
tea.origin = "India";


//Problem: Change the caffeine levet of the tea object to "Medium".
tea.caffeine = "Medium";


//Probtem: Remove the type property from the tea object.
delete tea.type;


//Problem: Check if the tea object has a property origin.
if ("origin" in tea) {
  // console.log("The tea has an origin.");
}


//Probtem: Use a for. .. in loop to print all properties of the tea object.
for (let key in tea) {
  // console.log(`${key}: ${tea[key]}`);
}


//Problem: Create a nested object representing different types of teas and their properties.
const newTea = {
  tea: {
    name: "Green Tea",
    type: "Green",
    caffeine: "Low"
  },
  tea2: {
    name: "Black Tea",
    type: "Black",
    caffeine: "Medium"
  }
}


//Problem: Copy the nested tea object properties in to a new object.
const newTea2 = JSON.parse(JSON.stringify(newTea));

newTea2.tea = {
  name: "Chamomile Tea",
  type: "Chamomile",
  caffeine: "Low"
}

// console.log(newTea);
// console.log(newTea2);

// Problem: Create a new object representing a fruits name and color.
const fruits = {
  name: "Apple",
  color: "Red",
};

// Problem: Copy the fruits object in to a new object and change the name to "Banana".
const newFruits = {
  ...fruits,
  name: "Banana",
  color: "Yellow",
};

console.log(fruits);
console.log(newFruits);
