// Promise Call hone se pahle fulfill ho ja raha hai

class myPromise {
  constructor(executorFn) {
    this._successCallbacks = [];
    this._errorCallbacks = [];
    this._finallyCallbacks = [];

    this.value = undefined;

    // this._state = "pending";
    executorFn(
      this.resolverFunction.bind(this),
      this.rejectFunction.bind(this)
    )
  }

  then(callback) {
    if (this._state === "fulfilled") {
      callback(this.value);
      return this;
    }

    this._successCallbacks.push(callback);
    return this;
  }

  catch(callback) {
    if (this._state === "rejected") {
      callback();
      return this;
    }

    this._errorCallbacks.push(callback);
    return this;
  }

  finally(callback) {
    if (this._state !== "pending") {
      callback();
      return this;
    }
    this._finallyCallbacks.push(callback);
    return this;
  }

  resolverFunction(value) {
    console.log(`Fulfilling Promise, Running ${this._successCallbacks.length} callbacks`);
    // Fulfilling Promise, Running 0 callbacks

    this.value = value;
    this._state = "fulfilled";
    this._successCallbacks.forEach(callback => callback(value));
    this._finallyCallbacks.forEach(callback => callback());
  }

  rejectFunction(error) {
    this._state = "rejected";
    this._errorCallbacks.forEach(callback => callback(error));
    this._finallyCallbacks.forEach(callback => callback());
  }
};


function wait(seconds) {
  return new myPromise((resolve, reject) => {
    // setTimeout(() => resolve("Resolved"), seconds * 1000)
    resolve("Resolved");
  })
};

const promise = wait(2);

console.log("Registering callbacks"); // Registering callbacks

promise
  .then((value) => console.log("v1 Promise resolved after 2 seconds", value))
  .catch(() => console.log("v1 Promise rejected after 2 seconds"))
  .finally(() => console.log("v1 Promise finished"));

promise
  .then((value) => console.log("v2 Promise resolved after 2 seconds", value))
  .catch(() => console.log("v2 Promise rejected after 2 seconds"))
  .finally(() => console.log("v2 Promise finished"));