// CLIENT HELPERS HERE
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

export function sumArray(numericStringArray) {
  return numericStringArray.reduce((memo, value) => Number(memo) + Number(value), 0);
}

export function avgStarValue(starsBreakdown) {
  return sumArray(Object.entries(starsBreakdown)
    .map((ratingArray) => ratingArray[0] * ratingArray[1]))
    / sumArray(Object.values(starsBreakdown));
}

export function objectSorter(unsortedObj, sortCriteria) {
  Object.values(unsortedObj).sort((a, b) => {
    if (a[sortCriteria] > b[sortCriteria]) {
      return 1;
    }
    if (a[sortCriteria] < b[sortCriteria]) {
      return -1;
    }
    return 0;
  });
  return unsortedObj;
}

export function date(inputDate) {
  const output = []; // [exact BRD date format, prettified date format]
  const okDate = new Date(inputDate).toDateString('en-us');
  output.push(okDate.substring(4, okDate.length));
  output.push(`${formatDistanceToNow(new Date(inputDate))} ago`);
  return output;
}

export const charMeaning = {
  Size: ['A size too small', 'half a size too small', 'Perfect', 'half a size too big', 'A size to big'],
  Width: ['Too narrow', 'Slightly Narrow', 'Perfect', 'Slightly wide', 'Too Wide'],
  Comfort: ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'],
  Quality: ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  Length: ['Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  Fit: ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly long', 'runs long'],
};