// https://techrocks.ru/2021/10/01/7-console-log-tips/
// https://developer.mozilla.org/en-US/docs/Web/API/console
let varib = 4;
console.log({varib})

// Стилизация
console.log(
  "%cDebug with style with these console.log tricks",
  "font-size:50px; background:#F9F9F9; color:#581845; padding:10px; border-radius:10px;"
);

// 4. WARNING!
console.warn("console.warn()");
// 5. ERROR :|
console.error("console.error()");
// 6. INFO
console.info("console.info()");

// console.clear()

// Группирование
const dogs = [
  { name: "Ashley", age: 5 },
  { name: "Bruno", age: 2 },
  { name: "Hugo", age: 8 },
];
dogs.forEach((dog) => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// 11. COUNTING
console.count("one");
console.count("one");
console.count("one");
console.count("two");
console.count("three");
console.count("two");

// 13. TABLE for ARRAYS
//   const dogs = [
//     { name: "Ashley", age: 5 },
//     { name: "Bruno", age: 2 },
//     { name: "Hugo", age: 8 },
//     ];
const cats = ["Juno", "Luna", "Zoe"];
console.table(dogs);
console.table(cats);

const emoji = "🙈";
console.log("This %s is my favorite!", emoji);
console.log("This " + emoji + " is my favorite emoji");
console.log(`This ${emoji} is my favorite emoji`);
