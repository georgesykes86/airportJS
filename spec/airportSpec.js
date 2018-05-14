// describe("Airport", function() {
//   it("responds to method land", function() {
// expect(airport.land).toBe(true);
//   });
//
//
// });

describe('Airport', function(){
  var airport;
  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });


  it('has no planes by default', function(){
    expect(airport.planes).toEqual([]);
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

  });

  describe('Release', function(){
    it('can release a plane from the array', function(){
      airport.land(plane);
      airport.release(plane);
      expect(airport.planes).toEqual([]);

    });

    it('tells the plane to takeoff', function(){
      airport.land(plane);
      airport.release(plane);
      expect(plane.takeOff).toHaveBeenCalled();

    });

 });

});
