class Snow{
    constructor(x,y,r){
        var options = {
            
            isStatic:false,
               restitution :1,
               friction :1,
               
        }
           this.x=x;
           this.y=y;
           this.r=r
           this.body = Bodies.circle(this.x,this.y,this.r,options);
           World.add(world,this.body);
          // this.image = loadImage("snow4.webp");

    }
    display(){      
        push()
            var pos = this.body.position;
            var angle = this.body.angle;
    //image (this.image,this.body.position.x, this.body.position.y);
    translate(pos.x, pos.y);
    rotate(angle);
    ellipse(0,0,this.r,this.r)
    noStroke();
    pop()
    }
    }