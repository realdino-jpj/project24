
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var cage0;
var cage1;
var cage2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball = new Paper(50,100,20);
ground = new Stick(400,700,800,10);
cage0 = new Dust(550,650,300,PI);
cage1 = new Du (400,650,20,100);
cage2 = new Dust3(700,650,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  ground.display();
  cage0.display();
  cage1.display();
  cage2.display();
  drawSprites();
 



}
function keyPressed(){
if (keyCode===DOWN_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});

}

}