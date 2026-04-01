// 1. Get full name
// Given an object with firstName and lastName, return the full name as a string.
// getFullName({firstName: "John", lastName: "Doe"}) → "John Doe"
const getFullName = object => {
  return object.firstName + ' ' + object.lastName;
};
// 2. Count properties
// Given an object, return how many properties it has.
// countProps({a: 1, b: 2, c: 3}) → 3
const countProps = object => {
  return Object.keys(object).length;
};
// 3. Invert object
// Given an object, return a new object with keys and values swapped.
// invertObj({a: 1, b: 2, c: 3}) → {1: "a", 2: "b", 3: "c"}
const invertObj = object => {
  const newObj = {};

  const keys = Object.keys(object);
  const values = Object.values(object);

  for (let i = 0; i < keys.length; i++) {
    if (newObj[values[i]] === undefined) {
      newObj[values[i]] = keys[i];
    }
  }

  return newObj;
};
// 4. Pick properties
// Given an object and an array of keys, return a new object with only those keys.
// pick({name: "Alice", age: 30, city: "Kyiv"}, ["name", "city"]) → {name: "Alice", city: "Kyiv"}
const pick = (object, array) => {
  const result = {};

  for (const elem of array) {
    result[elem] = object[elem];
  }

  return result;
};
// 5. Check if property exists
// Given an object and a key, return true if the key exists, false otherwise.
// hasProp({name: "Alice", age: 30}, "age") → true
// hasProp({name: "Alice", age: 30}, "city") → false
const hasProp = (object, str) => {
  return Object.keys(object).includes(str);
};
// 6. Merge objects
// Given two objects, return a new merged object. If same key exists, second object wins.
// mergeObjects({a: 1, b: 2}, {b: 3, c: 4}) → {a: 1, b: 3, c: 4}
const mergeObjects = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};
// 7. Filter object by value
// Given an object, return a new object with only properties where value is greater than n.
// filterByValue({a: 1, b: 5, c: 3, d: 8}, 3) → {b: 5, d: 8}
const filterByValue = (object, value) => {
  const objEntries = Object.fromEntries(
    Object.entries(object).filter(([key, objValue]) => objValue > value),
  );

  return objEntries;
};
// 8. Array of objects to single object
// Given an array of objects with key and value properties, convert to a single object.
// toObject([{key: "name", value: "Alice"}, {key: "age", value: 30}]) → {name: "Alice", age: 30}
const toObject = array => {
  const result = {};

  for (const elem of array) {
    result[elem.key] = elem.value;
  }

  return result;
};
