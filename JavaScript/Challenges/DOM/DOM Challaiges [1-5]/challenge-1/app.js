const toggleBtn = document.getElementById("toggleButton");
const status = document.getElementById("status");
const bulb = document.getElementById("bulb");

function changeBG(color) {
  document.body.style.backgroundColor = color;
}
function changeTextColor(textColor) {
  document.body.style.color = textColor;
}

toggleBtn.addEventListener('click', () => {
  const currentBG = document.body.style.backgroundColor;

  if (!currentBG || currentBG === 'white') {
    changeBG('#2c2c2c');
    changeTextColor('white');
    toggleBtn.innerText = "Turn Off";
    status.innerText = "Status: On";
    bulb.style.backgroundColor = "#eebc0f"
    bulb.style.boxShadow = "0 0 20px #eebc0f";
  } else {
    changeBG('white');
    changeTextColor('black');
    toggleBtn.innerText = "Turn On";
    status.innerText = "Status: Off";
    bulb.style.backgroundColor = "#95a5a6";
    bulb.style.boxShadow = "none";
  }
})