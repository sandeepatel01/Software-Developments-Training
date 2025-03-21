function isLeapYear(year) {
  // Return "Leap Year" if the year is a leap year, otherwise return "Not a Leap Year"
  if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    return "Leap Year";
  } else {
    return "Not a Leap Year";
  }
};