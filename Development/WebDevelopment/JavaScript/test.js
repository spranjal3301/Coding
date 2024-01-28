function transformation(currentValue, index, array) {
    return currentValue*index;
  }
const array = [1, 4, 9, 16];
const newArray = array.map(transformation);
console.log(newArray);