
var movingRect, fixedRect, rect1, rect2, rect3, rect4;

function setup() {
  createCanvas(800,400);
  
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "blue";

  fixedRect = createSprite(200,200,70,50);
  fixedRect.shapeColor = "yellow";

  rect1 = createSprite(100,50,20,20);
  rect1.shapeColor = "red";

  rect2 = createSprite(150,50,20,20);
  rect2.shapeColor = "red";
  
  rect3 = createSprite(600,50,20,20);
  rect3.shapeColor = "red";
  
  rect4 = createSprite(200,50,20,20);
  rect4.shapeColor = "red";

  movingRect.debug = true;
  fixedRect.debug = true;
rect3.velocityX = -3;
rect4.velocityX = 3;

}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

bounceOff(rect3,rect4);



  if(isTouching(rect2,movingRect)){
    movingRect.shapeColor = "orange";
    rect2.shapeColor = "orange";
  }else{
    movingRect.shapeColor = "blue";
    rect2.shapeColor = "red";
  
  };
 
  drawSprites();
}
