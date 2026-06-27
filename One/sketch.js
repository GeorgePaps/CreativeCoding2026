
// save first version
// color probabilities
// randomness in position 
// appear in shape
// reduce control parameters
// more interesting background
// maybe some movement

let colors = {
  'lemonChiffon' : '#FAF0CA',
  'tomato' : '#F85A3E',
  'atomicTangering' : '#FF7733',
  'fieryTerracotta' : '#E15634',
  'royalGold' : '#F4D35E'
}

// Parameters controlling the artwork

let canvasWidth = 600;
let canvasHeight = 750;
let widthMargin = 20;
let heightMargin = 20;
let radius = 4;
let numX = 60;
let numY = 75;
let color1Prob = 0.30;
let color2Prob = 0.30;
let color3Prob = 0.30;
let color4Prob = 0.10;

let circles = [];

let stepX;
let stepY;

function setup() {

  //
  createCanvas(canvasWidth, canvasHeight);

  //
  stepX = (canvasWidth - 2 * widthMargin - radius * 2)
          / (numX - 1)
  stepY = (canvasHeight - 2 * heightMargin - radius * 2)
          / (numY - 1)

  // Create the circles
  for (let i = 0; i < numX; i++) {
    circles[i] = [];
    for (let j = 0; j < numY; j++) {
      circles[i][j] = 
      new Circle(
              widthMargin + radius + i * stepX
            , heightMargin + radius + j * stepY
            , radius
            , colors.fieryTerracotta
          );
    }
  }
}

function draw() {
  
  background(colors.lemonChiffon); 
  
  for (let i=0; i < numX; i++){
    for (let j=0; j < numY; j++){
        circles[i][j].draw()
    }
  }
}