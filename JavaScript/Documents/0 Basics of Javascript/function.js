// // // let person1 = {
// // //   name: "Sandy",
// // //   greet: function () {
// // //     console.log(`Hello ${this.name}`);  // this - point to current context
// // //   }
// // // }

// // // let person2 = {
// // //   name: "Sandeep Patel"
// // // }

// // // // person1.greet.call(person2);  // call - hold context

// // // person1.greet.bind(person2); // return new function

// // // const bindgreet = person1.greet.bind(person2); // return new function

// // // console.log(bindgreet);  // [Function: bound greet]
// // // console.log(bindgreet());  // Hello Sandeep Patel
// // // // undefined - no context


// // // let timerId = setTimeout(() => {
// // //   console.log("This will not run");
// // // }, 5000);

// // // clearTimeout(timerId); // Cancels the timeout before execution

// // // console.log(timerId);
// // // timerId(); // TypeError: timerId is not a function


// // console.log("Hi");

// // setTimeout(() => console.log("Hello after 5 seconds"), 0);
// // Promise.resolve().then(() => console.log("Promise resolved"));
// // setTimeout(() => console.log("Hello after 5 seconds"), 0);

// // console.log("Bye");


// console.log("Hi");

// setTimeout(() => console.log("Hello after 0 sec"), 0);

// Promise.resolve().then(() => {
//   console.log("1. Promise resolved");

//   Promise.resolve.then(() => {
//     console.log("2. Promise resolved");

//     Promise.resolve.then(() => {
//       console.log("3. Promise resolved");

//       Promise.resolve.then(() => {
//         console.log("4. Promise resolved");
//       })
//     })
//   })
// });


// console.log("Bye");


console.log("Age: ", age);
var age = 25;

fetch("https://api.freeapi.app/api/vl/public/randomproducts")
  .then((response) => {
    response.json().then((data) => {
      console.log(data);
    })
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
  .finally(() => {
    console.log("Data fetching completed");
  });