function wait(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), seconds * 1000)
  })
};

wait(2)
  .then(() => console.log("Promise resolved after 2 seconds"))
  .catch(() => console.log("Promise rejected after 2 seconds"))
  .finally(() => console.log("Promise finished"));