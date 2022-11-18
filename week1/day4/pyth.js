const assertEqual = (actual, expected) => {

  return (actual === expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};


const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map(item => {
  const x = (Number(item.x));
  const y = (Number(item.y));
  const z = Math.sqrt(x * x + y * y);
  return z;
});

// const testing = result[0];
// const expected = 5;

// const testing = result[0];
// const expected = 5;

const testing = result[2];
const expected = 17;

// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);

console.log(assertEqual(testing, expected));