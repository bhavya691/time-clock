var hr;
var mn;
var sc;
var hrAngle , scAngle , mnAngle;


function setup() {
  createCanvas(550,400);
  angleMode(DEGREES);

  
}

function draw() {
  background(0); 
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  noFill();
  strokeWeight(8);
  stroke("red");
  
  scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  
  stroke(150,255,100);
  mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  
  stroke("blue");
  hrAngle = map(hr % 12,0,12,0,360);
  arc(0,0,260,260,0,hrAngle);
  
  
 
push();
rotate(scAngle);
strokeWeight(4);
stroke("red");
line(0,0,100,0);
pop();

push();
rotate(mnAngle);
strokeWeight(4);
stroke(150,255,100);
line(0,0,100,0);
pop();

push();
rotate(hrAngle);
strokeWeight(4);
stroke("blue");
line(0,0,100,0);
pop();
  drawSprites();
  
}