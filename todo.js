// IIFE
(function(){
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
      checkbox.type = 'checkbox'
      checkbox.addEventListener('click', onCheck)

      // Appending label and checkbox to li element
      liElement.appendChild(label);
      liElement.appendChild(checkbox);

      return liElement;
  }

  var addTask = function(list, task) {
    list.appendChild(task);
  }

  // callback
  var onCheck = function(event){
    var task = event.target;
    console.log(task);
  }

  addTask(lists.todo, makeTaskHTML('Pratik', onCheck));
  addTask(lists.done, makeTaskHTML('Makune', onCheck));

}());
