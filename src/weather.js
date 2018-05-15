function Weather() {

}

Weather.prototype.beStormy = function() {
  x = Math.random() * 10
  if (this.x > 3 ) {
    return false
  } else {
    return true
  }
};
