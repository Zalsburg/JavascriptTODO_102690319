let addButton = document.getElementById("addButton");
let item = document.getElementById("item");
let list = document.getElementById("list");
let clearButton = document.getElementById("clearButton");
let categories = document.getElementById("categories");

addButton.onclick = addButtonClicked;
clearButton.onclick = clearButtonClicked;

function addButtonClicked() {
    let listItem = item.value;
    console.log(listItem);
    let itemInput = document.createElement("div");
    itemInput.setAttribute("class", "itemContainer");
    itemInput.appendChild(document.createTextNode(listItem));
    
    let taskList = document.getElementById(categories.value);
    taskList.appendChild(itemInput);

    document.getElementById("item").value = "";

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "checkbox");
    itemInput.appendChild(checkbox);

    let x = document.createElement("button");
    x.setAttribute("class", "removeItem");
    x.appendChild(document.createTextNode("X"));
    itemInput.appendChild(x);

    x.onclick = removeItemClicked;
}

function clearButtonClicked() {
    let clearAllItems = document.getElementById("taskList");
    clearAllItems.innerHTML = "Shopping";

    clearAllItems = document.getElementById("uniList");
    clearAllItems.innerHTML = "Uni To Do";

    clearAllItems = document.getElementById("actList");
    clearAllItems.innerHTML = "Unspeakable Acts";
}

function removeItemClicked(e) {
    e.target.parentNode.remove();
}