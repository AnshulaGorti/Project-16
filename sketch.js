
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var banana
var obstacles
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png")
 
}



function setup() {
createCanvas(600,600);
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
  ground= createSprite(400,350,1800,10);
  ground.velocityX=-4; 
  console.log(ground.x);
}


function draw() {
background("white");
  text("survivalTime:" + survivalTime, 500,50);
  
  if(keyDown("space")){
    monkey.velocityY= -12;
  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  
  //add gravity
  monkey.velocityY= monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  Banana(); 
  
  obstacles();
  
  survivalTime=survivalTime + Math.round(frameCount/100)

  drawSprites();
}


function Banana (){
  if(frameCount % 80 === 0){
    var banana= createSprite(600,600,20,20)
    banana.y= Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX=-3;
    banana.scale=0.1;
   banana.lifetime=200;
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle= createSprite(600,320,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.lifetime=200;
    obstacle.scale=0.2;
  }
}