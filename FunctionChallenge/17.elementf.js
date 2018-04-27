// 2.17 Modify the element function so that the generator argument is optionl. If a generator is not
// provided, then each of the elements of the array will be produced
// var ele = element([1, 2, 3, 4]);

// ele(); // 1
// ele(); // 2
// ele(); // 3
// ele(); // 3
// ele(); // undefined
const fromTo = require("./15.fromTo");

function elementf(arr, gen) {
  function check(gen) {
    let a = -1;
    if (gen === undefined) {
      return () => (a += 1);
    }
    return () => (a = gen());
  }

  function* igen() {
    const counter = check(gen);
    let count = counter();

    const { length: len } = arr;
    while (count !== undefined && count < len) {
      yield arr[count];
      count = counter();
    }
  }

  const gigen = igen();
  return () => gigen.next().value;
}

const ele = elementf([1, 2, 3, 4]);

console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());
console.log(ele());
