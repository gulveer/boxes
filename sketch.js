const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  var object_options ={
    isStatic : true
  }
  ground = Bodies.rectangle(400,390,800,20,object_options);
  World.add(world,ground);

  var ball_options ={
    restitution: 1
  }
  
  
  ball = Bodies.circle(400,200,20,ball_options);
  World.add(world,ball);
  //console.log(ground);
  //console.log(object.type);
  //console.log(object.position.x);
  //console.log(object.position.y);
}

function draw() {
  background("black");  
  Engine.update(engine);
  fill("blue");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  
  //drawSprites();
}