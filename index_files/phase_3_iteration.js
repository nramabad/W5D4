Array.prototype.bubbleSort = function () {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      for (var k = j+1; k < this.length; k++) {
        if (this[k] < this[j]) {
          let temp = this[k];
          this[k] = this[j];
          this[j] = temp;
        }
      }
    }
  }
  return this;
};
