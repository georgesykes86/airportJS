function Airport(capacity = 5){
  this.planes = [];
  this.capacity = capacity;
}

Airport.prototype.land = function(plane){
  if (this.planes.length >= this.capacity) {
    throw "Airport full!";
  }
  plane.land();
  return this.planes.push(plane);
 };

Airport.prototype.release = function(plane){
   if (!this.planes.includes(plane)){
    throw "Plane not in airport";
  }
  plane.takeOff();
  var index = this.planes.indexOf(plane);
  return this.planes.splice(index,1);
};
