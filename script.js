document
  .querySelector("ul")
  .addEventListener("click", function handleClick(event) {
    console.log(event.target);
    setTimeout(1000);
    event.target.remove();
  });
function newToDoItem() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("Inputvalue").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("wow such empty!");
  } else {
    document.getElementById("ToDoList").appendChild(li);
  }
  document.getElementById("Inputvalue").value = "";
  var button = document.createElement("BUTTON");
  var txt = document.createTextNode();
  button.className = "close";
  button.appendChild(txt);
  li.appendChild(button);
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
