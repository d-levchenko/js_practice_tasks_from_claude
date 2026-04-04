// forEach()
// Loops through array, doesn't return anything — used for side effects like logging or DOM updates
// 1. Log each number multiplied by 3.
// [1, 2, 3, 4, 5] → logs 3, 6, 9, 12, 15
[1, 2, 3, 4, 5].forEach(elem => {
  console.log(elem * 3);
});
// 2. Log only strings from a mixed array.
// [1, "hello", true, "world", 42] → logs "hello", "world"
[1, 'hello', true, 'world', 42].forEach(elem => {
  if (typeof elem === 'string') {
    console.log(elem);
  }
});
// 3. Log each person's full name from array of objects.
// [{first: "John", last: "Doe"}, {first: "Jane", last: "Smith"}] → logs "John Doe", "Jane Smith"
[
  { first: 'John', last: 'Doe' },
  { first: 'Jane', last: 'Smith' },
].forEach(elem => {
  console.log(`${elem.first} ${elem.last}`);
});
// 4. Count how many numbers are above 10 using forEach (use external counter).
// [5, 15, 3, 20, 8, 12] → logs 3
let counter = 0;

[5, 15, 3, 20, 8, 12].forEach(elem => {
  if (elem > 10) {
    counter++;
  }
});

console.log(counter);
// 5. Log each item with its index.
// ["apple", "banana", "cherry"] → logs "0: apple", "1: banana", "2: cherry"
['apple', 'banana', 'cherry'].forEach((elem, index) => {
  console.log(`${index}: ${elem}`);
});

// find()
// Returns the FIRST element that matches condition, or undefined if not found
// 1. Find the first number greater than 10.
// findFirst([3, 7, 12, 5, 15]) → 12
const findFirst = array => {
  return array.find(elem => elem > 10);
};
// 2. Find the first string longer than 5 characters.
// findLong(["hi", "hello", "javascript", "cat"]) → "javascript"
const findLong = array => {
  return array.find(elem => elem.length > 5);
};
// 3. Find a user by id.
// findUser([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}], 2) → {id: 2, name: "Bob"}
const findUser = (array, id) => {
  return array.find(elem => elem.id === id);
};
// 4. Find the first negative number.
// findNegative([3, 5, -2, 8, -4]) → -2
const findNegative = array => {
  return array.find(elem => elem < 0);
};
// 5. Find a product by name.
// findProduct([{name: "Apple", price: 1}, {name: "Laptop", price: 999}], "Laptop") → {name: "Laptop", price: 999}
const findProduct = (array, searchingName) => {
  return array.find(elem => elem.name === searchingName);
};
// 6. Find the first even number.
// findEven([1, 3, 5, 4, 6]) → 4
const findEven = array => {
  return array.find(elem => elem % 2 === 0);
};
// filter()
// Returns a NEW array with ALL elements that match condition
// 1. Return only even numbers.
// filterEven([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
const filterEven = array => {
  return array.filter(elem => elem % 2 === 0);
};
// 2. Return only strings from mixed array.
// filterStrings([1, "hello", true, "world", 42]) → ["hello", "world"]
const filterStrings = array => {
  return array.filter(elem => {
    if (typeof elem === 'string') {
      return elem;
    }
  });
};
// 3. Return users older than 18.
// filterAdults([{name: "Alice", age: 20}, {name: "Bob", age: 15}, {name: "Carol", age: 25}]) → [{name: "Alice"...}, {name: "Carol"...}]
const filterAdults = array => {
  return array.filter(elem => {
    if (elem.age > 18) {
      return elem;
    }
  });
};
// 4. Return words longer than 4 characters.
// filterLong(["hi", "hello", "javascript", "cat", "world"]) → ["hello", "javascript", "world"]
const filterLong = array => {
  return array.filter(elem => {
    if (elem.length > 4) {
      return elem;
    }
  });
};
// 5. Return numbers in a specific range.
// filterRange([1, 5, 10, 15, 20, 25], 5, 15) → [5, 10, 15]
const filterRange = (array, minValue, maxValue) => {
  return array.filter(elem => {
    if (elem >= minValue && elem <= maxValue) {
      return elem;
    }
  });
};
// 6. Return products that are in stock (quantity > 0).
// filterInStock([{name: "A", qty: 0}, {name: "B", qty: 3}, {name: "C", qty: 0}, {name: "D", qty: 1}]) → [{name: "B"...}, {name: "D"...}]
const filterInStock = array => {
  return array.filter(elem => {
    if (elem.qty > 0) {
      return elem;
    }
  });
};

