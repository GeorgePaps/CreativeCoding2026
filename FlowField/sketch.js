let width = 1200;
let height = 800;

let grid = [];

function setup() {
  createCanvas(width, height);
  resolution = floor(min(width, height) / 200);

  xMin = - width / 2;
  xMax = width * 1.5;
  yMin = -height / 2;
  yMax = height * 1.5;

  // Create a grid of angles
  // for (let i = 0; i < width; i += resolution) {
  //   for (let j = 0; j < height; j += resolution) {
    
  //   }
  // }

}

function draw() {
  background(245);
}
