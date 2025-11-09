


import { delete_todo, get_all_todos } from "./lib/db_requests";
import { render_header } from "./lib/header";



function create_button_section(id){
    // Button section
        const s_buttons = document.createElement("section");
        s_buttons.className = "buttons";
        s_buttons.tabIndex = 0;

        // Delete To-Do button
        const deleteButton = document.createElement("button");
        deleteButton.type = "button";
        deleteButton.className = "delete_todo"
        deleteButton.textContent = "Delete Todo";
        deleteButton.setAttribute("aria-label", `Delete this To-Do`);
        deleteButton.onclick = async () => {
            delete_todo(id);
            document.getElementById(id).remove();
        };

        // Set todo as current To-Do
        const setCurrentTodo = document.createElement("button");
        setCurrentTodo.type = "button";
        setCurrentTodo.className = "set_current"
        setCurrentTodo.textContent = "Set as Current To-Do";
        setCurrentTodo.setAttribute("aria-label", `Set this To-Do as the current To-Do`);
        setCurrentTodo.onclick = async () => {
            //set_as_current_todo(id);
        };

        // Open To-Do details
        const openTodo = document.createElement("button");
        openTodo.type = "button";
        openTodo.className = "details"
        openTodo.textContent = "Open Details";
        openTodo.setAttribute("aria-label", `Open the detail view of the currently selected To-Do`);
        openTodo.onclick = async () => {
            //open_todo_details(id);
        };

        s_buttons.appendChild(deleteButton);
        s_buttons.appendChild(setCurrentTodo);
        s_buttons.appendChild(openTodo);

        return s_buttons;
}

async function render_todo_list() {
    const todoList = await get_all_todos();

    // Create Sections for each To-Do title
    const main = document.getElementsByTagName("main")[0];
    todoList.forEach(todo => {
        // To-Do section
        const s_todo = document.createElement("section");
        s_todo.className = "todo";
        s_todo.id = todo.id;
        s_todo.tabIndex = 0;

        // Title
        const title = document.createElement("p");
        title.className = 'title';
        title.innerHTML = todo.title;

        const button_section = create_button_section(todo.id);

        s_todo.appendChild(title);
        s_todo.appendChild(button_section);
        main.appendChild(s_todo);
    });
}

(async function on_page_load() {
    render_header('./todo_list.html');
    render_todo_list();
})();
