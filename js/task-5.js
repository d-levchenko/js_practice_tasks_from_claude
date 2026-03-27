// 1. Reverse words in a sentence
// Return a sentence with words in reversed order.
// reverseWords("Hello world foo") → "foo world Hello"
const reverseWords = str => {
  const array = str.split(/\s+/);
  const reversedArray = array.reverse();
  let string = '';

  for (const elem of reversedArray) {
    string += elem + ' ';
  }

  return string.trim();
};
// 2. Find the second largest number
// Return the second largest number in an array.
// secondLargest([1, 5, 3, 9, 2]) → 5
const secondLargest = array => {
  const sortedArray = array.sort((a, b) => b - a);

  return sortedArray[1];
};
// 3. Count word occurrences
// Given a sentence, return an object with each word and how many times it appears.
// countWords("the cat sat on the mat the cat") → { the: 3, cat: 2, sat: 1, on: 1, mat: 1 }
const countWords = str => {
  let newObj = {};
  const array = str.split(/\s+/);

  for (const elem of array) {
    const key = elem;

    if (newObj[key] === undefined) {
      newObj[key] = 0;
    }

    newObj[key] += 1;
  }

  return newObj;
};
// 4. Flatten and sum
// Given a nested array, return the sum of all even numbers only.
// sumEvenDeep([1, [2, 4], [3, [6, 7]]]) → 12
const sumEvenDeep = array => {
  const flatArray = array.flat(Infinity);
  let res = 0;

  for (const elem of flatArray) {
    if (elem % 2 === 0) {
      res += elem;
    }
  }

  return res;
};
// 5. Remove duplicates and sort
// Remove duplicates from an array and return it sorted from lowest to highest.
// uniqueSorted([3, 1, 2, 3, 1, 4]) → [1, 2, 3, 4]
const uniqueSorted = array => {
  let resArray = [];

  for (const elem of array) {
    if (!resArray.includes(elem)) {
      resArray.push(elem);
    }
  }

  return resArray.sort((a, b) => a - b);
};
// 6. Find missing number
// Given an array of numbers from 1 to n with one missing, find the missing number.
// findMissing([1, 2, 4, 5, 6]) → 3
const findMissing = array => {
  const n = array.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let arraySum = 0;

  for (const elem of array) {
    arraySum += elem;
  }

  return expectedSum - arraySum;
};
// 7. Palindrome check
// Return true if a string reads the same forwards and backwards.
// isPalindrome("racecar") → true
// isPalindrome("hello") → false
const isPalindrome = str => {
  const reversedStr = [...str].reverse().join('');

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};
// 8. Most frequent element
// Return the element that appears most often in an array.
// mostFrequent([1, 2, 2, 3, 3, 3, 4]) → 3
const mostFrequent = array => {
  const newObj = {};

  for (const elem of array) {
    const key = elem;

    if (newObj[key] === undefined) {
      newObj[key] = 0;
    }

    newObj[key] += 1;
  }

  const sortRes = Object.entries(newObj).reduce((prev, current) => {
    return current[1] > prev[1] ? current : prev;
  });

  return Number(sortRes[0]);
};
// 9. Capitalize every other word
// Given a sentence, capitalize every second word starting from index 1.
// alternateCapitalize("hello world foo bar") → "hello WORLD foo BAR"
const alternateCapitalize = str => {
  const arrayOfWords = str.split(/\s+/);
  let resArray = [];
  let resString = '';

  for (let i = 0; i < arrayOfWords.length; i++) {
    if (i % 2 !== 0) {
      resArray.push(arrayOfWords[i].toUpperCase());
    } else {
      resArray.push(arrayOfWords[i].toLowerCase());
    }
  }

  for (const elem of resArray) {
    resString += elem + ' ';
  }

  return resString.trim();
};
// 10. Sum of object values
// Given an array of objects, return the sum of a specific numeric property.
// sumProperty([{price: 10}, {price: 20}, {price: 30}], "price") → 60
const sumProperty = (array, keySummary) => {
  let summary = 0;

  for (const elem of array) {
    summary += elem[keySummary];
  }

  return summary;
};
