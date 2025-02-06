let numberofGuest = 6;
let pizzaSize;

if (numberofGuest <= 2) {
  pizzaSize = "Small"
} else if (numberofGuest <= 5) {
  pizzaSize = "Medium"
} else {
  pizzaSize = "Large"
}

console.log(pizzaSize);