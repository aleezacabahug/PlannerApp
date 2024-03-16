document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addTaskButton = document.getElementById("addTaskButton");
    var taskList = document.getElementById("taskList");
  
    // Function to add a new task
    function addTask() {
      var taskText = taskInput.value.trim();
      if (taskText !== "") {
        var listItem = document.createElement("li");
        listItem.textContent = taskText;
  
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function() {
          listItem.remove();
        });
  
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
  
        taskInput.value = ""; 
      }
    }
  
    // Event listener for adding a task when the button is clicked
    addTaskButton.addEventListener("click", addTask);
  
    // Event listener for adding a task when Enter key is pressed
    taskInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  });
