// https://tproger.ru/translations/javascript-arrays-best-practices/

// var fs = require("fs")
import fs from "fs";

// mutable

// map
// filter
console.log("filter");
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = numbers.filter((el) => el % 2 == 1);
console.log(oddNumbers);
// reject
// reduce
console.log("reduce");

// join

// find
// at
// includes
console.log("includes");
console.log(numbers.includes("1")); // false
console.log(numbers.includes(1)); // true
console.log("________");
// indexOf
console.log("indexOf");
console.log(numbers.indexOf("1")); // -1 так как это строка
console.log(numbers.indexOf(2)); //1
console.log("________");

const myAr = [
  { id: 1, name: "john" },
  { id: 2, name: "2john" },
  { id: 3, name: "4john" },
];

// console.log(myAr.find((el) => el.id === 3));
// console.log(myAr.find((el) => el.id === 7));

// some
// flat
// concat
// splice
// slice
// toString, join
let array = [];
let string = "abc";
let res;
array = string.split("");

// console.log(array);
// console.log(res);

res = array.join();

// console.log(array);
// console.log(res);

res = array.reverse();

// console.log(array);
// console.log(res);

// https://www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4
// var output = fs.readFileSync('data.txt') // Buffer

// var output = fs
//   .readFileSync("data.txt", "utf8")
//   .trim()
//   .split("\n")
//   .map((line) => line.split("\t"))
//   .reduce((customers, line) => {
//     // console.log(line)
//     customers[line[0]] = customers[line[0]] || [];
//     customers[line[0]].push({
//       name: line[1],
//       price: line[2],
//       quantity: line[3],
//     });
//     return customers;
//   }, {});

// console.log("output :",output)
// console.log("output :", JSON.stringify(output, null, 2));

// some   false при любом условии для пустого массива.
const arraySome = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

// console.log(arraySome.some(even));

// flat возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.
// depth Необязательный
// На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);

// concat() лучше использовать спред? ...
// var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

// console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

var alpha = ["a", "b", "c"];

var alphaNumeric = alpha.concat(1, [2, 3]);

// console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]

// splice

let arrSp = ["a", "c", "d"];
arrSp.splice(1, 0, "b");
// console.log(arrSp);

// slice

let arrSl = ["a", "b", "c", "d"];
const slice = arrSl.slice(1, 4);
// console.log(arrSl);
// console.log(slice);

// toString
// console.log(arrSp.toString());
// console.log(arrSl.toString());
// console.log(arrSp.join());
// console.log(arrSp.join(", "));
// console.log(arrSl.join());
// console.log(arrSl.join(", "));

// https://www.youtube.com/shorts/dpyHNj1l0wg

// const form = new Intl.ListFormat("en-us", {
//   // type: 'disjunction',
//   // style: 'short',
//   style: "narrow",
// });

// console.log(form.format(arrSp));

// at()
const arraySim = ["dfd", "dsfdlf", "dsfdljdfs"];
// console.log(arraySim.at(-2));

// length

// push

// pop()

// shift

// unshift

// sort The sort() method sorts the elements of an array in place and returns the array. The sort is not necessarily stable. The default sort order is according to string Unicode code points.
// dont use it. it will mutate array
console.log("sortNumbers");
const numberForSort = [1, 2, 3, 4, 10, 12, 23];
console.log(numberForSort);
console.log(numberForSort.sort());
console.log(numberForSort);
console.log(numberForSort.sort((a, b) => a - b));
console.log(numberForSort);
console.log(numberForSort.sort((a, b) => b - a));
console.log(numberForSort);
console.log("___________");
console.log("sortStrings");
const fruits = ["apple", "orange", "melon", "pear", "lemon", "mango"];
console.log(fruits);
console.log(fruits.sort());
// console.log(fruits.sort(sorting));
// function sorting(a,b){
//   if(a>b) return 1;
//   if(a<b) return -1;
//   return 0;
// }
console.log(fruits);
console.log("___________");
// reverse
// dont use it. it will mutate array
console.log("sort");
console.log(numberForSort.reverse());
console.log(numberForSort);
console.log("___________");
