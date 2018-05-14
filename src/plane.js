function Plane(){
  this.beFlying = true;
}

Plane.prototype.land = function(){ this.beFlying = false; };
Plane.prototype.takeOff = function(){ this.beFlying = true; };
