(function (){const todosListEl = document.querySelector("#todo-list");
const userSelect = document.querySelector("#user-todo");
const from = document.querySelector("form");
let todosList = [];
let usersList = [];
const startApp = () => {
  Promise.all([getAllTodos(), getAllUsers()]).then((values) => {
    [todosList, usersList] = values;
    todosList.forEach((todo) => renderTodo(todo));
    usersList.forEach((user) => createUserOption(user));
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  createTodo({
    userId: Number(from.user.value),
    title: from.todo.value,
    complete: false,
  });
};

function handleTodoChange() {
  const todoId = this.parentElement.dataset.id;
  const completed = this.checked;
  toggleTodoComplete(todoId, completed);
}

function handleDelete() {
  const todoId = this.parentElement.dataset.id;
  deleteTodoFromServer(todoId);
}
const getUserName = (id) => {
  const user = usersList.find((u) => u.id === id);
  return user.name;
};

const renderTodo = ({ id, userId, title, completed }) => {
  //   console.log(id, userId, title);
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.dataset.id = id;
  li.innerHTML = `<span>${title} <i>by</i> <b>${getUserName(userId)}</b>`;
  const statusTodoEl = document.createElement("input");
  statusTodoEl.type = "checkbox";
  statusTodoEl.checked = completed;
  statusTodoEl.addEventListener("change", handleTodoChange);
  const deleteTodEl = document.createElement("span");
  deleteTodEl.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
  deleteTodEl.classList.add("delete");
  deleteTodEl.addEventListener("click", handleDelete);

  li.prepend(statusTodoEl);
  li.append(deleteTodEl);
  todosListEl.prepend(li);
};

const createUserOption = (user) => {
  const optionEl = document.createElement("option");
  optionEl.value = user.id;
  optionEl.innerHTML = user.name;
  const underEl = document.createElement("option");
  underEl.disabled = true;
  underEl.style.fontSize = "5px";
  underEl.style.background = "gray";
  //  underEl.innerHTML = "_________________________________________________________________"
  //  .innerHTML = `<option disabled selected>select user</option>`
  userSelect.append(underEl);
  userSelect.append(optionEl);
};

function removeTodo(todoId) {
  todosList = todosList.filter((todo) => todo.id !== todoId);
  const todo = todosListEl.querySelector(`[data-id="${Number(todoId)}"]`);
  todo.querySelector("input").removeEventListener("change", handleTodoChange);
  todo.querySelector(".delete").removeEventListener("click", handleDelete);
  todo.remove();
}

function alertError(error) {
  alert(error.error);
}

document.addEventListener("DOMContentLoaded", startApp);
from.addEventListener("submit", handleSubmit);

const getAllTodos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return await response.json();
  } catch (error) {
    alertError(error);
  }
};
const getAllUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return await response.json();
};

const createTodo = async (todosList) => {
    // try catch
  const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(todosList),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const todo = await response.json();
  renderTodo(todo);
};

const toggleTodoComplete = async (todoId, completed) => {
    // try catch

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      method: "PATCH",
      body: JSON.stringify({ completed }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    alertError(new Error("Сервер может быть сгорел"))
  }
};
const deleteTodoFromServer = async (todoId) => {
    // try catch

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  if (response.ok) {
    removeTodo(todoId);
  }
};
})()