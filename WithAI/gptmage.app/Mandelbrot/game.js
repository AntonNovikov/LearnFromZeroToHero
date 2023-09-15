const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = 600;
const height = canvas.height = 600;

const maxIterations = 100;

let zoom = 1;
let offsetX = -0.5;
let offsetY = 0;
let zoomSpeed = 0.1;

function mandelbrot(x, y) {
  let real = x;
  let imag = y;
  let n = 0;
  while (n < maxIterations) {
    let real2 = real * real;
    let imag2 = imag * imag;
    if (real2 + imag2 > 4) {
      return n;
    }
    imag = 2 * real * imag + y;
    real = real2 - imag2 + x;
    n++;
  }
  return -1;
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let a = (x - width / 2) / (0.5 * zoom * width) + offsetX;
      let b = (y - height / 2) / (0.5 * zoom * height) + offsetY;
      let n = mandelbrot(a, b);
      if (n === -1) {
        ctx.fillStyle = '#000';
        ctx.fillRect(x, y, 1, 1);
      } else {
        let hue = n / maxIterations * 360;
        ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
  requestAnimationFrame(draw);
}

draw();

window.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 37: // left arrow
      offsetX -= 0.1 / zoom;
      break;
    case 38: // up arrow
      offsetY -= 0.1 / zoom;
      break;
    case 39: // right arrow
      offsetX += 0.1 / zoom;
      break;
    case 40: // down arrow
      offsetY += 0.1 / zoom;
      break;
    case 187: // plus
      zoom *= 1.1;
      break;
    case 189: // minus
      zoom /= 1.1;
      break;
  }
});

canvas.addEventListener('wheel', function(event) {
  event.preventDefault();
  if (event.deltaY < 0) {
    zoom /= 1 - zoomSpeed;
  } else {
    zoom *= 1 - zoomSpeed;
  }
});