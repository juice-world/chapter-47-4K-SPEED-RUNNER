var backGround;
var loadBackground;
var loadStick;
var stickPlayer;
var loadObstacle1;
var obstacle1;
var loadGround;
var ground;
var score;
var gamestate=PLAY;
var startMP3;


function preload(){
  loadStick=loadImage("stickAvatar.png");
  loadBackground=loadImage("background.jpg");
  loadObstacle1=loadImage("obstacle1.png");
  loadGround=loadImage("ground.jpg");
  startMP3=loadSound("start.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  backGround = createSprite(displayWidth/2,displayHeight/2,40,40);
 backGround.addImage(loadBackground)
 backGround.scale=1.45
 ground = createSprite(displayWidth/2-70,displayHeight-280,width,20);
 ground.addImage(loadGround)
 stickPlayer = createSprite(100,displayHeight-375, 50, 50);
 stickPlayer.addImage(loadStick)
 stickPlayer.scale=0.37
 score=0;
}

function spawnObstacles(){
 if(frameCount%70===0){
  obstacle1 = createSprite(200,200,20,20);
  obstacle1.addImage(loadObstacle1)
  obstacle1.scale=0.09
  var random=math.round
 }
  

}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.velocityX=-4
  if(ground.x <111){
    ground.x=ground.width/2

  }
  text("4K SPEED RUNNER-"+score,620,50);
  if(gamestate===PLAY){
    startMP3.play();
  }
}

