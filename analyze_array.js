function analyzeArray(array) {
  const object = {
    average: function () {
      const arrayLength = array.length;
      let total = 0;
      array.forEach((value) => {
        total += value;
      });
      return total / arrayLength;
    },

    min: function () {
      let minValue = array[0];
      array.forEach((value) => {
        if (value < minValue) minValue = value;
      });
      return minValue;
    },

    max: function () {
      let maxValue = array[0];
      array.forEach((value) => {
        if (value > maxValue) maxValue = value;
      });
      return maxValue;
    },

    length: function () {
      return array.length;
    },
  };

  return {
    average: object.average(),
    min: object.min(),
    max: object.max(),
    length: object.length(),
  };
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));


module.exports = analyzeArray;