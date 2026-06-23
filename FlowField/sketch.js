const width = 1200;
const height = 800;

const leftBorder = -width / 2;
const rightBorder = width * 1.5;
const topBorder = -height / 2;
const bottomBorder = height * 1.5;

const resolution = Math.floor(Math.min(width, height) / 20);

const numCols = Math.floor((rightBorder - leftBorder) / resolution);
const numRows = Math.floor((bottomBorder - topBorder) / resolution);

let grid = [];

function setup() {

  // Create Background Canvas
  createCanvas(width, height);

  // Setup
  angleMode(DEGREES);

  // Create Grid
  for (let row = 0; row < numRows; row++) {
    grid[row] = [];
    for (let col = 0; col < numCols; col++) {
      grid[row][col] = createCell(row, col);
    }
  }
}

  
function draw() {
  background(245);

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        drawArrow(grid[row][col]);
    }
  }
}


function drawArrow(cell) {

  push();
  translate(cell.x, cell.y);
  rotate(cell.angle);
  stroke(0);
  // Draw Arrow
  line(0, 0, resolution, 0);
  line(resolution, 0, resolution - 5, -5);
  line(resolution, 0, resolution - 5, 5);
  pop();
  
} // end drawArrow function

function createCell(row, col) {
  return { 
    row: row,
    col: col,
    x: leftBorder + col * resolution,
    y: topBorder + row * resolution,
    angle: 80
  };
} // end createCell function
  
