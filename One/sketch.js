
// color probabilities
  //  check for probabilitie of over one
// randomness in position 
// appear in shape
// reduce control parameters
// more interesting background
// maybe some movement

let colors = {
  'lemonChiffon' : {'hex' : '#FAF0CA', 'prob' : 0.225} ,
  'tomato' : {'hex' : '#F85A3E', 'prob' : 0.225} ,
  'atomicTangerine' : {'hex' : '#FF7733', 'prob' : 0.225} ,
  'fieryTerracotta' : {'hex' : '#E15634', 'prob' : 0.3} ,
  'royalGold' : {'hex' : '#F4D35E', 'prob' : 0.1} 
}

// Parameters controlling the artwork

let canvasWidth = 600;
let canvasHeight = 760;
let widthMargin = 20;
let heightMargin = 20;
let radius = 15;
let numX = 15;
let numY = 19;

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
            , getRandomColor(colors)
          );
    }
  }
}

function draw() {
  
  background(55); 
  
  for (let i=0; i < numX; i++){
    for (let j=0; j < numY; j++){
        circles[i][j].draw()
    }
  }
}

function getRandomColor(colors) {

  let r = random(); // random number in [0, 1)
  let cumulative = 0;

  for (let color of Object.values(colors)) {
    cumulative += color.prob;

    if (r < cumulative) {
      return color.hex;
    }
  }
}