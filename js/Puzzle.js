class Puzzle{

    constructor(x, y, i) {
        var options = {
              isStatic:true       
        }
        this.body = Bodies.rectangle(x, y, 90, 70, options);
        this.width = width;
        this.height = height;
        this.image = i;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,90,70);
        pop();
      }
}