var iss,spaceCraft,bg,issimg,scimg;
var hasDocked = false;

function preload() {
    bg = loadImage("spacebg.jpg");
    issimg = loadImage("iss.png");
    scimg = loadImage("spacecraft1.png");
    scimg1 = loadImage("spacecraft2.png");
    scimg2 = loadImage("spacecraft3.png");
    scimg3 = loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  spaceCraft = createSprite(285,240);
  spaceCraft.addImage(scimg);
  spaceCraft.scale = 0.15;

  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);
  spaceCraft.addImage(scimg);
  if(!hasDocked){
    spaceCraft.x = spaceCraft.x + random(-1,1);
    if(keyDown("UP_ARROW")){
      spaceCraft.y = spaceCraft.y - 2;
    }
    if(keyDown("LEFT_ARROW")){
      spaceCraft.addImage(scimg3);
      spaceCraft.x = spaceCraft.x - 1;
    }
    if(keyDown("RIGHT_ARROW")){
      spaceCraft.addImage(scimg2);
      spaceCraft.x = spaceCraft.x + 1;
    }
    if(keyDown("DOWN_ARROW")){
      spaceCraft.addImage(scimg1);
    }
  }
  if(spaceCraft.y<=(iss.y + 70) && spaceCraft.x<=(iss.x - 10)){
    hasDocked = true;
    textSize(25);
    fill("white");
    text("Docking is successful",200,300);
  }
  drawSprites();
}