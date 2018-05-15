xdescribe('Airport', function(){
  var airport;
  beforeEach(function(){
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    plane2 = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    var weather = new Weather();
    weatherman = spyOn(weather, 'beStormy').and.returnValue(false);
    airport = new Airport(weatherman);
    airport2 = new Airport(weatherman, 10);
  });


  it('has no planes by default', function(){
    expect(airport.planes).toEqual([]);
  });

  it('has a deafault capacity of 5', function(){
    expect(airport.capacity).toEqual(5);
  });

  it('has a deafault capacity of 10 when setting the capacity', function(){
    expect(airport2.capacity).toEqual(10);
  });

  describe('Land', function(){
    it('can store a landed plane in an array', function(){
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });

    it('tells the plane to land', function(){
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('wont let a plane land if the airport is full', function(){
      for (var i = 0; i < 5; i++) {
        airport.land(plane);
      }
      expect(function() {airport.land(plane)} ).toThrow("Airport full!");
    });

    it('won\'t land when weather is bad', function(){
      weatherman = jasmine.spyOn(weather, 'beStormy').andReturn(true);
      airport = new Airport(weatherman);
      expect(function() {airport.land(plane)} ).toThrow("Weather is bad");
    });

  });

  describe('Release', function(){
    it('can release a plane from the array', function(){
      airport.land(plane);
      airport.land(plane2);
      airport.release(plane);
      expect(airport.planes).not.toContain(plane);

    });

    it('tells the plane to takeoff', function(){
      airport.land(plane);
      airport.release(plane);
      expect(plane.takeOff).toHaveBeenCalled();

    });

    it('cannot take off from wrong airport', function(){
      airport.land(plane);
      expect(function() { airport2.release(plane) }).toThrow('Plane not in airport');

    });

    // it('cannot take off when weather is bad', function() {
    //   airport.land(plane);
    //
    //   expect()
    // });

 });



});
