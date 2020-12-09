function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}

let ax, ay;
let bx, by;
let cx, cy;
let x, y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ax = width / 2;
  ay = 100;
  bx = 250;
  by = height-100;
  cx = width-250;
  cy = height-100;
  x = random(width);
  y = random(height);
  background(0);
  stroke(255);
  strokeWeight(8);
  point(ax, ay);
  point(bx, by);
  point(cx, cy);
}

function draw() {

  for (let i = 0; i < 100; i++) {
    strokeWeight(2);
    point(x, y);

    let r = floor(random(3));
    if (r == 0) {
      stroke(255, 0, 0);
      x = lerp(x, ax, 0.5);
      y = lerp(y, ay, 0.5);

    } else if (r == 1) {
      stroke(0, 250, 255);
      x = lerp(x, bx, 0.5);
      y = lerp(y, by, 0.5);
    } else if (r == 2) {
      stroke(255, 205, 0);
      x = lerp(x, cx, 0.5);
      y = lerp(y, cy, 0.5);
    }
  }
}