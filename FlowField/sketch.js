let width = 1200;
let height = 800;

const P = palettes.Monochrome; // Select the first palette for now

let field = [];

function setup() {
  createCanvas(width, height);
}

function draw() {
  background(P.background);
  console.log(P.background);
}
