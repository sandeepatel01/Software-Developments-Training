function prepareChai(type) {
  if (type === "Masala Chai") {
    console.log("Adding spices to the Chai");
  } else {
    console.log("Preparing regular Chai");
  }
}

prepareChai("Masala Chai");
prepareChai("Ginger Chai");

function calculateTotal(amount) {
  if (amount > 1000) {
    return amount * 0.9;
  } else {
    return amount;
  }
}
const finalBill = calculateTotal(1200);
console.log("Final bill: ", finalBill);

function traffic(light) {
  switch (light) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Slow Down");
      break;
    case "green":
      console.log("Go");
      break;
    default:
      console.log("Chalan");
  }
};

function checktruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
};

checktruthyValue(1); // Truthy
checktruthyValue(0); // Falsy
checktruthyValue("Sandy"); // Truthy
checktruthyValue(""); // Falsy
checktruthyValue([]); // Truthy


// ********* Ternary Operator *****************

function calculateTotal(amount) {
  return amount ? amount * 0.9 : amount;
};

const finalBill2 = calculateTotal(1200);
console.log("Final bill: ", finalBill2);

function login(username, password, userId) {
  if (username === "admin" && (password === '1234' || userId == '12')) {
    console.log("Login Successful");
  } else {
    console.log("Invalid credentials");
  }
};