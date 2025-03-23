// function add(a, b) {
//   return a + b
// }

// function subtract(a, b) {
//   return a - b
// }

// // exports.sandy = "This is sandy"
// exports.add = add
// exports.subtract = subtract



const add = function (a, b) {
  return a + b
}

const subtract = function (a, b) {
  return a - b
}

module.exports = {
  add,
  subtract
}

function __require(id) {
  // // Agar id . se shuru hua toh user ki dir mei code ko dhundo
  // Khud ke internal module mei dhundo
  // Agar mill gaya toh well and good
  // nahi toh node_modules mei dhundo
  // nahi toh error show karo
}