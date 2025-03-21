const todoInput = document.getElementById("add-todo");
const addTodoBtn = document.getElementById("add-todo-btn");
const todoItemsContainer = document.getElementById("todo-items");
const deleteTodoBtn = document.getElementById("delete-todo-btn");

addTodoBtn.addEventListener('click', () => {
  const value = todoInput.value.trim();

  if (!value) return;

  console.log("Input value: ", value);

  const li = document.createElement('li')
  const deleteTodo = document.createElement('button');
  li.innerText = value;
  // console.log(li);

  deleteTodo.innerText = "X";
  li.appendChild(deleteTodo);

  deleteTodo.addEventListener('click', () => {
    li.remove();
  });


  todoItemsContainer.appendChild(li);
  todoInput.value = '';
})

deleteTodoBtn.addEventListener('click', () => {
  todoItemsContainer.innerText = "";
})