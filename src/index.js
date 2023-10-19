document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskDescription = document.getElementById('new-task-description').value;

    if (taskDescription) {
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;
      taskList.appendChild(newTask);
      document.getElementById('new-task-description').value = '';
    }
  });
});
