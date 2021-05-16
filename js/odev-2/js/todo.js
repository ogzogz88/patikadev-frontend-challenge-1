let allTodos = {};
function newElement() {
    //add new task begin
    let newTask = document.querySelector("#task").value;
    let currentList = document.querySelector("#list");
    let newListElement = document.createElement("li");
    newListElement.setAttribute("onclick", "completeTask(this)");

    //close button begin
    let closeButton = document.createElement("button");
    closeButton.setAttribute("class", "btn btn-secondary");
    closeButton.setAttribute("type", "button");
    closeButton.setAttribute("onclick", "deleteElement(this)");
    closeButton.appendChild(document.createTextNode("X"));
    //close button end

    newSpan = document.createElement("span");
    newSpan.appendChild(document.createTextNode(newTask));
    newListElement.appendChild(newSpan);
    newListElement.appendChild(closeButton);

    //control if list is empty or includes space
    if (newTask.split('').join('') != "") {
        currentList.appendChild(newListElement);
        $('#liveToastSuccess').toast('show');
        //add to localstorage
        addToAllTodos(newTask);
        window.localStorage.setItem("todos", JSON.stringify(allTodos));
    } else {
        $('#liveToastError').toast('show');
    }
    //add new task end
}

function deleteElement(el) {
    //update to localstorage
    let taskToDelete = el.parentElement.firstChild.innerHTML;
    removeFromAllTodos(taskToDelete);
    el.parentElement.remove();
}

function completeTask(el) {
    let taskText = el.firstChild;
    taskText.classList.toggle("taskComplete");
}

function addToAllTodos(addedTask) {
    allTodos[`task-${taskIndex}`] = addedTask;
    taskIndex++;
}
function removeFromAllTodos(taskToDelete) {
    for (const [key, value] of Object.entries(allTodos)) {
        if (value == taskToDelete) {
            delete allTodos[key];
            taskIndex--;
        }
    }
    //update task index numbers(keys)
    let currentTasks = [];
    for (const [key, value] of Object.entries(allTodos)) {
        currentTasks.push(value);
    }
    //clear allTodos
    let len = Object.keys(allTodos).length;
    allTodos = {};
    for (let i = 0; i < len; i++) {
        allTodos[`task-${i}`] = currentTasks[i];
    }
    window.localStorage.setItem("todos", JSON.stringify(allTodos));

}

//add current todos
let taskIndex = 0;
let currentTodos = ["3 Litre Su İç",
    "Ödevleri Yap",
    "En Az 3 Saat Kodlama Yap",
    "Yemek Yap",
    "50 Sayfa Kitap Oku"];
currentTodos.forEach((value, index) => {
    allTodos[`task-${index}`] = value;
    taskIndex++;
});
window.localStorage.setItem("todos", JSON.stringify(allTodos));
