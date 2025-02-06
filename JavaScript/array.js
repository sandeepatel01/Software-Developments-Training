let fruits = ["Apple", "Cherry", "Banana"];
let internationFruits = new Array("Kivi", "Avacado", "Dragon fruit");

console.log(fruits);
console.log(internationFruits);

fruits[0] = "Blueberry";

fruits.push("New Fuit");
fruits.unshift("Add new fuits");
fruits.pop();

console.log(fruits[0]);
console.log(fruits.length);