// IIFE
(function(){

  var addButton = document.getElementById('btn');
  var inputTask = document.getElementById('input');

  var lists = {
    todo: document.getElementById("todo"),
    done: document.getElementById("done")
  }

  var makeTaskHTML = function (str, onCheck) {
      // Creating empty li element
      var liElement = document.createElement('li');

      // Creating task label element
      var label = document.createElement('span');
      label.textContent = str;

      // Create checkbox element
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('click', onCheck);

      // Appending label and checkbox to li element
      liElement.appendChild(label);
      liElement.appendChild(checkbox);

      return liElement;
  }

  var addTask = function(task) {
    lists.todo.appendChild(task);
  }

  // callback
  var onCheck = function(event){
    var task = event.target.parentElement;
    var listId = task.parentElement.id;

    console.log(listId);

    listId === 'todo' ? done.appendChild(task) : todo.appendChild(task);
  }

  var onInput = function(){
    var inputString = inputTask.value;
    var task = inputString.trim();
    var addTaskString;
    if(task.length > 0){
      addTaskString = makeTaskHTML(task, onCheck);
    }
    addTask(addTaskString);
    inputTask.value = '';
  }

  addButton.addEventListener('click', onInput);

}());
