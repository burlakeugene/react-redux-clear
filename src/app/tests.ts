//curry

export async function foo(num: number) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  return num;
}

foo(142).then((resp) => {
  console.log(resp);
});

// class User<T, K extends number> {
//   constructor(public name: T, public age: K) {}
//   getUser(): string {
//     return this.name + ' ' + this.age;
//   }
//   getAge(): number {
//     return this.age;
//   }
// }

// const test = new User('Eugene', 29);
// console.log(test.getUser());
// console.log(test.getAge());

// const getUser = <T, K>(userName: T, age: K): string => {
//   return userName+' '+age;
// };

// console.log(getUser('Eugene', 29));

type TTwoArgsFunction = (a: string, b: number) => boolean;
type Parameters<T> = T extends (...args: infer T) => any ? T : never;
type ReturnType<T> = T extends (...args: any[]) => infer T ? T : never;
type TMyType<T> = (a: Parameters<T>[0]) => Parameters<T>[1];
type TTest = TMyType<TTwoArgsFunction>;
const test2: TTest = (a) => +a;

test2('1');

// let sum = function (num) {
//   let current = num,
//     inner = function (num) {
//       if (arguments.length) {
//         current += num;
//         return inner;
//       } else {
//         return current;
//       }
//     };
//   return inner;
// };
// console.log(sum(2)(4)(10)());

// closure
// let inc = (() => {
//   let count = 0;
//   return () => {
//     return ++count;
//   };
// })();
// // console.log(inc());
// // console.log(inc());
// // console.log(inc());

// let arr = ['bannana', 'bannana', 'grapefruit', 'orange', 'orange', 'bannana'];

// let sort = (arr) => {
//   let result = arr.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   }, {});
//   result = Object.entries(result);
//   result = result
//     .sort((a, b) => {
//       return b[1] - a[1];
//     })
//     .map((item) => item[0]);
//   return result;
// };
// // console.log(sort(arr));

// let multiplyByTwo = (...args) => {
//   let result = [];
//   for (let i = 0; i <= args.length - 1; i++) {
//     result.push(args[i] * 2);
//   }
//   return result;
// };
// // console.log(multiplyByTwo(4, 8, 1));

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// // wait(5000).then(() => {
// //   console.log('w');
// // })

// //event loop
// console.log('1');
// setTimeout(() => {
//   console.log('2');
//   new Promise((resolve) => {
//     console.log('9')
//     resolve();
//   }).then(() => {
//     console.log('7');
//   });
// }, 0);
// setTimeout(() => {
//   console.log('8');
// }, 0);
// let promise = new Promise((resolve) => {
//   console.log('3');
//   resolve();
// });
// promise.then((resp) => {
//   console.log('4')
//   return resp
// }).then(() => {
//   console.log('5');
// })
// console.log('6');

// let str = 'Аывц-уцв , 2!';
// console.log(str.replace(/[^a-zA-ZА-Яа-яЁё]/gi, '').toLowerCase());

// const structure = [
//   'a.js',
//   'b.js',
//   {
//     src: [
//       'some.js',
//       'other.js',
//       {
//         components: ['someComponent.js'],
//         build: ['1', '2'],
//       },
//     ],
//   },
//   {
//     dist: ['2', '3'],
//   },
// ];
// const flatten = (structure, path = '') => {
//   let result = [];
//   structure.forEach((item) => {
//     if (typeof item === 'string') result.push(path + item);
//     else {
//       let folders = Object.keys(item);
//       folders.forEach((folder) => {
//         result = [...result, ...flatten(item[folder], path + folder + '/')];
//       });
//     }
//   });
//   return result;
// };
// console.log(flatten(structure));

// function generateParenthesis(n) {
//   const result = []

//   const generateCombo = (left, right, partial) => {
//     console.log(partial)
//     if (left > right) {
//       return
//     }
//     if (!left && !right) {
//       result.push(partial)
//     }
//     if (left > 0) {
//       generateCombo(left - 1, right, partial + '(')
//     }
//     if (right > 0) {
//       generateCombo(left, right - 1, partial + ')')
//     }
//   }
//   generateCombo(n, n, '')

//   return result
// }

// array flatten
// const array = [[-4, [-3, -2, [-1, 0]]], 1, 2, [3, 4], [5, 6, [7, 8, [9, 10]]]];


// const flatten = (arr) => {
//   let i = arr.length - 1;
//   const result = [];

//   while (i >= 0) {
//     const item = arr.pop();
//     if (Array.isArray(item)) {
//       arr = [...arr, ...item];
//       i += item.length;
//     } else {
//       result.unshift(item);
//     }
//     --i;
//   }
//   return result;
// };


// const flatten = (array) => {
//   let i = array.length - 1;

//   while (i >= 0) {
//     if (Array.isArray(array[i])) {
//       const length = array[i].length;
//       array.splice(i, 1, ...array[i]);
//       i += length;
//     } else {
//       i--;
//     }
//   }

//   return array;
// };

// console.log(flatten(array));


// const sum = (number) => {
//   let result = number;
//   const add = (nextNumber) => {
//     if(nextNumber == undefined){
//       return result;
//     }
//     else{
//       result += nextNumber;
//       return add;
//     }
//   }
//   return add;
// }

// console.log(sum(2)(3)());