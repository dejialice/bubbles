class Bubble {
  constructor(x, y, mass) {
    this.mass = mass;
    this.position = createVector(x, y);
  }

  display(){
    ellipse(this.position.x, this.position.y, this.mass, this.mass)
  }

  move() {
    this.position.x += random(1, 8);
    this.position.y += random(1, 8);
    //stay in the box!
    if (this.position.x > width) this.position.x = 0; //width gives width of canvas
    if (this.position.y > height) this.position.y = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y < 0) this.position.y = height;
  }
}
