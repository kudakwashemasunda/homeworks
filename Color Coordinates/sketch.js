function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);


  var mouse1 = map(mouseX, 0, width, 0,   255);
  var mouse2 = map(mouseY, 0, width, 0,   255);
  var mouse3 = map(mouseX, 0, width, 255, 0);
  var mouse4 = map(mouseY, 0, width, 255, 0);



  var color1 = color(255, 0,   0,   mouse1);
  var color2 = color(0,   255, 0,   mouse2);
  var color3 = color(255, 255, 0,   mouse3);
  var color4 = color(0,   255, 255, mouse4);


  fill(color1);
  rect(0, 0, width/2, height/2);

  fill(color2);
  rect(width/2, 0, width/2, height/2);

  fill(color3);
  rect(0, height/2, width/2, height/2);

  fill(color4);
  rect(width/2, height/2, width/2, height/2);
}
