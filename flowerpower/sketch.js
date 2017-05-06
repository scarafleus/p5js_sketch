var slider;
var petalslid;

function setup() {
  createCanvas(800, 600);
  slider = createSlider(10, 300, 100);
  slider.position(20, 10);
  petalslid = createSlider(2, 20, 5);
  petalslid.position(20, 40);
}

function draw() {
  background(47);
  flower(width / 2, height / 2, petalslid.value());
}

function flower(x, y, petals) {
  var rpetal = TWO_PI * slider.value() / 2 / petals;
  var angl = 360 / petals;
  angleMode(DEGREES);
  fill(255, 150, 0);
    for (var i = 0; i < petals; i++) {
      push();
      translate(x, y);
      rotate(angl * i);
      ellipse(0, 0 - slider.value() / 2, rpetal, rpetal);
      pop();
    }
    noStroke();
    fill(255, 200, 0);
    ellipse(x, y, slider.value(), slider.value());
    fill(255);
    text("petals", petalslid.x * 2 + petalslid.width, 55);
    text("radius", slider.x * 2 + slider.width, 25);
}
