//curry
let sum = function (num) {
  let current = num,
    inner = function (num) {
      if (arguments.length) {
        current += num;
        return inner;
      } else {
        return current;
      }
    };
  return inner;
};
// console.log(sum(2)(4)(10)());

// closure
let inc = (() => {
  let count = 0;
  return () => {
    return ++count;
  };
})();
console.log(inc());
console.log(inc());
console.log(inc());

let arr = ['bannana', 'bannana', 'grapefruit', 'orange', 'orange', 'bannana'];

let sort = (arr) => {
  let result = arr.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  result = Object.entries(result);
  result = result
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((item) => item[0]);
  return result;
};

// console.log(sort(arr));

let multiplyByTwo = (...args) => {
  let result = [];
  for(let i = 0; i <= args.length - 1; i++){
    result.push(args[i] * 2);
  }
  return result;
};

// console.log(multiplyByTwo(4, 8, 1));
