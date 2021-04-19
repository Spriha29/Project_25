class Paper {
    constructor(x, y, radius) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, 67, options);
        this.radius = 67;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        var position = this.body.position;
        var angle = this.body.angle;
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(CENTER);

        image(this.image, 0, 0, this.radius);
        pop();
      }
}