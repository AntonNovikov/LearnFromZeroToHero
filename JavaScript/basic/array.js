// var fs = require("fs")
import fs from "fs";
// map filter reject reduce join reverse find
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

console.log(array);
console.log(res);

res = array.join();

console.log(array);
console.log(res);

res = array.reverse();

console.log(array);
console.log(res);

// https://www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4
// var output = fs.readFileSync('data.txt') // Buffer
var output = fs
  .readFileSync("data.txt", "utf8")
  .trim()
  .split("\n")
  .map((line) => line.split("\t"))
  .reduce((customers, line) => {
    // console.log(line)
    customers[line[0]] = customers[line[0]] || [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3],
    });
    return customers;
  }, {});
// console.log("output :",output)
console.log("output :", JSON.stringify(output, null, 2));

// some   false при любом условии для пустого массива.
const arraySome = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(arraySome.some(even));

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

console.log(array3);
// Expected output: Array ["a", "b", "c", "d", "e", "f"]

var alpha = ["a", "b", "c"];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); // Результат: ['a', 'b', 'c', 1, 2, 3]

// splice

let arrSp = ["a", "c", "d"];
arrSp.splice(1, 0, "b");
console.log(arrSp);

// slice

let arrSl = ["a", "b", "c", "d"];
const slice = arrSl.slice(1, 4);
console.log(arrSl);
console.log(slice);

// toString
console.log(arrSp.toString());
console.log(arrSl.toString());
console.log(arrSp.join());
console.log(arrSp.join(", "));
console.log(arrSl.join());
console.log(arrSl.join(", "));

// https://www.youtube.com/shorts/dpyHNj1l0wg

// const form = new Intl.ListFormat("en-us", {
//   // type: 'disjunction',
//   // style: 'short',
//   style: "narrow",
// });

// console.log(form.format(arrSp));