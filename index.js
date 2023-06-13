// Add "close" buttons to each list item
Array.from(document.getElementsByTagName("li")).forEach(item => {
  var closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.appendChild(document.createTextNode("\u00D7"));
  item.appendChild(closeButton);
});

// Click on a close button to hide the current list item
document.querySelectorAll(".close").forEach(closeButton => {
  closeButton.onclick = function() {
    this.parentElement.style.display = "none";
  };
});

// Toggle "checked" class when clicking on a list item
document.querySelector('ul').addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("myInput").value.trim();
  if (inputValue === '') {
    alert("You must write something!");
    return;
  }
  var li = document.createElement("li");
  li.textContent = inputValue;

  var closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.appendChild(document.createTextNode("\u00D7"));
  closeButton.onclick = function() {
    this.parentElement.style.display = "none";
  };

  li.appendChild(closeButton);
  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";
}

const todoItem = document.getElementById('todolist');
const todoText = todoItem.textContent;
console.log(todoText);
fetch('https://dummyjson.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
  fetch('https://dummyjson.com/todos/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    todo: 'Designing',
    completed: false,
    userId: 30,
  })
})
