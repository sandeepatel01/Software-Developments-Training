if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
      const value = callback(this[i], i);
      newArr.push(value);
    }
    return newArr
  }
};

const arr = [1, 2, 3, 4];

const doubleArray = arr.myMap((value) => value * 2);
console.log(doubleArray);