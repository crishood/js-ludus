const numbers = [1, 2, 3, 4, 5];

// Declarative approach
// Based on what to do
const doubled = numbers.map((number) => number * 2);

const doubledEvens = numbers
  .filter((number) => number % 2 === 0)
  .map((even) => even * 2);

console.log('Doubled', doubled);
console.log('Doubled Evens', doubledEvens);

function filterMax(n) {
  return n < 100;
}

function addTax(n) {
  return n + n * 0.8;
}

function calcTotal(n, m) {
  return n + m;
}

const total = numbers.filter(filterMax).map(addTax).reduce(calcTotal);
console.log('Total', total);
