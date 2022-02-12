//curry

function foo(num:number) {
  return num;
}

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
// // console.log('1');
// // setTimeout(() => {
// //   console.log('2');
// //   new Promise((resolve) => {
// //     console.log('9')
// //     resolve();
// //   }).then(() => {
// //     console.log('7');
// //   });
// // }, 0);
// // setTimeout(() => {
// //   console.log('8');
// // }, 0);
// // let promise = new Promise((resolve) => {
// //   console.log('3');
// //   resolve();
// // });
// // promise.then((resp) => {
// //   console.log('4')
// //   return resp
// // }).then(() => {
// //   console.log('5');
// // })
// // console.log('6');

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
