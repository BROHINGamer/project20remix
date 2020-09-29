var car,wall,speed,mass;
function setup() {
  createCanvas(2000,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(800,200,30,60);
  speed=random(55,90);
  mass=random(400,1500);
  
}

function draw() {
  background(255,255,255); 
  car.velocityX=speed; 
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5*mass*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation<180&&deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  }
  drawSprites();
}