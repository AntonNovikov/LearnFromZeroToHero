// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

//

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: "foo"
// });

// console.log(promise1);
// // Expected output: [object Promise]

function withPromise() {
  return new Promise((res, rej) => {
    res("hello from promise");
  });
}

console.log("I thought I'm last but now I'm second");
withPromise()
  .then(console.log)
  .catch((value) => console.log(value + "!!!!"));
setTimeout(() => console.log("I have to be second, but i'm third"), 0);
console.log("I'm first");

async function getUsers() {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();
  //   return data

  //   return Promise.resolve([{ id: 1, src: "" }]);
  return Promise.reject("Invalid user");
} // возращает Promise

getUsers().then().catch();
