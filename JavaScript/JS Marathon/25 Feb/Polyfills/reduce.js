if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue || this[0];
    const startIndex = initialValue ? 0 : 1;

    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this[i]);
    }
    return accumulator
  }
};

const arr = [1, 2, 3, 4];

const sum = arr.myReduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);