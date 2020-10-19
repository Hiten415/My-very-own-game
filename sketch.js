//Race to Fortune Code
var doctor;
var bg,ybiker,obiker,doctordriver,horsey,police,tree;
var bg;

function preload(){
  bgimg = loadImage("images/bgr.png");
  ybiker = loadImage("images/BikeYoung.png");
  oBiker = loadImage("images/BikeOld.png");
  doctordriver = loadImage("images/Driver.png");
  horsey = loadImage("images/Horseeman.png");
  cycler = loadImage("images/PlayerCycle.png");
  police = loadImage("images/Police.png");
  tree = loadImage("images/Tree.png");
}

function setup() {
  createCanvas(1550,750);

  bg = createSprite(700,400);
  bg.addImage("bgimage",bgimg);
  bg.scale = 2.36;
  bg.y = height/2;

  doctor = createSprite(400,700,50,50);
  doctor.shapeColor = "red";
}

function draw() {
  background(0);

  bg.velocityY = 8;

  if(bg.y>600){
    bg.y = height/2;

  }
  
  
  doctor.x = mouseX;
  drawSprites();
}