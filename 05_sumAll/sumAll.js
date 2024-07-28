const sumAll = function(start, end) {

  if (typeof start !== 'number' || typeof end !== 'number') {
    return 'ERROR';
  }

  if (start < 0 || end < 0) {
    return 'ERROR';
  }

  // Ensure start is the smaller number and end is the larger number
  if (start > end) {
    [start, end] = [end, start];
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
