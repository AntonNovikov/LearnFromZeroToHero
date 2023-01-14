// Условный (тернарный) оператор

// условие ? выражение1 : выражение2

// "The fee is " + (isMember ? "$2.00" : "$10.00")


// task
// переместить в файл оперторы и операнды
console.log(5**3) // Вроде рекомендуется вместо Math.pow()

//https://habr.com/ru/amp/post/656583/

const point = { x: 10, y: 15, z: 20 };

// ✅ желательно
const { x, y } = point;

// ✅ выведет 10
console.log(x);

// ✅ выведет 15
console.log(y);