class Drop{    
    constructor(x,y){
        var options = {
            friction : 0.1,
            isStatic: false
        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.releaseEvents,options);
        World.add(world, this.body);                
    }
   
    display(){
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

    update(){
      if(this.drops.position.y > height){
          Matter.body.setPosition(this.drops,{x : random(0,400),y : random(0,400)});
      }
    }
}