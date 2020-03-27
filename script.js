var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var emptyList = false;
var emptyItem = document.createElement("li");
emptyItem.innerHTML = "<em>~ Your list is empty ~</em>";

function inputLength() {
	return input.value.length;
}

function createListElement() {
	if (emptyList) {
		ul.removeChild(emptyItem)
		emptyList = false;
	}
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	li.appendChild(createDeleteButton());
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", toggleDone);
}

function createDeleteButton() {
	var button = document.createElement("button")
	button.addEventListener("click", deleteItemAfterClick);
	var trashIcon = document.createElement("i");
	trashIcon.setAttribute("class", "far fa-trash-alt");
	button.appendChild(trashIcon);
	return button;
}

function deleteItemAfterClick() {
	ul.removeChild(this.parentElement);
	console.log(ul.childNodes);
	if (ul.childNodes.length == 4) {
		emptyList = true;
		displayEmptyList();
	}
}
	
function displayEmptyList() {
	ul.appendChild(emptyItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDone() {
	this.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

document.querySelectorAll("li").forEach(function(item) {
	item.addEventListener("click", toggleDone);
});

document.querySelectorAll(".delete").forEach(function(item) {
	item.addEventListener("click", deleteItemAfterClick);
});