var bullet,wall,thickness;
var speed,weight


function setup() {
  createCanvas(1600,400);

  thickness=random(20,83);

  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="white";
  wall=createSprite(1400,200,thickness,height/2);
  wall.shapeColor="red";
  
  speed=random(223,321);
  weight=random(30,52);
  
}

function draw() {
  background(100); 

  
bullet.velocityX = speed;


  
  //if(bullet.x-wall.x<wall.width/2+bullet.width/2 &&
    //wall.x-bullet.x<wall.width/2+bullet.width/2 &&
   // wall.y-bullet.y<wall.height/2+bullet.height/2 &&
    //bullet.y-wall.y<wall.height/2+bullet.height/2)
    //{bullet.shapeColor="green";
    //wall.shapeColor="green";
    //bullet.velocityX=0
  //}
  //else{bullet.shapeColor="white";
  //wall.shapeColor="red";
 
  if(hasCollided(bullet, wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight*speed*speed/(thickness *thickness*thickness)
 
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }



    
  }
  drawSprites();
}



function hasCollided(Lbullet, Lwall)
{

bulletRightEdge= Lbullet.x +Lbullet.width; 
wallLeftEdge=Lwall.x;

if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false

}