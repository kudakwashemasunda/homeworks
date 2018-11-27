let selection = 0;

function setup() {
  createCanvas(1000, 500);
  strokeWeight(8);
  noFill();
  frameRate(10);

}

function draw() {

  for (var i = 0; i < 300; i++) {
    push();

    translate(random(-100, width+100), random(-100, height+100));

    rotate(random(2*PI));

    scale(random(3));


    let makeRed = map(mouseX, 0, width, 0, 255);
    let makeBlue = map(mouseY, 0, height, 0, 255);


    stroke(makeRed, random(255), makeBlue);

    fill(0, random(255));


    if (selection===0) ellipse(0, 0, 40, 40);
    if (selection===1) rect(0, 0, 40, 40);
    if (selection===2) triangle(30, 75, 58, 20, 86, 75);

    pop();
  }

  
  if (key === 'a') selection = 0;
  if (key === 's') selection = 1;
  if (key === 'd') selection = 2;
}
