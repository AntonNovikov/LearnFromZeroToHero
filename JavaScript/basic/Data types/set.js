const numbers = [1, 2, 3, 4, 5, 5, 6, 6, 66];
console.log(numbers);

const uniqueNumbers = new Set(numbers);

console.log(uniqueNumbers);
console.log(uniqueNumbers.length); // undefined хотя в мозиллне написано 0
console.log(uniqueNumbers.size); // undefined

uniqueNumbers.delete(2);
console.log(uniqueNumbers);
console.log(uniqueNumbers.length); // undefined хотя в мозиллне написано 0
console.log(uniqueNumbers.size); // undefined
