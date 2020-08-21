const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var plinko = [];
var particles = [];
var division = [];
var divisionHeight = 300;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  D1 = new Division(645, 450, 10, 700);
  D2 = new Division(5, 450, 10, 700);
  D3 = new Division(325, 695, 650, 10);
  D4 = new Division(325, 5, 650, 10);

  for(var k = 0; k <= width; k = k+95){
    division.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }

  for(var l = 0; l <= width; l = l+70){
    plinko.push(new Plinko(l, 60, 15));
  }
  for(var l = 0; l <= width; l = l+50){
    plinko.push(new Plinko(l, 160, 15));
  }
  for(var l = 0; l <= width; l = l+87){
    plinko.push(new Plinko(l, 260, 15));
  }

  ground = new Ground(width/2,693,650,10);

  Engine.run(engine);

  
}

function draw() {
  background(82,102,200);  
  
  for(var k = 0; k < division.length; k++){
    division[k].display();
  }

  for(var l = 0; l < plinko.length; l++){
    plinko[l].display();
  }
  for(var l = 0; l < plinko.length; l++){
    plinko[l].display();
  }
  for(var l = 0; l < plinko.length; l++){
    plinko[l].display();
  }

  if(frameCount % 100 === 0){
    particle.push(new Particle(random(0, 630), 10, 10));
  }
  drawSprites();
}