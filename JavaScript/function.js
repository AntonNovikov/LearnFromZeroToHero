// https://techrocks.ru/2021/08/28/regular-and-arrow-functions-in-javascript/

// Function declaration example:
function calculateCircleArea(radius) {
  return MathMath.PI * radius ** 2;
}
// Function expression example:
const calculateCircleArea = function (radius) {
  return MathMath.PI * radius ** 2;
};
// Arrow function example:
const calculateCircleArea = (radius) => {
  return MathMath.PI * radius ** 2;
};

// В стрелочных функциях нет собственного объекта arguments.

// при помощи стрелочных функций функции-конструкторы не создаются.