function Plane(){
  this.beFlying = true;
}

Plane.prototype.land = function(){
  if (this.beFlying == false) {
    throw 'Plane already landed';
  }
  this.beFlying = false; };

Plane.prototype.takeOff = function(){
  if (this.beFlying == true) {
    throw 'Plane already flying';
  }
  this.beFlying = true; };
