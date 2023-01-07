var fs = require("fs")
// import fs from 'fs'
// map filter reject reduce join reverse find
let array = []
let string = "abc"
let res;
array = string.split("");

console.log(array)
console.log(res)

res = array.join()

console.log(array)
console.log(res)

res = array.reverse()

console.log(array)
console.log(res)



// https://www.youtube.com/watch?v=1DMolJ2FrNY&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=4
// var output = fs.readFileSync('data.txt') // Buffer
var output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split('\t'))
    .reduce((customers,line) => {
        // console.log(line)
        customers[line[0]] = customers[line[0]] || [];
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        }) ;
        return customers;
    },{})
// console.log("output :",output)
console.log("output :", JSON.stringify(output, null , 2))
