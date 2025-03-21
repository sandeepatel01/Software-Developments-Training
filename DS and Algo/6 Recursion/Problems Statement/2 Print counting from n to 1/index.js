// Print Counting from n to 1

function printCounting(N) {
  // Base Case
  if (N === 0) {
    return;
  }

  // Recursive Case
  console.log(N);
  printCounting(N - 1);
};

printCounting(5);