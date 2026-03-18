// Types & calculations:
// 1. Check a type and calculate
// Given two values, if both are numbers return their sum, if both are strings return them joined, otherwise return "incompatible types".
// calculate(5, 3) → 8
// calculate("hello", " world") → "hello world"
// calculate(5, "hi") → "incompatible types"
// 2. Celsius to Fahrenheit
// Convert a temperature from Celsius to Fahrenheit. If the input is not a number return "invalid input".
// toFahrenheit(100) → 212
// toFahrenheit("hot") → "invalid input"
// Arrays:
// 3. Sum only even numbers in array
// Loop through an array and return the sum of only even numbers.
// sumEvens([1, 2, 3, 4, 5, 6]) → 12
// 4. Find the first negative number
// Loop through an array and return the first negative number you find.
// firstNegative([3, 5, -2, -8, 1]) → -2
// 5. Combine two arrays without duplicates
// Merge two arrays into one but without any duplicate values.
// mergeUnique([1, 2, 3], [2, 3, 4]) → [1, 2, 3, 4]
// 1
function calculateTypes(value1, value2) {
  let result;
  let arrayResult = [];

  if (typeof value1 === 'number' && typeof value2 === 'number') {
    result = value1 + value2;
    return result;
  } else if (typeof value1 === 'string' && typeof value2 === 'string') {
    result = value1 + ' ' + value2;
    return result;
  } else if (typeof value1 === 'object' && typeof value2 === 'object') {
    arrayResult = value1.concat(value2);
    return arrayResult;
  } else {
    return 'Incompatible types';
  }
}

console.log(calculateTypes(2, 6));
console.log(calculateTypes(2, 'hi'));
console.log(calculateTypes('hello', 'world'));
console.log(calculateTypes([1, 3, 'hi'], 8));
console.log(calculateTypes([1, 6, 'string'], [1, 2, 3, 4, 5]));

// 2
function toFahrenheit(value) {
  // each 1 celsius is 1.8 fahrenheit
  // 0 celsius is 32 fahrenheit
  let result;
  let fahrenheitTemp = 32;
  const fahrConvertedTemp = value * 1.8;

  if (typeof value === 'number') {
    result = fahrenheitTemp + fahrConvertedTemp;
    return result;
  } else {
    return 'Invalid input, please, input your temperature in Celsius (numbers only).';
  }
}

console.log(toFahrenheit(10));
console.log(toFahrenheit(100));
console.log(toFahrenheit(44));
console.log(toFahrenheit('hi'));

// 3
function sumEvens(array) {
  let result = 0;

  for (const elem of array) {
    if (elem % 2 === 0) {
      result += elem;
    }
  }

  return result;
}

console.log(sumEvens([1, 2, 3, 4, 5, 6]));

// 4
function firstNegative(array) {
  let result;

  for (const elem of array) {
    if (elem < 0) {
      result = elem;
      return result;
    }
  }
}

console.log(firstNegative([3, 5, -2, -8, 1]));

// 5
function mergeUnique(array1, array2) {
  let resultArray = [];
  let startedArray = array1.concat(array2);

  for (let i = 0; i < startedArray.length; i++) {
    if (resultArray.includes(startedArray[i])) {
    } else {
      resultArray.push(startedArray[i]);
    }
  }

  return resultArray;
}

console.log(mergeUnique([1, 2, 3], [2, 3, 4]));
