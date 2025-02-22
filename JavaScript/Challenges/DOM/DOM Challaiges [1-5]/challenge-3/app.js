const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");

const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

nameInput.addEventListener('input', function () {
  nameDisplay.textContent = this.value || "Not provided";
});

jobInput.addEventListener('input', () => {
  const value = jobInput.value;
  jobDisplay.textContent = value || "Not provided";
});

ageInput.addEventListener('input', () => {
  const value = ageInput.value;
  ageDisplay.textContent = value || "Not provided";
});

bioInput.addEventListener("input", () => {
  const value = bioInput.value;
  bioDisplay.textContent = value || "Not provided";
});