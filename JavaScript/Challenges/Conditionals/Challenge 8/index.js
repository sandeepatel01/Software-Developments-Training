function checkNumberType(num) {
  if (num === 0) {
    return "Zero";
  } else if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  }
};