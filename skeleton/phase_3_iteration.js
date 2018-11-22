Array.prototype.bubbleSort = function (callback) {
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this.length; j++) {
      for (var k = j+1; k < this.length; k++) {
        if (callback(this[k], this[j]) === true) {
          let temp = this[k];
          this[k] = this[j];
          this[j] = temp;
        }
      }
    }
  }
  return this;
};

// callback = (num1, num2) => num1 < num2;

String.prototype.substrings = function () {
  let result = [];
  let letters = this.split('');
  for (var i = 0; i < letters.length; i++) {
    let mini = [letters[i]];
    for (var j = i+1; j < letters.length; j++) {
      mini.push(letters[j]);
      result.push(mini.join(''));
    }
  }
  return result;
};
