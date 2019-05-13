var addButton = document.getElementById("addButton");
var item = document.getElementById("item");
var list = document.getElementById("list");

addButton.onclick = addButtonClicked;

function addButtonClicked() {
    var listItem = item.value;
    console.log(listItem);
    var itemInput = document.createElement("div");
    itemInput.appendChild(document.createTextNode(listItem));
    list.appendChild(itemInput);

    document.getElementById("item").value = "";
}

