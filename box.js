class Box {
  constructor(x, y, width, height,r,f,d) {
    var options = {
        'restitution':r,
        'friction':f,
        'density':d
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(color){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(color);
    rect(0, 0, this.width, this.height);
    pop();
  }
};
