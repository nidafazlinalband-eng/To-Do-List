const taskInput = document.getElementById("taskInput");
const taskDateTime = document.getElementById("taskDateTime");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("completed");

    li.innerHTML = `
      <div class="task-details">
        <span>${task.text}</span>
        ${task.dateTime ? `<span class="task-time">⏰ ${task.dateTime}</span>` : ""}
      </div>
      <div>
        <button class="complete" onclick="toggleComplete(${index})">✔</button>
        <button class="edit" onclick="editTask(${index})">✏</button>
        <button class="delete" onclick="deleteTask(${index})">🗑</button>
      </div>
    `;

    taskList.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const text = taskInput.value.trim();
  const dateTime = taskDateTime.value;
  if (!text) {
    alert("Enter a task first!");
    return;
  }

  tasks.push({ text, dateTime, completed: false });
  taskInput.value = "";
  taskDateTime.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newText = prompt("Edit your task:", tasks[index].text);
  if (newText !== null && newText.trim() !== "") {
    tasks[index].text = newText.trim();
    renderTasks();
  }
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

addBtn.addEventListener("click", addTask);
window.addEventListener("load", renderTasks);
