// Here are 25 problems:
// Strings:
// 1. Count how many words in a string are longer than n characters.
// countLongWords("hello world hi", 3) → 2
const countLongWords = (str, length) => {
  const wordsArray = str.trim().split(/\s+/);
  let counter = 0;

  for (const elem of wordsArray) {
    if (elem.length > length) {
      counter++;
    }
  }

  return counter;
};
// 2. Return the most common character in a string.
// mostCommonChar("javascript") → "a"
const mostCommonChar = str => {
  let newObject = {};
  const newArray = str.split('');

  for (const elem of newArray) {
    if (newObject[elem] === undefined) {
      newObject[elem] = 1;
    } else {
      newObject[elem] += 1;
    }
  }

  const mostCommonChar = Object.values(newObject).sort((a, b) => b - a);

  return mostCommonChar[0];
};
// 3. Check if two strings are anagrams (same letters, different order).
// isAnagram("listen", "silent") → true
const isAnagram = (str1, str2) => {
  if (str1.trim().length !== str2.trim().length) {
    return false;
  }

  const arr1 = str1.split('').sort((a, b) => a.localeCompare(b));
  const arr2 = str2.split('').sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};
// 4. Capitalize the first letter of every word.
// titleCase("hello world foo") → "Hello World Foo"
const titleCase = str => {
  const newArray = str.split(/\s+/);
  const resultArray = [];

  for (const elem of newArray) {
    resultArray.push(
      elem.slice(0, 1).toUpperCase() + elem.slice(1).toLowerCase(),
    );
  }

  return resultArray.join(' ');
};
// 5. Return all words that appear more than once in a sentence.
// duplicateWords("the cat sat on the mat the cat") → ["the", "cat"]
const duplicateWords = str => {
  const words = str.toLowerCase().split(' ');
  const duplicates = words.filter(
    (word, index) =>
      words.indexOf(word) !== index && words.lastIndexOf(word) === index,
  );

  return duplicates;
};
// 6. Compress a string by counting consecutive characters.
// compress("aaabbbcc") → "a3b3c2"
const compress = str => {
  const array = str.split('');
  let newObject = {};

  for (const elem of array) {
    if (newObject[elem] === undefined) {
      newObject[elem] = 1;
    } else {
      newObject[elem] += 1;
    }
  }

  const result = Object.entries(newObject).map(
    ([key, value]) => `${key}${value}`,
  );

  return result.join('');
};
// 7. Check if a string contains all unique characters.
// allUnique("hello") → false
// allUnique("world") → false
// allUnique("qwerty") → true
const allUnique = str => {
  const array = str.split('');

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] === array[j]) {
        return false;
      }
    }
  }
  return true;
};
// Arrays:
// 8. Return the difference between the largest and smallest number.
// range([3, 1, 7, 2, 9]) → 8
const range = array => {
  const smallest = array.sort((a, b) => a - b)[0];
  const highest = array.sort((a, b) => b - a)[0];

  return highest - smallest;
};
// 9. Move all zeros to the end of an array without changing order of other elements.
// moveZeros([0, 1, 0, 2, 3, 0, 4]) → [1, 2, 3, 4, 0, 0, 0]
const moveZeros = array => {
  const zerosArray = [];
  const arrWithoutZeros = [];

  for (const elem of array) {
    if (elem === 0) {
      zerosArray.push(elem);
    } else {
      arrWithoutZeros.push(elem);
    }
  }

  return arrWithoutZeros.concat(zerosArray);
};
// 10. Return elements that appear in both arrays.
// intersection([1, 2, 3, 4], [2, 4, 6]) → [2, 4]
const intersection = (array1, array2) => {
  const duplicates = [];
  const res = [];
  const bothArrays = array1.concat(array2);

  for (const elem of bothArrays) {
    if (!duplicates.includes(elem)) {
      duplicates.push(elem);
    } else {
      res.push(elem);
    }
  }

  return res;
};
// 11. Return elements that appear in only one of the two arrays.
// difference([1, 2, 3], [2, 3, 4]) → [1, 4]
const difference = (array1, array2) => {
  return [
    ...array1.filter(x => !array2.includes(x)),
    ...array2.filter(x => !array1.includes(x)),
  ];
};
// 12. Given an array of numbers, return the two numbers that add up to a target.
// twoSum([1, 3, 5, 7], 8) → [1, 7] or [3, 5]
const twoSum = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
};
// 13. Zip two arrays together into an array of pairs.
// zip([1, 2, 3], ["a", "b", "c"]) → [[1, "a"], [2, "b"], [3, "c"]]
const zip = (arr1, arr2) => {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push([arr1[i], arr2[i]]);
  }

  return result;
};
// 14. Return a new array with elements at even indexes only.
// evenIndexes([10, 20, 30, 40, 50]) → [10, 30, 50]
const evenIndexes = array => {
  const result = [];

  for (let i = 0; i < array.length; i += 2) {
    result.push(array[i]);
  }

  return result;
};
// 15. Given an array, return the cumulative sum at each position.
// cumulativeSum([1, 2, 3, 4]) → [1, 3, 6, 10]
const cumulativeSum = array => {
  const result = [];
  let counter = 0;

  for (const elem of array) {
    counter += elem;
    result.push(counter);
  }

  return result;
};
// Objects & arrays of objects:
// 16. Given an array of people objects, return the oldest person's name.
// oldestPerson([{name: "Alice", age: 30}, {name: "Bob", age: 25}, {name: "Carol", age: 35}]) → "Carol"
const oldestPerson = array => {
  const oldestPerson = array.reduce((oldest, current) => {
    return current.age > oldest.age ? current : oldest;
  });

  return oldestPerson.name;
};
// 17. Given an array of objects, group them by a specific property value.
// groupBy([{type: "fruit", name: "apple"}, {type: "veggie", name: "carrot"}, {type: "fruit", name: "banana"}], "type") → { fruit: [{...}, {...}], veggie: [{...}] }
const groupBy = (array, type) => {
  const result = {};

  for (const elem of array) {
    const key = elem[type];

    if (result[key] === undefined) {
      result[key] = [];
    }

    result[key].push(elem);
  }

  return result;
};
// 18. Given an array of products, return the total value of stock (price × quantity).
// totalStock([{name: "A", price: 10, qty: 3}, {name: "B", price: 5, qty: 10}]) → 80
const totalStock = array => {
  return array.reduce((total, product) => {
    return total + product.price * product.qty;
  }, 0);
};
// 19. Given an array of objects, sort them by a specific numeric property.
// sortByProperty([{name: "A", score: 3}, {name: "B", score: 1}, {name: "C", score: 2}], "score") → [{name: "B"...}, {name: "C"...}, {name: "A"...}]
const sortByProperty = (array, property) => {
  return array.sort((a, b) => a[property] - b[property]);
};
// 20. Merge two arrays of objects by a shared key, combining their properties.
// mergeById([{id: 1, name: "Alice"}], [{id: 1, age: 30}]) → [{id: 1, name: "Alice", age: 30}]
const mergeById = (array1, array2) => {
  return array1.map(item => {
    const match = array2.find(item2 => item2.id === item.id);
    return { ...item, ...match };
  });
};
