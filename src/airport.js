function Airport(){
  this.planes = [];
  this.land = function(plane){
    plane.land();
    return this.planes.push(plane);
   };
  this.release = function(plane){
    plane.takeOff();
    return this.planes.pop();
  };

}
