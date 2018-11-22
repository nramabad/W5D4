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

Array.prototype.myEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// callback = (thang) => console.log(thang);

Array.prototype.myMap = function (callback) {
  let result = [];
  this.myEach((el) => result.push(callback(el)));
  return result;
};

// callback = (thang) => thang*2;

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue || 0;
  this.myEach((el) => acc += callback(el));
  return acc;
};
