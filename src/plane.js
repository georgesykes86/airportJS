function Plane(){
  this.beFlying = true;
  this.land = function(){ this.beFlying = false; };
  this.takeOff = function(){ this.beFlying = true; }

}
