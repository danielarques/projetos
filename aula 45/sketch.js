var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg
var PLAY=0
var END=1
var gamestate = PLAY
var score = 0

function preload(){
bgImg = loadImage("assets/rua.jpg")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
predio_img= loadImage("assets/spike.png")
outro_predio_img= loadImage("assets/bombss.jpg")
predio_3_img= loadImage("assets/marios.png")
balão_img= loadImage("assets/aaaaaa.png")
pato_img= loadImage("assets/sonics.jpg")

}

function setup(){

//imagem de plano de fundo
bg = createSprite(125,305,1,1);
bg.addImage(bgImg);
bg.scale = 2

//criando canto superior e inferior
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//criando o balão     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;

obstacleGroup = new Group();
obstacle2Group = new Group();

}

function draw() {
  
  background("black");
  textSize(14)
  fill("black")
  text("pontos: "+ score,250,50)

  if(gamestate === PLAY){

        if(keyDown("space")) {
                balloon.velocityY = -9 ;
         }

         balloon.velocityY = balloon.velocityY + 1;
         spawnObstacles();
         spawnObstacles2();
         score = score + Math.round(getFrameRate()/60)
         if(balloon.isTouching(obstacleGroup) || balloon.isTouching(obstacle2Group)){
           gamestate = END
         }
       
  }else if(gamestate === END){
    balloon.velocityY = 0
  }
        drawSprites();
        
}


function spawnObstacles() {
  if (frameCount % 90 === 0){
     var obstacle = createSprite(400,340,10,40);
    
     var rand = Math.round(random(1,3));
     switch(rand) {
       case 1: obstacle.addImage(predio_img);
               break;
       case 2: obstacle.addImage(outro_predio_img);
               break;
       case 3: obstacle.addImage(predio_3_img)
               break
       default: break;}

       obstacle.velocityX = -3
       obstacle.scale = 0.200
       obstacle.lifetime = 200
       balloon.depth = balloon.depth+1
       obstacleGroup.add(obstacle);
  }
}

function spawnObstacles2() {
        if (frameCount % 120 === 0){
           var obstacle2 = createSprite(400,40,10,40);
          
           var rand2 = Math.round(random(1,3));
           switch(rand2) {
             case 1: obstacle2.addImage(balão_img);
                     break;
             case 2: obstacle2.addImage(pato_img);
                     break;
             default: break;}

             obstacle2.velocityX = -4
             obstacle2.scale = 0.3
             obstacle2.lifetime = 200
             balloon.depth = balloon.depth+1
             obstacle2Group.add(obstacle2);
        }
      }