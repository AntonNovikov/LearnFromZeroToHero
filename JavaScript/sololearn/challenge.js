var y = "John";
var x = +y; // NaN
console.log(typeof x); // number

// by Brains[Abidemi]
const city = {
  spain: "madrid",
  usa: "new-york",
  india: "punjab",
};
const city2 = Object.freeze(city);
// city.spain = "braca";
console.log((city == city2) + " " + city.spain);

// by Ivan
var arr = [1, 2, 3, 4, 5, 6, 7];
arr.length = 3;
console.log(arr.length);

//by Alquen
var x = 1;
var y = 4;
function func() {
  // it's not invoke
  while (y > 0) {
    x++;
    y--;
  }
}
// there isn't invoke
console.log(x);
