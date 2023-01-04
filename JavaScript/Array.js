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

function printArray(a){
  var len = a.length, i = 0;
  if(len == 0)
    console.log("Empty Array");
  else
  { do {
    console.log(a[i]);
  } while (++i < len);
  }
}
