let parentList = document.getElementById("list-task");
let inputTask = document.getElementById("input-task");
let addButton = document.getElementById("add-task");
// adding function addTask to addButton when user click the button
addButton.onclick = addTask;

// adding event listener "Enter"
inputTask.addEventListener("keyup", function(event) {
  // keycode for "Enter"
  if (event.keyCode === 13) {
    // trigger click event to addButton
    addButton.click();
  }
});

function addTask() {
  // get input
  inputValue = inputTask.value;

  // prevent inputValue to be blank
  if (inputValue == ''){
    // if so we change the placeholder
    inputTask.placeholder = 'Task can\'t be blank';
    // and return false and do nothing
    return false
  }

  // create li element
  var node = document.createElement("li");
  // add text from inputValue into variable textnode
  var textnode = document.createTextNode(inputValue+' '); 
  // create button element
  var button = document.createElement("button");
  // adding text into button
  button.innerHTML = "Delete";

  // append textnode and button into node / li element
  node.appendChild(textnode);
  node.appendChild(button);

  // append li element with textnode and button on it into parentList / OL
  parentList.appendChild(node);

  // reset input to be blank
  inputTask.value = '';
}

// adding event into all li element / child of ol
parentList.addEventListener('click', function(e) {
  // get parent target
  let target = e.target.parentElement;
  // check if parent name of target is LI
  if(target.nodeName == 'LI'){
    // if so then we delete parent element of button delete which is LI element
    this.removeChild(e.target.parentElement);
  }
})