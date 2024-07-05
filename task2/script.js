
const todoForm = document.getElementById('todoForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


todoForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const taskText = taskInput.value.trim(); 

  if (taskText !== '') {
    addTask(taskText); 
    taskInput.value = ''; 
  }
});


function addTask(taskText) {
  
  const li = document.createElement('li');
  li.classList.add('task-item');
  li.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  taskList.appendChild(li); 

 
  const completeButton = li.querySelector('.complete-btn');
  completeButton.addEventListener('click', function() {
    li.classList.toggle('complete'); 
  });

 
  const deleteButton = li.querySelector('.delete-btn');
  deleteButton.addEventListener('click', function() {
    li.remove(); 
  });
}
