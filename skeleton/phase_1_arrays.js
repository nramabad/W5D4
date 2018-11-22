Array.prototype.uniq = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    if (!result.includes(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.twoSum = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) { //may throw err ???
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    }
  }
  return result;
};


Array.prototype.transpose = function () {
  let result = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = 0; j < this[i].length; j++) {
      if (i === 0) {
        result.push([this[i][j]]);
      } else {
        result[j].push(this[i][j]);
      }
    }
  }
  return result;
};
