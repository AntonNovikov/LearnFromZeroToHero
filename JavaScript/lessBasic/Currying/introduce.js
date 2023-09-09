// https://www.youtube.com/watch?v=iZLP4qOwY8I&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=6

import _ from "lodash";
// var _ = require("lodash")
// import _ from 'lodash'

let dragon = (name, size, element) =>
  name + " is a " + size + " dragon that breathes " + element + "!";

dragon = _.curry(dragon);

// console.log(dragon("Rock", 'big', 'fire'))

// let dragon =
// name => size => element =>
//     name + ' is a ' +
//     size + ' dragon that breathes ' +
//     element + '!'

//     console.log(dragon("Rodck") ('big') ('fire'))

let b = dragon("Rodck")("big");
console.log(b("ice"));

let dragonsAr = [
  { name: "dflsjf", element: "fire" },
  { name: "lkj", element: "ire" },
  { name: "sdfdfv", element: "tire" },
  { name: "xcv", element: "ice" },
  { name: "xdcv", element: "ice" },
];

// let hasElement = (element, obj) => obj.element === element;
let hasElement = _.curry((element, obj) => obj.element === element);
// let iceDragons = dragonsAr.filter(x => hasElement("ice", x));
let iceDragons = dragonsAr.filter(hasElement("ice"));
console.log(iceDragons);
