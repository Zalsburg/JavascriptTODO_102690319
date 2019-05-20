var addButton = document.getElementById("addButton");
var item = document.getElementById("item");
var list = document.getElementById("list");
var clearButton = document.getElementById("clearButton");

addButton.onclick = addButtonClicked;
clearButton.onclick = clearButtonClicked;

function addButtonClicked() {
    var listItem = item.value;
    console.log(listItem);
    var itemInput = document.createElement("div");
    itemInput.appendChild(document.createTextNode(listItem));
    taskList.appendChild(itemInput);

    document.getElementById("item").value = "";

    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    itemInput.appendChild(checkbox);
}

function clearButtonClicked() {
    var clearItem = document.getElementById("taskList");
    clearItem.parentNode.removeChild(clearItem);
}