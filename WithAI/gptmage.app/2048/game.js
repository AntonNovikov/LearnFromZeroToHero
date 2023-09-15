const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gridSize = 4;
const cellSize = 100;
const padding = 10;
const canvasSize = (cellSize + padding) * gridSize + padding;

canvas.width = canvasSize;
canvas.height = canvasSize;

let grid = [];

function initializeGrid() {
    for (let i = 0; i < gridSize; i++) {
        grid[i] = [];
        for (let j = 0; j < gridSize; j++) {
            grid[i][j] = 0;
        }
    }
}

function drawGrid() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const x = padding + j * (cellSize + padding);
            const y = padding + i * (cellSize + padding);
            const value = grid[i][j];
            ctx.fillStyle = getColor(value);
            ctx.fillRect(x, y, cellSize, cellSize);
            ctx.fillStyle = '#000000';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(value, x + cellSize / 2, y + cellSize / 2);
        }
    }
}

function getColor(value) {
    switch (value) {
        case 2:
            return '#eee4da';
        case 4:
            return '#ede0c8';
        case 8:
            return '#f2b179';
        case 16:
            return '#f59563';
        case 32:
            return '#f67c5f';
        case 64:
            return '#f65e3b';
        case 128:
            return '#edcf72';
        case 256:
            return '#edcc61';
        case 512:
            return '#edc850';
        case 1024:
            return '#edc53f';
        case 2048:
            return '#edc22e';
        default:
            return '#cdc1b4';
    }
}

function addRandomTile() {
    const availableCells = [];
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === 0) {
                availableCells.push({
                    row: i,
                    col: j
                });
            }
        }
    }
    if (availableCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableCells.length);
        const randomCell = availableCells[randomIndex];
        grid[randomCell.row][randomCell.col] = Math.random() < 0.9 ? 2 : 4;
    }
}

function moveTiles(direction) {
    let moved = false;
    let merged = false;

    switch (direction) {
        case 'up':
            for (let j = 0; j < gridSize; j++) {
                for (let i = 1; i < gridSize; i++) {
                    if (grid[i][j] !== 0) {
                        let k = i;
                        while (k > 0 && grid[k - 1][j] === 0) {
                            grid[k - 1][j] = grid[k][j];
                            grid[k][j] = 0;
                            k--;
                            moved = true;
                        }
                        if (k > 0 && grid[k - 1][j] === grid[k][j] && !merged) {
                            grid[k - 1][j] *= 2;
                            grid[k][j] = 0;
                            merged = true;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'down':
            for (let j = 0; j < gridSize; j++) {
                for (let i = gridSize - 2; i >= 0; i--) {
                    if (grid[i][j] !== 0) {
                        let k = i;
                        while (k < gridSize - 1 && grid[k + 1][j] === 0) {
                            grid[k + 1][j] = grid[k][j];
                            grid[k][j] = 0;
                            k++;
                            moved = true;
                        }
                        if (k < gridSize - 1 && grid[k + 1][j] === grid[k][j] && !merged) {
                            grid[k + 1][j] *= 2;
                            grid[k][j] = 0;
                            merged = true;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'left':
            for (let i = 0; i < gridSize; i++) {
                for (let j = 1; j < gridSize; j++) {
                    if (grid[i][j] !== 0) {
                        let k = j;
                        while (k > 0 && grid[i][k - 1] === 0) {
                            grid[i][k - 1] = grid[i][k];
                            grid[i][k] = 0;
                            k--;
                            moved = true;
                        }
                        if (k > 0 && grid[i][k - 1] === grid[i][k] && !merged) {
                            grid[i][k - 1] *= 2;
                            grid[i][k] = 0;
                            merged = true;
                            moved = true;
                        }
                    }
                }
            }
            break;
        case 'right':
            for (let i = 0; i < gridSize; i++) {
                for (let j = gridSize - 2; j >= 0; j--) {
                    if (grid[i][j] !== 0) {
                        let k = j;
                        while (k < gridSize - 1 && grid[i][k + 1] === 0) {
                            grid[i][k + 1] = grid[i][k];
                            grid[i][k] = 0;
                            k++;
                            moved = true;
                        }
                        if (k < gridSize - 1 && grid[i][k + 1] === grid[i][k] && !merged) {
                            grid[i][k + 1] *= 2;
                            grid[i][k] = 0;
                            merged = true;
                            moved = true;
                        }
                    }
                }
            }
            break;
    }

    if (moved) {
        addRandomTile();
    }
}

function isGameOver() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            if (grid[i][j] === 0) {
                return false;
            }
            if (i > 0 && grid[i][j] === grid[i - 1][j]) {
                return false;
            }
            if (i < gridSize - 1 && grid[i][j] === grid[i + 1][j]) {
                return false;
            }
            if (j > 0 && grid[i][j] === grid[i][j - 1]) {
                return false;
            }
            if (j < gridSize - 1 && grid[i][j] === grid[i][j + 1]) {
                return false;
            }
        }
    }
    return true;
}

function handleKeyDown(event) {
    if (isGameOver()) {
        return;
    }

    switch (event.key) {
        case 'ArrowUp':
            moveTiles('up');
            break;
        case 'ArrowDown':
            moveTiles('down');
            break;
        case 'ArrowLeft':
            moveTiles('left');
            break;
        case 'ArrowRight':
            moveTiles('right');
            break;
    }

    drawGrid();

    if (isGameOver()) {
        // Game over logic here
    }
}

document.addEventListener('keydown', handleKeyDown);

initializeGrid();
addRandomTile();
addRandomTile();
drawGrid();