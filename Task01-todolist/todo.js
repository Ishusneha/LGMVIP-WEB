document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <div class="task-text">${taskText}</div>
                <button class="delete-button"><i class="fa fa-trash"></i></button>
            `;

            const deleteButton = taskItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function() {
                taskItem.remove();
            });

            const taskCheckbox = taskItem.querySelector('.task-checkbox');
            taskCheckbox.addEventListener('change', function() {
                taskItem.classList.toggle('completed');
            });

            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    });
});
