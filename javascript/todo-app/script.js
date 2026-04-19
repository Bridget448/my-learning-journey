const btn = document.querySelector(".btn");
const input = document.getElementById("input");
const objectsList = document.getElementById("objects");

let tasks = [];

let currentFilter = "all";

const savedTasks = localStorage.getItem("tasks");

if(savedTasks) {
    tasks = JSON.parse(savedTasks);
}

renderTasks();

function renderTasks() {
    objectsList.innerHTML = "";

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "all") return true;
        return currentFilter === "active"
          ? !task.completed
          : task.completed;
    });

    filteredTasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.dataset.id = task.id;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const text = document.createElement("span");
        text.textContent = task.text;
        text.classList.add("task-text");

        if (task.completed) {
            text.classList.add("completed");
        }
        
        if (task.completed) {
        text.style.textDecoration = "line-through";
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");

        listItem.appendChild(checkbox);
        listItem.appendChild(text);
        listItem.appendChild(deleteBtn);
        objectsList.appendChild(listItem);
    });
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        btn.click();
    }
});

btn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return; 

    const newTask = {
        id: Date.now(),
        text: value,
        completed: false
    };

    tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();
    
    input.value = "";
});

objectsList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        
        const li = event.target.parentElement;
        const id = Number(li.dataset.id);

        tasks = tasks.filter(task => task.id !== id);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }

    if (event.target.type === "checkbox") {
        const li = event.target.closest("li");
        const id = Number(li.dataset.id);

        tasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }

    if (event.target.classList.contains("task-text")) {
        const span = event.target;
        const li = span.closest("li");
        const id = Number(li.dataset.id);

        const input = document.createElement("input");
        input.type = "text";
        input.value = span.textContent;

        li.replaceChild(input, span);
        input.focus();

        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                const newText = input.value.trim();
                if (!newText) return;
                tasks = tasks.map(task => {
                    if (task.id === id) {
                        return {...task, text:newText};
                    }
                    return task;
                });
                localStorage.setItem("tasks", JSON.stringify(tasks));
                renderTasks();
            }
        });
    }
});

document.getElementById("filter-all").addEventListener("click", () => {
    currentFilter = "all";
    renderTasks();
});

document.getElementById("filter-active").addEventListener("click", () => {
    currentFilter = "active";
    renderTasks();
});

document.getElementById("filter-completed").addEventListener("click", () => {
    currentFilter = "completed";
    renderTasks();
});

document.getElementById("clear-completed").addEventListener("click", () => {
    tasks = tasks.filter(task => !task.completed);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
});
