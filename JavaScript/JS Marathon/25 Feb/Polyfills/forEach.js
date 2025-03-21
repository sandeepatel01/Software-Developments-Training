if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i);
    }
  }
};

const arr = [1, 2, 3, 4];

arr.myForEach((value, index) => console.log(`At index ${index} the value is ${value}`))


// At index 0 the value is 1
// At index 1 the value is 2
// At index 2 the value is 3
// At index 3 the value is 4