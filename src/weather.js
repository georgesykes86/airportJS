function Weather() {
}

Weather.prototype.beStormy = function() {
  if (this.randomiser() > 3 ) {
    return false
  } else {
    return true
  }
};

Weather.prototype.randomiser = function() {
  return Math.random() * 10;
}
