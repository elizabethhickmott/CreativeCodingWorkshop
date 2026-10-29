let folds = 6; //how many folds do we want?
let angle = 360 / folds;

function setup() {
  createCanvas(500, 400);
  angleMode(DEGREES);
background(25, 20, 45);
}

//draw gets called 60 times per second!!
function draw() {
  translate(width / 2, height / 2); // we will move to the orgin to the centre of our canvas

  stroke(random(255), random(255), random(255));
  strokeWeight(5);
  

  
  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) { //if mouse in canvas 

    let currentX = mouseX - width / 2; //get values of current and previous so line can be drawn between two points
    let prevX = pmouseX - width / 2;

    let currentY = mouseY - height / 2;
    let prevY = pmouseY - height / 2;

    if (mouseIsPressed) { //if mouse is pressed, then we draw!!
        //for each part of the paper
      for (let i = 0; i < folds; i++) {
        rotate(angle); //get the starting position
        line(currentX, currentY, prevX, prevY); //line between the two points
        push(); //stores the current drawing and starts as a group.
        scale(1, -1); //reflect on the fold line, so flips the vertical direction.
        line(currentX, currentY, prevX, prevY); //draw the same line again, reflected on the fold
        pop(); //group end
      }
    }
  }
}
