function findLargest(a, b, c) {
  // Return the largest among a, b, and c
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  };
};