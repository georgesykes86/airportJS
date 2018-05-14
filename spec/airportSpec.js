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
    plane = jasmine.createSpyObj('plane', ['land']);
  });
  it('has no planes by default', function(){
    expect(airport.planes).toEqual([]);
  });

  it('can store a landed plane in an array', function(){
    airport.land(plane)
    expect(airport.planes).toContain(plane);
  });
});
