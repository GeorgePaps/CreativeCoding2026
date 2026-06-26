class Circle {
  constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
    // Implementation for drawing the circle
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.radius * 2);
    }
}