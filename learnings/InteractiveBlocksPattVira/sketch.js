

let distMouse = 50;
let cols; let rows; let size = 50;
let blocks = [];

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    blocks[i] = []; 
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new block(i * size , j * size);
    }
  }

  b = new block(width / 2, height / 2);
}

function draw() {

  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  
  }
}
