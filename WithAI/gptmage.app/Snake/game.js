const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let snake = [{x: 10, y: 10}];
let food = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
let direction = {x: 1, y: 0};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'green';
  snake.forEach(segment => ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20));
  ctx.fillStyle = 'red';
  ctx.fillRect(food.x * 20, food.y * 20, 20, 20);
}

function move() {
  let head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    food = {x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20)};
  } else {
    snake.pop();
  }
}

function loop() {
  move();
  draw();
}

setInterval(loop, 100);

document.addEventListener('keydown', event => {
  if (event.keyCode === 37) direction = {x: -1, y: 0};
  if (event.keyCode === 38) direction = {x: 0, y: -1};
  if (event.keyCode === 39) direction = {x: 1, y: 0};
  if (event.keyCode === 40) direction = {x: 0, y: 1};
});