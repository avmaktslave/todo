const main = ((document) => {
  const todoList = document.getElementById('todoList')
  const form = document.getElementById('form');
  const text = document.getElementById('text');
  const date = new Date();

  function createElement(tag, props, ...children) {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);

    if (children.length > 0) {
      children.forEach((child) => {
        if (typeof child === 'string') {
          child = document.createTextNode(child);
        }
        element.appendChild(child);
        console.log(child);
      });
    }
    return element;
  }

  function createTodoItem(title) {
    const checkbox = createElement('input', {
      type: 'checkbox',
      className: 'checkbox'
    });

    const label = createElement('label', {
      className: 'title'
    }, title);

    const paragraf = createElement('p', {
      className: 'date'
    }, date.toString());

    const deleteButton = createElement('button', {
      className: 'delete'
    }, 'X');

    const li = createElement('li', {
      className: 'items'
    }, checkbox, label, paragraf, deleteButton);

    bindEvents(li);

    return li;
  }

  function bindEvents(todoItems) {
    const checkbox = todoItems.querySelector('.checkbox');
    const deleteButton = todoItems.querySelector('button.delete');

    checkbox.addEventListener('change', toggleTodoItem)
    deleteButton.addEventListener('click', deleteTodoItem)
  }

  function addTodoItems(event) {
    event.preventDefault();
    if (text.value === '')
      return alert('Enter your task');

    const listItem = createTodoItem(text.value);
    todoList.appendChild(listItem);
    text.value = '';
  }

  function toggleTodoItem() {
    const li = this.parentNode;
    li.classList.toggle('completed');
  }

  function deleteTodoItem() {
    const li = this.parentNode;
    todoList.removeChild(li);
  }

  function main() {
    form.addEventListener('submit', addTodoItems);
  }
  return main;
})(document);

main();
