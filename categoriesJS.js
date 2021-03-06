
var newId = 10;

window.onload = function () {
  Animi(0)
}
function Animi(id) {
  var toggler = document.getElementsByClassName("caret" + id);
  toggler[toggler.length - 1].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });

}

function Edit(id) {
  var input = prompt("change a Categories Name");
  var spanid = "sp" + id;
  document.getElementById(spanid).innerHTML = input;
}

function Remove(id) {
  var liId = "li" + id;
  var a = document.getElementById(liId)

  while (a.hasChildNodes()) {
    a.removeChild(a.firstChild);
  }
  i = i - 1;
}

function AddItem(id) {
  newId = newId + 1;
  newId.toString();

  var ul = document.getElementById("ul" + id);
  var li = document.createElement("li");

  var newul = document.createElement("ul")
  var span = document.createElement("span")
  var addbuton = document.createElement("button");
  var editbuton = document.createElement("button");
  var deletbuton = document.createElement("button");

  li.setAttribute("id", "li" + newId)

  span.setAttribute("id", "sp" + newId)
  span.setAttribute("class", "caret" + newId)

  addbuton.setAttribute("id", newId)
  addbuton.setAttribute("onclick", "AddItem(this.id)")
  addbuton.setAttribute("class", "material-icons")
  addbuton.setAttribute("style", "font-size:15px;")

  editbuton.setAttribute("id", newId)
  editbuton.setAttribute("onclick", "Edit(this.id)")
  editbuton.setAttribute("class", "material-icons")
  editbuton.setAttribute("style", "font-size:15px;")

  deletbuton.setAttribute("id", newId)
  deletbuton.setAttribute("onclick", "Remove(this.id)")
  deletbuton.setAttribute("class", "material-icons")
  deletbuton.setAttribute("style", "font-size:15px;")

  newul.setAttribute("id", "ul" + newId)
  newul.setAttribute("class", "nested")


  span.appendChild(document.createTextNode("new Categories" + newId));
  addbuton.appendChild(document.createTextNode("add"));
  editbuton.appendChild(document.createTextNode("create"));
  deletbuton.appendChild(document.createTextNode("clear"));




  ul.appendChild(li);

  li.appendChild(span);
  li.appendChild(addbuton);
  li.appendChild(editbuton);
  li.appendChild(deletbuton);
  li.appendChild(newul)

  Animi(newId)

}