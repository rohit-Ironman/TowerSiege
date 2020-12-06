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


        var pos = this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
        
        if(this.body.speed < 3){
          
      
         }
         else{
           World.remove(world, this.body);
           push();
           var pos = this.body.position;
           this.Visibility = this.Visibility - 5;
           tint(255,this.Visibility);
           score++
           rect();
           pop();
         }

      }
  };