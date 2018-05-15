describe('Weather', function(){
  var weather;
  beforeEach(function(){
    weather = new Weather();
  });

  it('Does nothing', function(){
    expect(weather.beStormy()).toBe(false);
  });


});
