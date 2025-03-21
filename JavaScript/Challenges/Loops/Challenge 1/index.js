function distributeGifts(totalGifts, friends) {
  let givenGifts = 0;

  for (let i = 0; i < friends; i++) {
    if (totalGifts > 0) {
      givenGifts++;
      totalGifts--;
    }
  }

  return givenGifts;
};