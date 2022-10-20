// CLIENT HELPERS HERE

export function sumArray(numericStringArray) {
  return numericStringArray.reduce((memo, value) => Number(memo) + Number(value), 0);
}

export function avgStarValue(starsBreakdown) {
  return sumArray(Object.entries(starsBreakdown)
    .map((ratingArray) => ratingArray[0] * ratingArray[1]))
    / sumArray(Object.values(starsBreakdown));
}

export function objectSorter(unsortedObj, sortCriteria) {
  const eachObjectsValues = Object.values(unsortedObj);
  console.log('pre-sort', eachObjectsValues);
  Object.values(unsortedObj).sort((a, b) => {
    if (a[sortCriteria] > b[sortCriteria]) {
      return 1;
    }
    if (a[sortCriteria] < b[sortCriteria]) {
      return -1;
    }
    return 0;
  });
  console.log(unsortedObj);
  return unsortedObj;
}
