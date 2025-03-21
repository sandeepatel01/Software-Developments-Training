function workingDays(days) {
  let totalWorkingDays = 0;

  for (let i = 0; i < days.length; i++) {
    if (days[i] !== "Saturday" && days[i] !== "Sunday") {
      totalWorkingDays++;
    }
  }

  return totalWorkingDays;
};
