function ranger(start, end) {
  if (start === end) {
    return [end];
  }
  return [start].concat(ranger(start + 1, end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return null;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr.shift() + sumRec(arr);
}

function exponent(base, exp) {
  if ( exp === 0 ) {
    return 1;
  }
  return base * exponent(base, exp - 1);
}

function fibonacci(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  let last = fibonacci(n-1);
  return last.push(last[last.length()-2] + last[last.length()-1]);
}
