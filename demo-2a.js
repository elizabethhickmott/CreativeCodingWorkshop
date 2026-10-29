function setup() {
    createCanvas(500, 400);
    background(25, 20, 45);
    stroke(138, 154, 91); //sets the colour used to draw lines and borders around shapes.
    strokeWeight(5); //how thick our line will be
  }
  
  
  function draw() {
    if (mouseIsPressed) {
      line(pmouseX, pmouseY, mouseX, mouseY);
      //pmouseX ->  stores the horizontal (X) position of the mouse cursor from the previous frame (give us that previous position)
    }
  }



