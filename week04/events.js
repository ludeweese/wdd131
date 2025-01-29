/* events.js */

let tasks = [];

// Function to render the tasks in the DOM
function renderTasks(tasks) {
  const listElement = document.querySelector("#todoList");
  listElement.innerHTML = "";  // Clear any existing tasks

  tasks.forEach((task) => {
    const li = document.createElement("li");
    if (task.completed) li.classList.add("strike");

    const p = document.createElement("p");
    p.textContent = task.detail;

    const div = document.createElement("div");

    const deleteSpan = document.createElement("span");
    deleteSpan.dataset.function = "delete";
    deleteSpan.textContent = "❎";

    const completeSpan = document.createElement("span");
    completeSpan.dataset.function = "complete";
    completeSpan.textContent = "✅";

    div.appendChild(deleteSpan);
    div.appendChild(completeSpan);

    li.appendChild(p);
    li.appendChild(div);

    listElement.appendChild(li);
  });
}

// Function to add a new task
function newTask() {
  const task = document.querySelector("#todo").value;
  if (task.trim() === "") return;  // Don't add empty tasks

  // Add the new task to the tasks array
  tasks.push({ detail: task, completed: false });

  // Clear the input field after adding the task
  document.querySelector("#todo").value = "";

  // Render the updated tasks list
  renderTasks(tasks);
}

// Function to remove a task
function removeTask(taskElement) {
  tasks = tasks.filter((task) => task.detail !== taskElement.querySelector("p").innerText);
  taskElement.remove();
}

// Function to mark a task as completed
function completeTask(taskElement) {
  const taskIndex = tasks.findIndex((task) => task.detail === taskElement.querySelector("p").innerText);
  tasks[taskIndex].completed = !tasks[taskIndex].completed;  // Toggle completion status
  taskElement.classList.toggle("strike");  // Toggle strike-through
}

// Function to manage task actions (delete or complete)
function manageTasks(event) {
  const parent = event.target.closest("li");  // Find the parent <li> of the clicked icon

  if (event.target.dataset.function === "delete") {
    removeTask(parent);  // Remove task if the delete icon is clicked
  }

  if (event.target.dataset.function === "complete") {
    completeTask(parent);  // Mark task as completed if the complete icon is clicked
  }
}

// Event listener to handle task submission
document.querySelector("#submitTask").addEventListener("click", newTask);

// Event listener to handle task actions (delete or complete)
document.querySelector("#todoList").addEventListener("click", manageTasks);
