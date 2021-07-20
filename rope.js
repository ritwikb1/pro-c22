class Rope 
{
  constructor(body1, body2, pointA, pointB) 
  {
    this.pointA = pointA
    this.pointB = pointB    
    

    var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x: this.pointA, y: this.pointB}
    }
    var rope
    rope = C.create(options)
    World.add(world, rope)

    
  }  
  show() {
    var pointA = this.rope.bodyA.position  
    var pointB = this.rope.bodyB.position
    strokeWeight(2)
    line (rope.pointA, rope.pointB)
  }
}