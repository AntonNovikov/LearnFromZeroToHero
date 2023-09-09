let a = 5;
console.log(a % 2 == 0);
const n = (a) => {
  a++;
  return "Нечетное";
};
let c = a % 2 == 0 ? "Чётное" : n();
console.log(c);
