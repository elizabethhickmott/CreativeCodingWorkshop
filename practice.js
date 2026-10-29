function setup() {
    createCanvas(500,400);
    background(25, 20, 45);
}

function draw() {
    fill(138, 154, 91);
    circle(250, 200, 180);


    noStroke();
    fill(255, 120, 180);
    circle(mouseX, mouseY, 50);
}