const newTaskInput = document.getElementById('new-task');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

// Select all existing delete buttons (optional, for pre-populated tasks)
const deleteButtons = document.querySelectorAll('.delete-button');

// Add functionality to existing delete buttons (optional)
if (deleteButtons) {
  deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      const listItem = this.parentElement;
      taskList.removeChild(listItem);
    });
  });
}

addButton.addEventListener('click', function() {
  const newTaskText = newTaskInput.value;
  if (newTaskText) {
    // Create a new list item for the task
    const newTaskItem = document.createElement('li');
    newTaskItem.innerText = newTaskText;

    // Add checkbox for completing tasks
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        newTaskItem.classList.add('completed');
      } else {
        newTaskItem.classList.remove('completed');
      }
    });
    newTaskItem.appendChild(checkbox);

    // Add a delete button for the new task
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button'); // Add a class for styling (optional)
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function() {
      const listItem = this.parentElement;
      taskList.removeChild(listItem);
    });
    newTaskItem.appendChild(deleteButton);

    // Add the new task item to the list
    taskList.appendChild(newTaskItem);

    // Clear the input field for the next task
    newTaskInput.value = '';
  }
});
