const ul = document.getElementById('todoList');//ui can be replaced with const todoListelement = document.getElementById('todoList')
const input = document.getElementById('newTask');//inputfield
const button = document.getElementById('addTask');

button.addEventListener('click', (event)=>{
    const li = document.createElement('li');
    li.addEventListener('click', (event) => {
        li.remove();
    })
    li.textContent = input.value;
    ul.appendChild(li);
}
)