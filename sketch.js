// constructor for spaceship
function Smiley(initX, initY, size) {
  // properties: location (x,y)
  this.x = initX;
  this.y = initY
  this.size = size;


  this.smile = function() {
    fill(190);
    rect(this.x, this.y, this.size/4, this.size);
    fill(110)
    ellipse(this.x+this.size/12, this.y+this.size/3.5, this.size/12, this.size/2);
    ellipse(this.x+this.size/5, this.y+this.size/9, this.size/16, this.size/16);
    triangle(this.x+this.size/4, this.y+this.size/4, this.x+this.size/4, this.y+this.size*3/4, this.x+this.size/4, this.y+this.size*3/4);
    line(this.x+this.size/4, this.y+this.size/.5, this.x+this.size/8, this.y+this.size/.5)
  }
}

function preload () {
  grass = loadImage('grass.jpg')
}

var smiley1;

function setup() {
  createCanvas(1000, 800);
  background(210);
  noStroke();
  smiley1 = new Smiley(100, 375, 300);
  smiley2 = new Smiley(300, 400, 275);
  smiley3 = new Smiley(500, 425, 250);
  smiley4 = new Smiley(700, 450, 225);
  }

function draw() {
  image(grass, 0, 0);
  smiley1.smile();
  smiley2.smile();
  smiley3.smile();
  smiley4.smile();
}

//function draw() {
//  fill(190);
//  rect(200, 100, 50, 150);
//  fill(130);
//  ellipse(210, 150, 10, 75);
//  ellipse(240, 130, 10, 10);
//  triangle(250, 150, 270, 190, 250, 190);
// }
