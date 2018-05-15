describe('Weather', function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });

  it('isnt stormy', function(){
    var othernumber = { randomiser: function() { return 4; }}
    expect(weather.beStormy.call(othernumber)).toBe(false);
  });

  it('isnt stormy', function(){
    var othernumber = { randomiser: function() { return 2; } }
    expect(weather.beStormy.call(othernumber)).toBe(true);
  });


});
