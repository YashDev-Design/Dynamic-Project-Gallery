let callStack = [];

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskName = taskInput.value.trim();
  if (taskName) {
    callStack.push(taskName);
    taskInput.value = "";
    updateTaskList();
  }
}

function undoTask() {
  if (callStack.length > 0) {
    callStack.pop();
    updateTaskList();
  }
}

function updateTaskList() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  callStack
    .slice()
    .reverse()
    .forEach((task) => {
      let li = document.createElement("li");
      li.textContent = task;
      taskList.appendChild(li);
    });
}
