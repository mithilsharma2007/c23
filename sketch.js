const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;// name spacing

var myWorld,myEngine;
var ground;
var b1,b2;

function setup() {
  createCanvas(400,400);
 myEngine=Engine.create();
  myWorld=myEngine.world; 
  var options={
    isStatic:true,
  }
  ground=Bodies.rectangle(200,390,200,20,options);
  World.add(myWorld,ground);
  console.log(ground);
  b1=new Box(200,300,50,50);
  b2=new Box(240,100,50,100);
}

function draw() {
  background("orange");
  Engine.update(myEngine); 
  rectMode(CENTER); 
  rect (ground.position.x,ground.position.y,400,20);
  b1.display();
  b2.display();
  
}