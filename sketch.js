const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400, 500);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground = new Ground(200, 480, 400, 10);
  division1 = new Divisions(5, 400, 7, 150);
  division2 = new Divisions(50, 400, 10, 150);
  division3 = new Divisions(100, 400, 10, 150);
  division4 = new Divisions(150, 400, 10, 150);
  division5 = new Divisions(200, 400, 10, 150);
  division6 = new Divisions(250, 400, 10, 150);
  division7 = new Divisions(300, 400, 10, 150);
  division8 = new Divisions(350, 400, 10, 150);
  division9 = new Divisions(396, 400, 7, 150);

}

var particle = [];

for(var j = 0; j < particles.length; j++) {

  particles[j].display();
}
for(var k = 0; k < divisions.length; k++ ){

  divisions[k].display();
}

var plinko = [];

for(var j = 40; j <= width; j=j+50) 
{
    plinkos.push(new Plinko(j, 75))
}
for(var j = 15; j <= width-10; j=j+50) |
{
    plinkos.push(new Plinko (j, 175))
}

var divisions = [];
var divisionheight= 300;

function draw() {
  background(0); 

  Engine.update(engine);

  if(frameCount%60 === 0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }


  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();
  division8.display();
  division9.display();

  //drawSprites();
}

for(var k =0; k <= width; k = k+80) {
  divisions.push(new Divisions (k, height-divisionHeight/2, 10, divisionHeight));
}

