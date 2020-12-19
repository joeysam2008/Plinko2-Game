var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var divisions = [];
var particles = [];
var plinkos = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var particle;
var gameState = "PLAY";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score: "+score,20,30);
  text("Click on your mouse for next chance! "+score,470,30);
  Engine.update(engine);
//Scores in division
  text("500",15,530);
  text("500",90,530);
  text("500",190,530);
  text("500",250,530);
  text("100",350,530);
  text("100",420,530);
  text("100",510,530);
  text("200",580,530);
  text("200",650,530);
  text("200",750,530);
  
  
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();  
 }

 
  if (turn>= 5) {
    gameState ="end";
    textSize(70);
    text("Game Over", 150, 250);
  }

  for (var i = 0; i < particles.length; i++) 
  {
     particles.display();
  }

  if(particle != null)
  {
      particle.display();
        
      if (particle.body.position.x < 300 && particle.body.position.y>760) {
        score=score+500;
        particle=null;
        
      }
      else if (particle.body.position.x < 600 && particle.body.position.x > 301 && particle.body.position.y > 760) {
        score = score + 100;
        particle=null;
        
      }
      else if (particle.body.position.x < 900 && particle.body.position.x > 601 && particle.body.position.y > 760) {
        score = score + 200;
        particle=null;
        
      }
  }

    for (var k = 0; k < divisions.length; k++) {
      divisions[k].display();
    }
   
 
}
function mousePressed(){
  if(gameState != "end"){
    turn++;
     particle = new Particle(mouseX, 10, 10, 10); 
  }   
}
