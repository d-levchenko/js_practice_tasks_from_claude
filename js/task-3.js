// 1. Sum all even numbers in range
// Given start and end, return the sum of all even numbers in that range.
// sumEvensInRange(2, 10) → 2 + 4 + 6 + 8 + 10 = 30
// 2. Find all products above price
// Given an array of products and a minimum price, return array of product names that cost more than the minimum.
// jsfindExpensive([
//   { name: "Apple", price: 1 },
//   { name: "Laptop", price: 999 },
//   { name: "Phone", price: 699 }
// ], 500) → ["Laptop", "Phone"]
// 3. Count words in a sentence
// Given a sentence, return how many words it contains.
// countWords("javascript is fun to learn") → 5
// 4. Get every second element
// Loop through an array and return a new array with every second element starting from index 0.
// everySecond([1, 2, 3, 4, 5, 6]) → [1, 3, 5]
// 5. Capitalize first letter of each word
// Given a sentence, return it with every word capitalized.
// capitalizeWords("hello world") → "Hello World"
// 1
const sumEvensInRange = (start, end) => {
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
};
// 2
const isFindExpensive = (products, minPrice) => {
  const newArray = [];

  for (const product of products) {
    if (product.price > minPrice) {
      newArray.push(product.name);
    }
  }

  return newArray;
};
// 3
const countWords = str => {
  const array = str.trim().split(/\s+/);
  return array.length;
};

// 4
const everySecond = array => {
  let resultArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
};
// 5
const capitalizeWords = str => {
  const arrayWithString = str.split(/\s+/);
  let result = [];

  for (const elem of arrayWithString) {
    const firstLetter = elem.slice(0, 1).toUpperCase();
    const wordWithoutFirstLetter = elem.slice(1).toLowerCase();
    result.push(firstLetter + wordWithoutFirstLetter);
  }

  return result.join(' ');
};
