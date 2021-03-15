const Engine = Matter.Engine 
const World = Matter.World 
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var myEngine,myWorld 
var ground
var box1,box2,box3,box4,box5,box6,box7,box8
var ball
var sling

function setup() { 
  var canvas = createCanvas(1500,800); 
  myEngine = Engine.create(); 
  myWorld = myEngine.world; 
  ground = new Ground(750,790,1500,50)
  ball = new Ball(350,300,50)
  sling = new Slingshot(ball.body,{x: 450, y: 165})
  box1 = new Box(800, 780, 100, 200)
  box2 = new Box(860, 780, 100, 200)
  box3 = new Box(920, 780, 100, 200)
  box4 = new Box(970, 780, 100, 200)
  box5 = new Box(800, 680, 100, 200)
  box6 = new Box(860, 680, 100, 200)
  box7 = new Box(920, 680, 100, 200)
  box8 = new Box(970, 680, 100, 200)
  box9 = new Box(800, 580, 100, 200)
  box10 = new Box(860, 580, 100, 200)
  box11 = new Box(920, 580, 100, 200)
  box12 = new Box(970, 580, 100, 200)
  
} 
  function draw() {
     background(255); 
     Engine.update(myEngine) 
     ground.display();
     ball.display();
     sling.display();
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
    }

  function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY})
  }