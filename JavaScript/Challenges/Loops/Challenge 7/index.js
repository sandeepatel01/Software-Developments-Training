function totalStars(starLevels) {
  let totalNumberofStars = 0;

  for (let i = 0; i < starLevels.length; i++) {
    totalNumberofStars = totalNumberofStars + starLevels[i].length;
  }

  return totalNumberofStars;
};