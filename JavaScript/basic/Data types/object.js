// объект массив функция ошибка

// import { isLength } from "lodash";

// // https://www.youtube.com/shorts/4PZeIwXx1hc
// const USER_MAP = {
//   1: { name: "Kyle" },
//   2: { name: "Saly" },
// };

// console.log(USER_MAP[1]);

// const userMap = new Map([
//   [1, { name: "Kyle" }],
//   [2, { name: "Saly" }],
// ]);

// // userMap.set()
// userMap.set({ userId: 1 }, { name: "john" });

// console.log(userMap);

// filter
console.log("filter");
const users = [
  {
    id: 1,
    name: "Brad Vret",
    isMarried: true,
    salary: 1000,
  },
  {
    id: 2,
    name: "Brad Vret2",
    isMarried: false,
    salary: 2000,
  },
  {
    id: 3,
    name: "Brad Vret3",
    isMarried: true,
    salary: 34000,
  },
];

const marriedUsers = users.filter((el) => el.isMarried);
// const unMarriedUsers = users.filter((el) => !el.isMarried);
console.log(marriedUsers);
console.log("_______");

// fullcopy
console.log("full copy");

console.log("_______");
// includes
console.log("includes");

console.log("_______");
// reduce
console.log("reduce");
const budget = users.reduce((acc, user) => acc + user.salary, 0);
console.log("budget:", budget);
console.log("_______");
//find
console.log("find");
console.log(users.find((user) => user.isMarried === false)); // first object
console.log(users.find((user) => user.isMarried === "maybe")); // undefined
console.log("_______");
//findInedx
console.log("findIndex");
console.log(users.findIndex((user) => user.isMarried === false)); // index
console.log(users.findIndex((user) => user.isMarried === "maybe")); // -1
console.log("_______");
// __proto__

//sort
function sorting(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}
console.log("sort");
users.sort((a, b) => sorting(b.salary, a.salary));
console.log(users);
console.log("_______");

//
const dev1 = {
  id: 1,
  fullName: "John Doe",
  skills: ["HTML", "css", "JavaScript"],
  area: "frontend",
};
const dev2 = { ...dev1 };
console.log(dev1);
console.log(dev2);
dev2.skills[0] = "Sleping on the work"; // изменить и в первом 
dev2.fullName = "Sleping on the work is my Name";
console.log(dev1);
console.log(dev2);
