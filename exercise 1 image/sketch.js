//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(800, 700);


  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(1);

  //second row blue
  fill(0, 0, 255);
  ellipse(200, 200, 100, 100);

  //second row red
  fill(255, 0, 0);
  ellipse(width-500,200, 100, 100);

  //second row green
  fill(0, 255, 0);
  ellipse(400, 200, 100, 100);

  //second row yellow
  fill(255, 255, 0);
  ellipse(width-300, 200, 100, 100);

  //second row white
  fill(255, 255, 255);
  ellipse(600, 200, 100, 100)

  //first row red
  fill(255, 0, 0);
  ellipse(width-550,150, 100, 100);

  //first row green
  fill(0, 255, 0);
  ellipse(350, 150, 100, 100);

  //first row yellow
  fill(255, 255, 0);
  ellipse(width-350, 150, 100, 100);

  //first row white
  fill(255, 255, 255);
  ellipse(550, 150, 100, 100)

  //green
  fill(0, 255, 0);
  ellipse(300, 100, 100, 100);

  //yellow
  fill(255, 255, 0);
  ellipse(width-400, 100, 100, 100);

  //white
  fill(255, 255, 255);
  ellipse(500, 100, 100, 100)

  //second row yellow from top
  fill(255, 255, 0);
  ellipse(width-450, 50, 100, 100);

  //second row white from top
  fill(255, 255, 255);
  ellipse(450, 50, 100, 100)

  //first row white from top
  fill(255, 255, 255);
  ellipse(400, 0, 100, 100)

  //first row white from top
  fill(255, 0, 0);
  ellipse(400, 350, 100, 100)

 //line left side wall
 fill(0, 255, 255)
 ellipse(150, 500, 5, 600)

 //line right side wall
 fill(0, 255, 255)
 ellipse(650, 500, 5, 600)

 //line right side door
 fill(0, 255, 255)
 ellipse(350, 700, 5, 400)

 //line left side door
 fill(0, 255, 255)
 ellipse(450, 700, 5, 400)

 //line upper door
 fill(0, 255, 255)
 ellipse(400, 500, 100, 5)

}
