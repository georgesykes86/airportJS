describe('Plane',function(){
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });

  it('creates a plane that is flying', function() {
      expect(plane.beFlying).toBe(true);
  });

  it('can land at an airport', function(){
    plane.land();
    expect(plane.beFlying).toBe(false);
  });

  it('can takeoff from an airport', function() {
    plane.land();
    plane.takeOff();
    expect(plane.beFlying).toBe(true);
  });

  it('throws a error when take off is called when plane is already flying', function() {
    expect(function() {plane.takeOff()}).toThrow("Plane already flying");
  });

  it('throws a error when trying to land if already landed', function() {
    plane.land();
    expect(function() {plane.land()}).toThrow("Plane already landed");
  });

});
