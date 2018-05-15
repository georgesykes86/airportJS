describe('Airport', function(){
  var airport;
  beforeEach(function(){
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    plane2 = jasmine.createSpyObj('plane', ['land', 'takeOff']);
    var weather = new Weather();
    spyOn(weather, 'beStormy').and.returnValue(false);
    airport = new Airport(weather);
    airport2 = new Airport(weather, 10);
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

    describe('Stormy Weather', function(){

      it('won\'t land when weather is bad', function(){
        var weather2 = new Weather();
        spyOn(weather2, 'beStormy').and.returnValue(true);
        airport3 = new Airport(weather2);
        expect(function() {airport3.land(plane)} ).toThrow("Weather is bad");
      });

      it('cannot take off when weather is bad', function() {
        var weather3 = new Weather();
        spyOn(weather3, "beStormy").and.returnValues(false, true);
        airport4 = new Airport(weather3);
        airport4.land(plane);
        expect(function() { airport4.release(plane)} ).toThrow("Weather is bad");
      });


    });





 });



});
