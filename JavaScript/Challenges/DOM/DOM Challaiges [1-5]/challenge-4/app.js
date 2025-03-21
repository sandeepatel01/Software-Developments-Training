const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");

const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");

function updateStats() {
  const allTask = document.querySelectorAll(".task-item");
  const completedCount = document.querySelectorAll(".task-item.completed").length;

  totalTasks.innerText = `Total tasks: ${allTask.length}`;
  completedTasks.innerText = `Completed: ${completedCount}`;
};


addButton.addEventListener('click', () => {
  const value = taskInput.value;
  if (!value) return;

  // console.log(value);

  if (document.querySelector(".empty-list")) {
    taskList.innerHTML = "";
  }

  const li = document.createElement('li');
  li.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('complete-checkbox');

  const taskText = document.createElement('span');
  taskText.innerText = value;
  taskText.classList.add('task-text');

  const deleteTask = document.createElement('button');
  deleteTask.innerText = "Delete";
  deleteTask.classList.add('delete-button');

  checkbox.addEventListener('change', () => {
    li.classList.toggle("completed");
    updateStats();
  });

  deleteTask.addEventListener('click', () => {
    li.remove();
    updateStats();
  });

  li.appendChild(checkbox);
  li.appendChild(taskText);
  li.appendChild(deleteTask);

  taskList.appendChild(li);

  taskInput.value = "";

  updateStats();
})

updateStats();

