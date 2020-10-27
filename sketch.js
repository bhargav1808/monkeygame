
var monkey , monkey_running,ground;
var banana ,bananaImage;
    var obstacle,obstacleImage;
var obstacleGroup;
var FoodGroup, bananaGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(400,400);
  monkey = createSprite(200,200,20,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
  console.log(monkey.y);
  
  ground = createSprite(200,400,800,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
   bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
  score = 0;
  var SurvivalTime = 0;
}
  
  
  
function draw() {

  background(300);
  
  if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x <0){
    ground.x=200;
    ground.y=400;
  }
  if(bananaGroup.isTouching(monkey)){
    score = score+1;
  }
  

  
  
  
  stroke("black");
  textSize(15);
  fill("black");
  text("Score: "+score,150,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime = Math.ceil(frameCount/frameRate())
  text("survivaltime: "+SurvivalTime,100,20);
  
  monkey.collide(ground);
 
  food();
  Obstacles();
  
  drawSprites();

  
}
function food() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
   banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
  }
}

function Obstacles(){
 if (frameCount % 300 === 0){
   obstacle = createSprite(300,400,10,40);
   obstacle.addImage(obstacleImage);
 obstacle.scale = 0.1;
    obstacle.lifetime = 150;
   obstacle.velocityX=-3;
   

    obstaclesGroup.add(obstacle);
 }
}

    






