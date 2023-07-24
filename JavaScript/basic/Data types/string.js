console.log("typeof = ",typeof "typeof = string")
// '' "" ``
var str = "I'm a JavaScript \"programmer\" ";
// alert( str ); // I'm a JavaScript "programmer"
var str = ' символ \\ ';
// alert( str ); // символ \

// \n	Перевод строки
// \', \"	Кавычки
// \t	Табуляция
// \xXX	Символ в Юникоде, например: \u00A9 — то же самое, что ©
// \uXXXX	Символ в UTF-8, например: \u00A9 — то же самое, что ©


// .length


// []


// for of 

// Строки неизменяемы

//indexOf

// includes, startsWith, endsWith


// substring, substr slice.

// .codePointAt(pos)


// fromCodePoint 

// let strAn = 'lorem ipsum'.anchor('Закладка');
// console.log(str.toString());


// fromCharCode

// lastIndexOf

// localeCompare


// match

// replace  methods returns a new string after modifying the existing string


// search

// split

// toLocaleLowerCase

// toLocaleUpperCase();

// toLowerCase();


// toString();

// toUpperCase

// valueOf();

// repeat



console.log(
    "JavaScript ".repeat(5))

// concat
console.log(
    "Java".concat("Script"))

// Метод charAt возвращает символ по указанному индексу. 

// raw

// at
console.log(
"JavaScript".at(1))
console.log(
"JavaScript".at(-2))

//
console.log(
"JavaScript".padStart(15,"-"))

//
console.log(
    "JavaScript".padEnd(15,"-"))

// trim()

console.log(
    "   Java Script ".trim(15,"-"))

// chartCodeAt
console.log(
    "   Java Script ".charCodeAt(6))
console.log(
    "Java Script ".charCodeAt(1))

// slice
console.log(
    "Java Script ".slice(1,4))