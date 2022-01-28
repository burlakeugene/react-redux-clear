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
console.log(sum(2)(4)(10)());
