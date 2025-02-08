function totalWater(waterAmounts) {
  let totalAmountofWater = 0;

  for (let i = 0; i < waterAmounts.length; i++) {
    totalAmountofWater = totalAmountofWater + waterAmounts[i];
  }

  return totalAmountofWater;
};