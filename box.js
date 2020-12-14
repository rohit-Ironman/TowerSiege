class Box{
    constructor(x, y) {

      var options = {
       isStatic: false,
       restitution: 0,
       friction: 1

      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){

      rectMode(CENTER); 
      fill("red"); 
      if(this.body.speed < 3){
        var angle = this.body.angle; 
        var pos = this.body.position; 
        push();
        translate(pos.x, pos.y); 
        rotate(angle); 
        rectMode(CENTER); 
        rect(0, 0, this.width, this.height); 
        pop(); 

      }
      else{
        World.remove(world, this.body); 
        push(); 
        this.Visibility =this.Visibility - 5; 
        tint(255, this.Visibility); 
        score++;
         rect();
         pop();

      }

      }
  };