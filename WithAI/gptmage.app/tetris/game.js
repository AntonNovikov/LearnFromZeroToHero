const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const blockSize = 20;
const rows = canvas.height / blockSize;
const columns = canvas.width / blockSize;

let score = 0;

const colors = [
  'black',
  'cyan',
  'yellow',
  'purple',
  'green',
  'red',
  'blue',
  'orange'
];

const tetrominoes = [
  [[1, 1, 1, 1]],
  [[1, 1], [1, 1]],
  [[1, 1, 0], [0, 1, 1]],
  [[0, 1, 1], [1, 1, 0]],
  [[1, 1, 1], [0, 1, 0]],
  [[1, 1, 1], [1, 0, 0]],
  [[1, 1, 1], [0, 0, 1]]
];

function drawBlock(x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
  ctx.strokeStyle = 'white';
  ctx.strokeRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      const color = grid[row][col];
      if (color) {
        drawBlock(col, row, colors[color]);
      }
    }
  }

  for (let row = 0; row < currentTetromino.length; row++) {
    for (let col = 0; col < currentTetromino[row].length; col++) {
      if (currentTetromino[row][col]) {
        drawBlock(currentTetrominoX + col, currentTetrominoY + row, colors[currentTetrominoColor]);
      }
    }
  }
}

function collide() {
  for (let row = 0; row < currentTetromino.length; row++) {
    for (let col = 0; col < currentTetromino[row].length; col++) {
      if (
        currentTetromino[row][col] &&
        (grid[currentTetrominoY + row] && grid[currentTetrominoY + row][currentTetrominoX + col]) !== 0
      ) {
        return true;
      }
    }
  }
  return false;
}

function merge() {
  for (let row = 0; row < currentTetromino.length; row++) {
    for (let col = 0; col < currentTetromino[row].length; col++) {
      if (currentTetromino[row][col]) {
        grid[currentTetrominoY + row][currentTetrominoX + col] = currentTetrominoColor;
      }
    }
  }
}

function rotate() {
  const rotatedTetromino = [];
  for (let row = 0; row < currentTetromino[0].length; row++) {
    const newRow = [];
    for (let col = currentTetromino.length - 1; col >= 0; col--) {
      newRow.push(currentTetromino[col][row]);
    }
    rotatedTetromino.push(newRow);
  }
  return rotatedTetromino;
}

function moveDown() {
  currentTetrominoY++;
  if (collide()) {
    currentTetrominoY--;
    merge();
    clearLines();
    generateTetromino();
    if (collide()) {
      gameOver();
    }
  }
}

function moveLeft() {
  currentTetrominoX--;
  if (collide()) {
    currentTetrominoX++;
  }
}

function moveRight() {
  currentTetrominoX++;
  if (collide()) {
    currentTetrominoX--;
  }
}

function clearLines() {
  outer: for (let row = rows - 1; row >= 0; row--) {
    for (let col = 0; col < columns; col++) {
      if (!grid[row][col]) {
        continue outer;
      }
    }
    grid.splice(row, 1);
    grid.unshift(Array(columns).fill(0));
    score++;
  }
}

function gameOver() {
  clearInterval(gameLoop);
  alert('Game Over! Your score: ' + score);
}

function generateTetromino() {
  const randomIndex = Math.floor(Math.random() * tetrominoes.length);
  currentTetromino = tetrominoes[randomIndex];
  currentTetrominoColor = randomIndex + 1;
  currentTetrominoX = Math.floor(columns / 2) - Math.floor(currentTetromino[0].length / 2);
  currentTetrominoY = 0;
}

const grid = Array(rows).fill().map(() => Array(columns).fill(0));
let currentTetromino;
let currentTetrominoColor;
let currentTetrominoX;
let currentTetrominoY;

generateTetromino();

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp') {
    const rotated = rotate();
    if (!collide(rotated)) {
      currentTetromino = rotated;
    }
  } else if (event.key === 'ArrowDown') {
    moveDown();
  } else if (event.key === 'ArrowLeft') {
    moveLeft();
  } else if (event.key === 'ArrowRight') {
    moveRight();
  }
});

const gameLoop = setInterval(() => {
  moveDown();
  draw();
}, 100);