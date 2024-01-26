const removeFromArray = function(array, ...values) {
  for (const value of values) {
    let index = array.indexOf(value, 0);
    while (index != -1) {
      array.splice(index, 1);
      index = array.indexOf(value, index);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
