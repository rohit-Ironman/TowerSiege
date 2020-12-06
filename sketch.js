const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//Making the variables
var engine, world; 
var ground;
var box1, box2, box3, box4, box5;
var box6, box7, box8, box9 , box10;
var box11, box12, box13, box14, box15; 
var box16;
var polygon; 
var rope1;
var score = 0;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

//Making the ground
  ground = new Ground(400, 600, 800, 20); 

  //first row
  box1 = new Box(320, 570); 
  box2 = new Box(350,570);
  box3 = new Box(380, 570);
  box4 = new Box(410, 570); 
  box5 = new Box(440, 570); 
  box6 = new Box(470, 570); 
  box7 = new Box(500, 570);
  
  //second row 
  box8 = new Box(350,530);
  box9 = new Box(380, 530); 
  box10 = new Box(410, 530); 
  box11 = new Box(440, 530); 
  box12 = new Box(470, 530);

  //third row
  box13 = new Box(380, 490); 
  box14 = new Box(410, 490); 
  box15 = new Box(440, 490); 

  //top row 
  box16 = new Box(410, 450);

  //making the polygon
  polygon = new Polygon(200, 400);

  //The rope
  rope1 = new Rope(polygon.body,{x:140, y: 495});


}

function draw() {
  background("blue");  
  Engine.update(engine);

  textSize(25); 
  fill("black"); 
  text("Score: " + score, 400, 50)

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display(); 
  box7.display();
  box8.display();
  box9.display();
  box10.display(); 
  box11.display();
  box12.display();
  box13.display(); 
  box14.display();
  box15.display();
  box16.display();
  polygon.display();
  rope1.display();


}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y: mouseY});
}

function mouseReleased(){
  rope1.fly();
}