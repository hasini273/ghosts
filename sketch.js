var back;
var backi,door,doori,doorGroup,border,borderi,borderGroup;
var ghost,ghosti;
var PLAY=1;
var END=0;
var gameState=PLAY;
function preload(){
  backi=loadImage("tower.png");
  doori=loadImage("door.png");
  borderi=loadImage("climber.png")
 ghosti=loadImage("ghost-standing.png")


}
function setup(){
  createCanvas(600,600);
  back=createSprite(300,300);
  back.addImage(backi);
  back.velocityY=1;
   ghost=createSprite(300,300);
  ghost.addImage(ghosti);
  ghost.scale=0.5;
  borderGroup=new Group();
  doorGroup=new Group();
}
function draw(){
  background(0);
  if(gameState===PLAY){
  if(back.y>400){
    back.y=300;
  }
   spwanDoors();
    if(keyDown("space")){
ghost.velocityY=-5;  
    }
    ghost.velocityY=ghost.velocityY+1;
     if(keyDown("right_arrow")){
ghost.x=ghost.x+3;  
    }
     if(keyDown("left_arrow")){
ghost.x=ghost.x-3;  
    }
    if(ghost.y>600){
      gameState=END;
    }
}
  if(gameState===END){
    textSize(40)
  text("gameover",300,300);
  }
  
  
  
  
  
  
  drawSprites();
}
function spwanDoors(){
if(frameCount%300===0){
  door=createSprite(random(100,400),-50)
   door.addImage(doori);
  door.velocityY=1;
  door.setLifetime=600;
  doorGroup.add(door);
  border=createSprite(200,10);
  border.addImage(borderi);
  border.velocityY=1;
  border.x=door.x;
 border.setLifetime=600;
  borderGroup.add(border);
  ghost.depth=door.depth+1;
}
   
}

