const convertToCelsius = function(degree) {
  let celsius = (degree -32)/(9/5);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(degree) {
  let fahrenheit = (degree * (9/5)) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
