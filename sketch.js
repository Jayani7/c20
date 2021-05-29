var fixedRect,movRect;


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movRect = createSprite(400, 200, 80, 30);
  movRect.shapeColor = "green";
  movRect.debug = true;
}

function draw() {
  background(255,255,255);
  
  movRect.x = World.mouseX;
  movRect.y = World.mouseY;

  if(movRect.x-fixedRect.x<fixedRect.width/2+movRect.width/2&&
    fixedRect.x-movRect.x<fixedRect.width/2+movRect.width/2&&
    movRect.y-fixedRect.y<fixedRect.height/2+movRect.height/2&&
    fixedRect.y-movRect.y<fixedRect.height/2+movRect.height/2){
    fixedRect.shapeColor = "red";
    movRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movRect.shapeColor = "green";
  }
  drawSprites();
}