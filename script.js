var todoList = [];

function addTodo() {
  var todoInput = document.getElementById("todo-input");
  var todoText = todoInput.value;

  if (todoText !== "") {
    var todoItem = {
      text: todoText,
      completed: false,
    };

    todoList.push(todoItem);
    todoInput.value = "";
    renderTodoList();
  }
}

function renderTodoList() {
  var todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = "";

  for (var i = 0; i < todoList.length; i++) {
    var todoItem = todoList[i];
    var listItem = document.createElement("div");
    listItem.className = "listitem";


    var todoText = document.createElement("span");
    todoText.className = "todotext"
    todoText.textContent = todoItem.text;

    var editLink = document.createElement("a");
    editLink.textContent = "Edit";
    editLink.className = "edit";
    editLink.href = "#";
    editLink.addEventListener("click", editTodo.bind(null, i));

    var deleteLink = document.createElement("a");
    deleteLink.textContent = "Delete";
    deleteLink.className = "delete";
    deleteLink.href = "#";
    deleteLink.addEventListener("click", deleteTodo.bind(null, i));

    listItem.appendChild(todoText);
    listItem.appendChild(editLink);
    listItem.appendChild(deleteLink);

    todoListElement.appendChild(listItem);
  }
}

function toggleTodo(index) {
  todoList[index].completed = !todoList[index].completed;
}

function editTodo(index) {
  var newText = prompt("Enter new task");
  if (newText !== null) {
    todoList[index].text = newText;
    renderTodoList();
  }
}

function deleteTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

renderTodoList();