// map()
// Returns a NEW array with each element TRANSFORMED
// 1. Double every number.
// doubleAll([1, 2, 3, 4, 5]) → [2, 4, 6, 8, 10]
const doubleAll = array => {
  return array.map(x => x * 2);
};
// 2. Convert all strings to uppercase.
// toUpperAll(["hello", "world", "foo"]) → ["HELLO", "WORLD", "FOO"]
const toUpperAll = array => {
  return array.map(x => x.toUpperCase());
};
// 3. Extract just the names from array of objects.
// getNames([{name: "Alice", age: 30}, {name: "Bob", age: 25}]) → ["Alice", "Bob"]
const getNames = array => {
  return array.map(elem => elem.name);
};
// 4. Add a senior property to each user (true if age > 60).
// addSenior([{name: "Alice", age: 70}, {name: "Bob", age: 25}]) → [{name: "Alice", age: 70, senior: true}, {name: "Bob", age: 25, senior: false}]
const addSenior = array => {
  return array.map(elem => {
    return { ...elem, senior: elem.age > 60 };
  });
};
// 5. Convert array of temperatures from Celsius to Fahrenheit.
// toFahrenheit([0, 100, 37]) → [32, 212, 98.6]
const toFahrenheit = array => {
  return array.map(elem => {
    const formula = elem * (9 / 5) + 32;

    return Number(formula.toFixed(1));
  });
};
// 6. Add index number to each word.
// addIndex(["apple", "banana", "cherry"]) → ["1. apple", "2. banana", "3. cherry"]
const addIndex = array => {
  return array.map((elem, index) => `${index + 1}. ${elem}`);
};
// reduce()
// Accumulates array into a SINGLE value — number, string, object, or array
// 1. Sum all numbers.
// sumAll([1, 2, 3, 4, 5]) → 15
const sumAll = array => {
  return array.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
};
// 2. Find the maximum number.
// findMax([3, 7, 1, 9, 4]) → 9
const findMax = array => {
  return array.reduce((max, elem) => {
    if (elem > max) {
      max = elem;
    }

    return max;
  });
};
// 3. Count how many times each value appears.
// countOccurrences(["cat", "dog", "cat", "bird", "dog", "cat"]) → {cat: 3, dog: 2, bird: 1}
const countOccurrences = array => {
  return array.reduce((acc, elem) => {
    acc[elem] = (acc[elem] ?? 0) + 1;

    return acc;
  }, {});
};
// 4. Flatten an array of arrays into one.
// flattenArrays([[1, 2], [3, 4], [5, 6]]) → [1, 2, 3, 4, 5, 6]
const flattenArrays = array => {
  return array.reduce((acc, elem) => {
    return acc.concat(elem);
  }, []);
};
// 5. Calculate total price of cart items.
// cartTotal([{name: "Apple", price: 1.5, qty: 3}, {name: "Milk", price: 2, qty: 2}]) → 8.5
const cartTotal = array => {
  return array.reduce((acc, sum) => {
    return acc + sum.price * sum.qty;
  }, 0);
};
// 6. Build a string from array of words.
// buildString(["Hello", "world", "how", "are", "you"]) → "Hello world how are you"
const buildString = array => {
  return array.reduce((acc, value) => {
    return acc + ' ' + value;
  });
};
