// Loops & numbers:
// 1. Sum digits of a number
// Given a number, return the sum of its digits.
// sumDigits(123) → 1 + 2 + 3 = 6
const sumDigits = num => {
  let stringArray = String(num).split('');
  let result = 0;

  for (const elem of stringArray) {
    result += Number(elem);
  }

  return result;
};
// 2. Count down and sum
// Loop from n down to 1, return the sum of only numbers divisible by 3.
// sumDivisibleByThree(10) → 3 + 6 + 9 = 18
const sumDivisibleByThree = num => {
  let sum = 0;

  for (let i = num; i >= 0; i--) {
    if (i % 3 === 0) {
      sum += i;
    }
  }

  return sum;
};
// Arrays:
// 3. Remove falsy values
// Loop through an array and return a new array with all falsy values removed (false, 0, '', null, undefined).
// removeFalsy([1, false, 2, '', 3, null, 4]) → [1, 2, 3, 4]
const removeFalsy = array => {
  let result = [];

  for (const elem of array) {
    if (elem) {
      result.push(elem);
    }
  }

  return result;
};
// 4. Find average
// Return the average of all numbers in an array.
// findAverage([1, 2, 3, 4, 5]) → 3
const findAverage = array => {
  let total = 0;

  for (const elem of array) {
    total += elem;
  }

  return total / array.length;
};
// 5. Chunk array
// Split an array into groups of n size and return array of arrays.
// chunk([1, 2, 3, 4, 5, 6], 2) → [[1, 2], [3, 4], [5, 6]]
const chunk = (array, length) => {
  let result = [];

  for (let i = 0; i < array.length; i += length) {
    result.push(array.slice(i, i + length));
  }

  return result;
};
// Objects & arrays of objects:
// 6. Filter by property
// Given an array of objects and a minimum rating, return only objects above that rating.
// filterByRating([{name: "A", rating: 4}, {name: "B", rating: 2}], 3) → [{name: "A", rating: 4}]
const filterByRating = (arrayOfObjects, minRating) => {
  let result = [];

  for (const elem of arrayOfObjects) {
    if (elem.rating > minRating) {
      result.push(elem);
    }
  }

  return result;
};
// 7. Get unique properties
// Given an array of objects, return an array of unique values for a given property.
// getUnique([{type: "cat"}, {type: "dog"}, {type: "cat"}], "type") → ["cat", "dog"]
const getUnique = (arrayOfObjects, typeValue) => {
  let result = [];

  for (const elem of arrayOfObjects) {
    if (result.includes(elem[typeValue])) {
    } else {
      result.push(elem[typeValue]);
    }
  }

  return result;
};
// Strings:
// 8. Count vowels
// Count how many vowels are in a string.
// countVowels("javascript") → 3
const countVowels = str => {
  const matches = str.match(/[aeiou]/gi);

  return matches?.length ?? 0;
};
// 9. Truncate string
// If a string is longer than n characters, cut it and add "..." at the end.
// truncate("Hello world", 5) → "Hello..."
const truncate = (string, length) => {
  let truncWord = string;

  if (string.length > length) {
    truncWord = string.slice(0, length) + '...';
  }

  return truncWord;
};
// Mixed:
// 10. Group by first letter
// Given an array of words, return an object where each key is a first letter and value is array of words starting with that letter.
// groupByLetter(["apple", "banana", "avocado", "blueberry"]) → { a: ["apple", "avocado"], b: ["banana", "blueberry"] }
const groupByLetter = array => {
  let newObject = {};

  for (const elem of array) {
    const key = elem[0];

    if (newObject[key] === undefined) {
      newObject[key] = [];
    }

    newObject[key].push(elem);
  }

  return newObject;
};
