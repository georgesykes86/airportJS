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
});
