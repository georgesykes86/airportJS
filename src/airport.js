function Airport(){
  const DEFAULT_CAPACITY = 5;
  this.planes = [];
  this.capacity = DEFAULT_CAPACITY;
}

Airport.prototype.land = function(plane){
  if (this.planes.length >= this.capacity) {
    throw "Airport full!";
  }
  plane.land();
  return this.planes.push(plane);
 };

Airport.prototype.release = function(plane){
  plane.takeOff();
  var index = this.planes.indexOf(plane);
  return this.planes.splice(index,1);
};
