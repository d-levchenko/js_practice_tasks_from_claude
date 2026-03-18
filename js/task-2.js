// 1. Group by type
// Given an array of mixed values, return an object with two keys — numbers and strings — each containing an array of the matching values.
// groupByType([1, "hi", 2, "world", 3]) → { numbers: [1, 2, 3], strings: ["hi", "world"] }
// 2. Calculate a discount
// Given a price and a discount percentage, return the final price. If the discount is over 100 or below 0, return "invalid discount".
// calcDiscount(200, 20) → 160
// 3. Find all words longer than n
// Given a sentence and a number, return an array of all words longer than n characters.
// longWords("javascript is fun to learn", 3) → ["javascript", "learn"]
// 4. Count each value
// Given an array, return an object where each key is a unique value and each value is how many times it appears.
// countEach([1, 2, 2, 3, 3, 3]) → { 1: 1, 2: 2, 3: 3 }
// 5. Flatten one level
// Given an array that contains nested arrays, return a single flat array without using .flat().
// flattenOne([[1, 2], [3, 4], [5, 6]]) → [1, 2, 3, 4, 5, 6]
// 1
function groupByType(array) {
  let newObject;
  let numberValues = [];
  let stringValues = [];

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
      numberValues.push(array[i]);
    } else if (typeof array[i] === 'string') {
      stringValues.push(array[i]);
    }

    newObject = {
      numbers: numberValues,
      strings: stringValues,
    };
  }

  return newObject;
}

console.log(groupByType([1, 'hi', 2, 'world', 3]));
console.log(groupByType([1, 22, 18, 104, 'string', 'text']));

// 2
function calcDiscount(price, discount) {
  const discountValue = price * (discount / 100);

  if (discount < 0 || discount > 100) {
    return 'Invalid discount';
  }

  return price - discountValue;
}

console.log(calcDiscount(340, 10));
console.log(calcDiscount(340, 101));

// 3
function longWords(string, value) {
  let resultArray = [];
  let arrayFromString = string.split(/\s+/);

  for (const elem of arrayFromString) {
    if (elem.length > value) {
      resultArray.push(elem);
    }
  }

  return resultArray;
}

console.log(longWords('javascript is fun to learn', 2));
console.log(longWords('javascript is fun to learn', 4));

// 4
function countEach(array) {
  let resultObject = {};

  for (const elem of array) {
    if (resultObject[elem] === undefined) {
      resultObject[elem] = 1;
    } else {
      resultObject[elem] = resultObject[elem] + 1;
    }
  }

  return resultObject;
}

console.log(countEach([1, 2, 2, 3, 3, 3]));

// 5
function flattenOne(array) {
  let resultArray = [];

  for (const elem of array) {
    resultArray = resultArray.concat(elem);
  }

  return resultArray;
}

console.log(
  flattenOne([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
);
