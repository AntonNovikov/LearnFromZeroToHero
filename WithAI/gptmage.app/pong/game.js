const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballRadius = 10;
let ballSpeedX = 5;
let ballSpeedY = 5;

let paddleHeight = 80;
let paddleWidth = 10;
let paddleY = (canvas.height - paddleHeight) / 2;

let aiPaddleY = (canvas.height - paddleHeight) / 2;

let playerScore = 0;
let aiScore = 0;

function drawBackground() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#fff';
  ctx.font = '30px Arial';
  ctx.fillText(`Player: ${playerScore}`, 50, 50);
  ctx.fillText(`AI: ${aiScore}`, canvas.width - 150, 50);
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

function drawPaddle(x, y) {
  ctx.beginPath();
  ctx.rect(x, y, paddleWidth, paddleHeight);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY + ballRadius > canvas.height || ballY - ballRadius < 0) {
    ballSpeedY = -ballSpeedY;
  }

  if (ballX + ballRadius > canvas.width) {
    playerScore++;
    resetBall();
  }

  if (ballX - ballRadius < 0) {
    aiScore++;
    resetBall();
  }

  if (
    ballX + ballRadius > canvas.width - paddleWidth &&
    ballY > aiPaddleY &&
    ballY < aiPaddleY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  if (
    ballX - ballRadius < paddleWidth &&
    ballY > paddleY &&
    ballY < paddleY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
}

function moveAiPaddle() {
  const paddleCenter = aiPaddleY + paddleHeight / 2;
  if (paddleCenter < ballY - 35) {
    aiPaddleY += 7;
  } else if (paddleCenter > ballY + 35) {
    aiPaddleY -= 7;
  }
}

function gameLoop() {
  drawBackground();
  drawBall();
  drawPaddle(0, paddleY);
  drawPaddle(canvas.width - paddleWidth, aiPaddleY);
  moveBall();
  moveAiPaddle();
  requestAnimationFrame(gameLoop);
}

canvas.addEventListener('mousemove', (event) => {
  paddleY = event.clientY - paddleHeight / 2;
});

gameLoop();