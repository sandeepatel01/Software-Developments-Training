console.log(window);  // window: is  only available in browser not in node.js - javascript runtime environment 


// ********** DRY Principle - Break
// function changeBG() {
//   document.body.style.backgroundColor = "black"
// }

// function whiteBG() {
//   document.body.style.backgroundColor = "white"
// }


function changeBG(color) {
  document.body.style.backgroundColor = color;
}

const darkBTN = document.getElementById('dak-mode-btn');

darkBTN.innerText = "Dark Mode";

darkBTN.addEventListener('click', function () {
  changeBG('black')
});

darkBTN.addEventListener('click', function () {
  console.log("Storing dark mode value in Database");
});



const themeChanger = document.getElementById('theme-changer')

themeChanger.addEventListener('click', () => {
  console.log(document.body.style.backgroundColor);
  const currColor = document.body.style.backgroundColor;

  if (!currColor || currColor === 'white') {
    changeBG('black')
    themeChanger.innerText = "Light Mode"
  } else {
    changeBG('white')
    themeChanger.innerText = "Dark Mode"
  }
})