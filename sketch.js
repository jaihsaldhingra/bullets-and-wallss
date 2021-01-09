
var wall
var thickness,bullet
var speed,weight
var damage=0.5*weight*speed*speed/thickness*thickness*thickness

function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
speed=random(30,52)
weight=random(223,321)
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=("white")



}

function draw() {
  background(255,255,255);  
 
  if(isTouching(bullet,wall)){
if(damage>10){wall.shapeColor = "red"



}else{
  wall.shapeColor = "green"
  
}



  }
  
        
          
  drawSprites();
  
}
