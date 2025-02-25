let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Gas", amount: 100, category: "Transportation" },
  { description: "Electricity Bill", amount: 120, category: "Utilities" },
  { description: "Dinner", amount: 75, category: "Food" },
  { description: "Internet Bill", amount: 60, category: "Utilities" },
];

// Calculate total expenses
let expenseReport = expenses.reduce((acc, expense) => {
  // acc[expense.category] += expense.amount;
  acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
  return acc;
}, { Food: 0, Transportation: 0, Utilities: 0 });

console.log(expenseReport);  // { Food: 125, Transportation: 100, Utilities: 180 }


let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send Email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority)

console.log(pendingSortedTasks);


let movieRating = [
  { title: "Movie A", rating: [4, 5, 3] },
  { title: "Movie B", rating: [5, 5, 4] },
  { title: "Movie C", rating: [3, 4, 2] },
];

let averageRatings = movieRating.map((movie) => {
  let total = movie.rating.reduce((sum, rating) => sum + rating, 0);
  let avrage = total / movie.rating.length;

  // movie.rating = avrage.toFixed(2); // Changed Original Arr - Bad 
  // return movie;

  return { title: movie.title, rating: avrage.toFixed(2) }
});

console.log(averageRatings);
console.log(movieRating);

