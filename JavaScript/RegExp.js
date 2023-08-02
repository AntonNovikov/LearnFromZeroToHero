// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions
const reg = /\w/;
const regOb = /\d/;

const str = "JavaScript is cool language. Everybody should leaern JavaScript";
console.log(/javaScript/i.test(str));

console.log(str.replace(/JavaScript/g, "Хрен"));
console.log(str.match(/JavaScript/i));
console.log(str.match(/JavaScript/ig));
