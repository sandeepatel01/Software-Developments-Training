// singleton
// Object.create

// object literals

const mySym = Symbol("key1");  // Symbol declaration

console.log("mySym: ", mySym); // Output: mySym:  Symbol(key1)


const JsUser = {
  name: "Sandeep",
  "full name": "Sandeep Patel",
  [mySym]: "mykey1",  // Symbol declaration inside object
  age: 18,
  location: "Bareilly",
  email: "sandeep@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);


console.log("JsUser[mySym]: ", JsUser[mySym]);  // Symbol access


// *************** Objects value change *********************
JsUser.email = "sandeep@chatgpt.com";
console.log(JsUser);


// *************** Objects  freezing: means object value can't change *********************
// Object.freeze(JsUser)
JsUser.email = "sandeep@microsoft.com";
console.log(JsUser);

// ********************** Object methods ********************
JsUser.greeting = function () {
  console.log("Hello JS user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting); // Output: [Function (anonymous)] - reference of function greeting 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());