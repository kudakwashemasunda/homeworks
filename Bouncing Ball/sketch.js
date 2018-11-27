let x = 200;
let y = 150;
let ellipseSize = 10;
let speedX;
let speedY;
let col;;

function setup() {
  createCanvas(400, 400);
  noStroke();

  col = color (255, 255, 255)
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
}

function draw() {

  x = x + speedX;
  y = y + speedY;


  if ((x > width-25) || (x < 0+25)) {
    speedX = (speedX * -1);
    col = color (random(255), random(255), random(255));
  }


  if ((y > height-25) || (y < 0+25)) {
    speedY = speedY * -1;
    col = color (random(255), random(255), random(255));
  }
  fill(col);
  ellipse(x, y, ellipseSize, ellipseSize);

  let x2 = map (x, 0, width, width, 0);
  let y2 = map (y, 0, width, width, 0);

  ellipse(x2, y, ellipseSize, ellipseSize);
  ellipse(x, y2, ellipseSize, ellipseSize);
  ellipse(x2, y2, ellipseSize, ellipseSize);

}
