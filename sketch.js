var turtle;
var angle = 0;
var score = 0;
var x = 50;
var y = 50;

function preload()
{
  turtle = loadImage("turtle.png");
}

function setup() 
{  
  createCanvas(900, 500);
  imageMode(CENTER);
  textFont("Arial");
}

function draw() {
  background(0, 255, 0);
  fill(0);
  textSize(50);
  text("Hello World!", 100, 100);
  text("score: " + score, 250, 250);


  translate(x, y);
  rotate(radians(angle));
  image(turtle, 0, 0, 256, 256);
  if(x < 800)
  {
    x = x + 1;
    score++;
  }
  else
  {
    x = 50;
  }


  //translate(mouseX, mouseY);
  //scale
  //rotate(radians(45));
  //image(turtle, 0, 0, 256, 256);
}