const arr = [5, 3, 6, 2, 10]
function findSmaller(arr) {
  smallest = arr[0];
  smallestIndex = 0;
  for (let i = 1; i < arr.length; i++) {
    console.log(i);
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}
console.log(findSmaller(arr));

function selectionSort(arr) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }
}

console.log(
    selectionSort(arr)
)