let salesData = [
  { product: "Laptop", price: 1200 },  // sale
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

// let totalSales = salesData.reduce((acc, sale) => (0 + sale.price), 0);
let totalSales = salesData.reduce((acc, sale) => (acc + sale.price), 0);
console.log(totalSales);

let inventory = [
  { name: "Widgeet A", stock: 30 },
  { name: "Widgeet B", stock: 120 },
  { name: "Widgeet C", stock: 45 },
  { name: "Widgeet D", stock: 70 },
]

// let lowStock = inventory.filter((stock) => (stock.stock < 50));
let lowStock = inventory.filter((stock) => {
  return stock.stock < 50
});
console.log(lowStock);

let userActivity = [
  { user: "Sandy", activityCounts: 45 },
  { user: "Aman", activityCounts: 72 },
  { user: "Amit", activityCounts: 33 },
];

// find most active user
let mostActiveUser = userActivity.reduce((maxUser, user) => (user.activityCounts > maxUser.activityCounts ? user : maxUser));
console.log(mostActiveUser);