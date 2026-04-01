// Here are 8 more:
// 1. Rename keys
// Given an object and a mapping of old key names to new key names, return a new object with renamed keys.
// renameKeys({firstName: "John", lastName: "Doe"}, {firstName: "first", lastName: "last"}) → {first: "John", last: "Doe"}
const renameKeys = (startObject, endObject) => {
  const result = {};
  const keys = Object.keys(startObject);

  for (const elem of keys) {
    result[endObject[elem]] = startObject[elem];
  }

  return result;
};
// 2. Object difference
// Given two objects, return a new object with only the properties that are different between them.
// objDiff({a: 1, b: 2, c: 3}, {a: 1, b: 5, c: 3}) → {b: 2}
const objDiff = (obj1, obj2) => {
  const result = {};

  for (const key of Object.keys(obj1)) {
    if (obj1[key] !== obj2[key]) {
      result[key] = obj1[key];
    }
  }

  return result;
};
// 3. Deep clone
// Given a nested object, return a completely independent copy of it.
// deepClone({name: "Alice", address: {city: "Kyiv"}}) → new object, changes don't affect original
const deepClone = object => {
  return JSON.parse(JSON.stringify(object));
};
// 4. Count value types
// Given an object, return a new object counting how many values are strings, numbers, booleans.
// countTypes({a: 1, b: "hi", c: true, d: 2, e: "world"}) → {number: 2, string: 2, boolean: 1}
const countTypes = object => {
  const result = {};
  const entries = Object.values(object);

  for (const elem of entries) {
    if (typeof elem === 'number') {
      if (result.number === undefined) {
        result.number = 1;
      } else {
        result.number += 1;
      }
    } else if (typeof elem === 'string') {
      if (result.string === undefined) {
        result.string = 1;
      } else {
        result.string += 1;
      }
    } else if (typeof elem === 'boolean') {
      if (result.boolean === undefined) {
        result.boolean = 1;
      } else {
        result.boolean += 1;
      }
    }
  }

  return result;
};
// 5. Flatten nested object
// Given a nested object, return a flat object with dot notation keys.
// flattenObj({a: 1, b: {c: 2, d: 3}}) → {a: 1, "b.c": 2, "b.d": 3}
// 6. Find object by property
// Given an array of objects and a key-value pair, return the first object that matches.
// findByProp([{id: 1, name: "Alice"}, {id: 2, name: "Bob"}], "name", "Bob") → {id: 2, name: "Bob"}
const findByProp = (array, key, prop) => {
  return array.find(obj => obj[key] === prop);
};
// 7. Omit properties
// Opposite of pick — given an object and array of keys to remove, return object without those keys.
// omit({name: "Alice", age: 30, city: "Kyiv"}, ["age"]) → {name: "Alice", city: "Kyiv"}
const omit = (object, array) => {
  const copy = JSON.parse(JSON.stringify(object));

  for (const elem of array) {
    if (copy[elem]) {
      delete copy[elem];
    }
  }

  return copy;
};
// 8. Transform values
// Given an object and a function, return a new object with the function applied to each value.
// transformValues({a: 1, b: 2, c: 3}, x => x * 2) → {a: 2, b: 4, c: 6}
const transformValues = (object, transform) => {
  const result = {};

  for (const [key, value] of Object.entries(object)) {
    result[key] = transform[value];
  }

  return result;
};
