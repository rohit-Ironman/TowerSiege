class Polygon{
    constructor(x, y) {
      var options = {
       isStatic: false,
       restitution: 0,
       friction: 1

      }
      this.body = Bodies.rectangle(x, y, 40, 40, options);
      this.width = 56;
      this.height = 56;
      this.image = loadImage("polygon.png");
      World.add(world, this.body);
    }
    display(){


        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      
      }
  };