var input = document.getElementById("inp");
var list = document.getElementById("list");

function addBtn() {
    var li = document.createElement("LI");
    var b = document.createTextNode(inp.value);
    li.appendChild(b)

    var deleteButton = document.createElement("BUTTON")
    var deleteText = document.createTextNode("Delete")
    deleteButton.appendChild(deleteText)
    deleteButton.setAttribute("class", "butn m-2 rounded shadow")
    deleteButton.setAttribute("onclick", "del(this)")
    li.appendChild(deleteButton)

    var editButton = document.createElement("BUTTON")
    var editText = document.createTextNode("Edit")
    editButton.appendChild(editText)
    editButton.setAttribute("class", "butn m-2 rounded shadow")
    editButton.setAttribute("onclick", "edit(this)")
    li.appendChild(editButton)
    list.setAttribute("class","text-dark fs-5")
    list.appendChild(li)
    //   console.log(li)
    inp.value = ""

}

function del(element) {
    element.parentNode.remove();
}
function edit(element) {
    element.parentNode.firstChild.nodeValue = prompt("Edit Your Task To Update!");

}

function deleteAll() {
    list.innerHTML = "";
}