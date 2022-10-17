// CLIENT HELPERS HERE

export function sumArray(numericStringArray) {
  return numericStringArray.reduce((memo, value) => Number(memo) + Number(value), 0);
}

export function avgStarValue(starsBreakdown) {
  return sumArray(Object.entries(starsBreakdown)
    .map((ratingArray) => ratingArray[0] * ratingArray[1]))
    / sumArray(Object.values(starsBreakdown));
}
