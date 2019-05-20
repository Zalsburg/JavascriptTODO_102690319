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

    var x = document.createElement("button");
    x.setAttribute("class", "removeItem");
    x.appendChild(document.createTextNode("X"));
    itemInput.appendChild(x);

    x.onclick = removeItemClicked;
}

function clearButtonClicked() {
    var clearAllItems = document.getElementById("taskList");
    clearAllItems.parentNode.removeChild(clearAllItems);
}



function removeItemClicked(e) {
    e.target.parentNode.remove();
}