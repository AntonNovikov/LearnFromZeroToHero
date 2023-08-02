const jsonStr = `{
    "age": 19,
    "firstName": "Mikhail"
}`;
console.log(JSON.parse(jsonStr));

// function  print() and   funcD() will be gone
const obj = {
  a: 1,
  print() {
    console.log("Goodbye");
  },
  funcD: function () {
    console.log("Goodbye D");
  },
  funcC: `function () {
    console.log("Goodbye D");
  },`,
};
const jsonObj = JSON.stringify(obj);
console.log(jsonObj);
obj.print();
obj.funcD();
