var playbutton;

function setup() {
  createCanvas(800,400);
  playbutton = createButton("PLAY");
  playbutton.position(400,200);
}

function draw() {
  background(255,255,255);  
 textSize(50);
 fill("black");
 text("We Paint",340,100)
  drawSprites();
}