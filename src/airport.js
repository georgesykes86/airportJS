function Airport(){
  this.planes = [];
}
Airport.prototype.land = function(plane){ return this.planes.push(plane); };
