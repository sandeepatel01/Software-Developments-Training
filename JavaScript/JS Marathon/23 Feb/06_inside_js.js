// ****************** setTimeout - is Part of browser, not JS  *******************************************

const obj = {
  name: "Sandy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  }
}

console.log("Hello from JS");

// setTimeout(() => console.log("I am delayed"), 0);

// setTimeout(obj.greet, 2 * 1000);  // Hello undefined

// bind - context
setTimeout(obj.greet.bind(obj), 5 * 1000);  // Hello Sndy

console.log("Bye Bye");


// **************************** Promise - handle by browser **************************

console.log("Hi");

setTimeout(() => console.log("Hello after 2 sec"), 2 * 1000);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("Bye");



console.log("Hi");

setTimeout(() => console.log("Hello after 0 sec"), 0);
Promise.resolve().then(() => console.log("Promise resolved"));
setTimeout(() => console.log("Hello after 0 sec"), 0);

console.log("Bye");


// ********************** starvation ****************************

console.log("Hi");

setTimeout(() => console.log("Hello after 0 sec"), 0);

Promise.resolve().then(() => {
  console.log("1. Promise resolved");

  Promise.resolve.then(() => {
    console.log("2. Promise resolved");

    Promise.resolve.then(() => {
      console.log("3. Promise resolved");

      Promise.resolve.then(() => {
        console.log("4. Promise resolved");
      })
    })
  })
}); 

console.log("Bye");
