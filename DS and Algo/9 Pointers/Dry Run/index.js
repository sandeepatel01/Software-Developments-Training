//************************ Print address of a variable ***********************

// JavaScript does not provide direct access to memory addresses.
//  it is a high-level garbage-collected language.
// you can simulate memory referencing using objects, WeakMap, or closures.

let nums = 10;
// console.log("Address of nums:", nums);


// ************************ Pointers Creation: JavaScript me objects aur arrays reference se pass hote hain *********************************

let nums1 = { value: 10 };  // Object (Reference Type)
let ptr = nums1;  // 'ptr' ab nums ka reference hold kar raha hai

console.log("Value of nums:", nums1.value);  // Output: Value of nums: 10
console.log("Reference stored in ptr:", ptr);  // Output: Reference stored in ptr: { value: 10 }
console.log("Dereferencing ptr (ptr.value):", ptr.value);  // Output: Dereferencing ptr (ptr.value): 10

// Changing value using reference (ptr)
ptr.value = 20;

console.log("Updated value of nums:", nums1.value);  // Output: Updated value of nums: 20
console.log("Updated value of ptr:", ptr.value);  // Output: Updated value of ptr: 20
