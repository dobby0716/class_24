const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;
const Render= Matter.Render

var myEngine, myWorld,box5,log3,log4,bird1;
var ground1,box1,box4,pig2,log2,box2,box3,pig1,log1;

function setup() {
  rectMode(CENTER)
  createCanvas(1200,600);
  
  myEngine=Engine.create();
  myWorld=myEngine.world;

  /*var render = Render.create({
  element: document.body, 
  engine: myEngine, 
  option: {
   width: 600, 
   height: 400, 
   wireframes: false } }); 
   Render.run(render)*/
   
  /*var goptions={
    isStatic: true   
  }*/

  //ground=Bodies.rectangle(400,400,50,10,{isStatic: true})

  ground1= new ground(600,590,1200,20);

  box1= new box(800,500,80,80);
  box2= new box(1000,500,80,80);
  pig1= new Pig(900,500,50,50);
  log1= new log(900,480,290,PI/2)

  box3= new box(800,400,80,80);
  box4= new box(1000,400,80,80);
  pig2= new Pig(900,400,50,50);
  log2= new log(900,380,290,PI/2)

  box5= new box(900,300,80,80)
  log3= new log(980,280,200,-PI/7)
  log4= new log(810,280,200,PI/7)

  bird1= new bird(100,400,80,80)
}



function draw() {
  background(0);  
  Engine.update(myEngine);

  ground1.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  
  box5.display();
  log3.display();
  log4.display();
  bird1.display();
}
