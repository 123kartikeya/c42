var hr , mn , sc;
var hrAngle , mnAngle , scAngle;


function setup() {
  createCanvas(800,400);
  

  angleMode(DEGREES);




}

function draw() {
  background("black");  
 
    translate(200,200);
    rotate(-90);
    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc , 0 , 60 , 0 , 360);
    mnAngle = map(mn , 0 , 60 , 0 , 360);
    hrAngle = map(hr%12 , 0 , 12 , 0 , 360);
    
    // dimensions for second hand //
    push();
    rotate(scAngle);
    stroke(255 , 0 , 0);
    strokeWeight(7);
    line(0 , 0 , 100 ,0);
    pop();

    
    // dimensions for minute hand //
    push();
    rotate(mnAngle);
    stroke(0 , 255 , 0);
    strokeWeight(7);
    line(0 , 0 , 70 ,0);
    pop();

    stroke("black");
    point(0,0);
    // dimensions for hour hand //
    push();
    rotate(hrAngle);
    stroke(0 , 0 , 255);
    strokeWeight(7);
    line(0 , 0 , 40 ,0);
    pop()
    noFill();
    // drawing arcs //
    strokeWeight(8);
    stroke(255,0,0);
    arc(0,0,200,200,0,scAngle);

    stroke(0,255,0);
    arc(0,0,180,180,0,mnAngle);

    
    stroke(0,0,255);
    arc(0,0,160,160,0,hrAngle);

    
    drawSprites();
  

}