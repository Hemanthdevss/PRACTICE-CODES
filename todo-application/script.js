let inputEl = document.getElementById("input");
let addButtonEl = document.getElementById("addButton");
let saveButtonEl = document.getElementById("saveButton");
let todoMainContainerEl = document.getElementById("todoMainContainer");
let getItemsButtonEl = document.getElementById("getItemsButton");

let todoList = JSON.parse(localStorage.getItem("ArrayInLocalStorage"));

// Remove the unnecessary empty for loop

function todoItemFromInput() {
    let inputValue = inputEl.value;

    let todoSubcontainer = document.createElement("li");
    todoSubcontainer.textContent = inputValue;
    todoSubcontainer.classList = "sampleTest"; // Corrected this line
    todoMainContainerEl.appendChild(todoSubcontainer);

    todoList.push({ task1: inputValue }); // Corrected this line
}

function setItemsToLocalStorage() {
    let stringifyedArray = JSON.stringify(todoList);
    localStorage.setItem("ArrayInLocalStorage", stringifyedArray);
}

function clearItems() {
    todoMainContainerEl.textContent = "";
}

function getItems() {
    let getItemsFromLocalStorage = localStorage.getItem("ArrayInLocalStorage");
    let parseTheGetItems = JSON.parse(getItemsFromLocalStorage);

    clearItems();

    for (let todo of parseTheGetItems) { // Changed 'for (let todo' to 'for (let todo' to match your existing structure
        let todoSubcontainerFromLocalStorage = document.createElement("li");
        todoSubcontainerFromLocalStorage.textContent = todo.task1;
        todoSubcontainerFromLocalStorage.classList = "sampleTest"; // Corrected this line
        todoMainContainerEl.appendChild(todoSubcontainerFromLocalStorage);
    }
}



getItemsButtonEl.addEventListener("click", getItems);
addButtonEl.addEventListener("click", todoItemFromInput);
saveButtonEl.addEventListener("click", setItemsToLocalStorage);
