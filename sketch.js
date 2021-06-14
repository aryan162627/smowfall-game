const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
  var engine,world;
var snow = [];

var bgImg;  
var snowFalll


function preload(){

  bgImg = loadImage("snow3.jpg");

}


function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world

  
}

function draw() {
  Engine.run(engine)
  background("black");  

  if(frameCount%90===0){
    snow.push(new Snow(random(0,800),100,50));
    console.log("hello");
  }

  for (var b = 0; b < snow.length; b++) {
    snow[b].display();
    }

    
}
