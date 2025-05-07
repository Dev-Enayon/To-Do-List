// Get elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");
const dateTimeElement = document.getElementById("date-time");
const taskTimeInput = document.getElementById("task-time");

// Function to display current date and time
function updateDateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const dateTimeString = now.toLocaleDateString('en-US', options);
    dateTimeElement.textContent = dateTimeString;
}

// Update time every second
setInterval(updateDateTime, 1000);

// Add task functionality
addBtn.addEventListener("click", function() {
    const taskText = todoInput.value.trim();
    const taskTime = taskTimeInput.value;
    if (taskText) {
        const li = document.createElement("li");

        // Task text
        const task = document.createElement("span");
        task.textContent = taskText;
        li.appendChild(task);

        // Time display
        if (taskTime) {
            const timeDisplay = document.createElement("div");
            timeDisplay.textContent = `Scheduled at: ${taskTime}`;
            timeDisplay.classList.add("time-display");
            li.appendChild(timeDisplay);
        }

        // Edit button with pencil icon
        const editBtn = document.createElement("button");
        editBtn.classList.add("icon-btn", "edit-btn");
        editBtn.innerHTML = `<i class="fas fa-pencil-alt"></i>`;
        editBtn.addEventListener("click", function() {
            const newTaskText = prompt("Edit your task:", taskText);
            if (newTaskText) {
                task.textContent = newTaskText;
            }
        });
        li.appendChild(editBtn);

        // Delete button with X icon
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("icon-btn", "delete-btn");
        deleteBtn.innerHTML = `<i class="fas fa-times"></i>`;
        deleteBtn.addEventListener("click", function() {
            todoList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        // Toggle completed state
        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });

        // Add to list
        todoList.appendChild(li);
        todoInput.value = ""; // Clear input field
        taskTimeInput.value = ""; // Clear time input
    }
});
