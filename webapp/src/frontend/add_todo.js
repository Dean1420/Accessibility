


import { save_todo } from "./lib/db_requests";
import { render_header } from "./lib/header";



function add_title_input(form) {
    const s_title = document.createElement("section");
    s_title.className = "title";
    s_title.setAttribute('aria-label', "Your To-Do, or a title for your To-Do document");
    s_title.tabIndex = 0;

    const label = document.createElement('label');
    label.setAttribute('for', 'title-input');
    label.textContent = 'Write the name of your To-Do here: ';

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title-input";

    s_title.appendChild(label);
    s_title.appendChild(titleInput);
    form.appendChild(s_title);
}

function add_due_date(form) {
    const s_dueDate = document.createElement("section");
    s_dueDate.className = "due-date";
    s_dueDate.setAttribute('aria-label', "When will");
    s_dueDate.tabIndex = 0;

    const label = document.createElement('label');
    label.setAttribute('for', 'date-input');
    label.textContent = 'Select when your To-Do is due: ';

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "date-input";

    s_dueDate.appendChild(label);
    s_dueDate.appendChild(dueDateInput);
    form.appendChild(s_dueDate);
}

function add_priority_selector(form) {
    const s_priority = document.createElement("section");
    s_priority.className = "priority";
    s_priority.setAttribute('aria-label', "How important is it that your To-Do gets done fast.");
    s_priority.tabIndex = 0;

    // Label
    const label = document.createElement('label');
    label.setAttribute('for', 'priority-select');
    label.textContent = 'Choose a priority for your To-Do:';

    // Select
    const select = document.createElement('select');
    select.name = 'priority-select';
    select.id = 'priority-select';

    // Options
    const options = [
        { value: 'Low', text: 'Low' },
        { value: 'Middle', text: 'Middle' },
        { value: 'High', text: 'High' }
    ];

    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        select.appendChild(option);
    });

    // Append label and select to nav
    s_priority.appendChild(label);
    s_priority.appendChild(select);
    form.appendChild(s_priority);
}

function add_description_field(form) {
    const s_description = document.createElement("section");
    s_description.className = "description";
    s_description.setAttribute('aria-label', "Detailed description of the To-Do");
    s_description.tabIndex = 0;

    const label = document.createElement('label');
    label.setAttribute('for', 'description-textfield');
    label.textContent = 'Describe your To-Do in detail: ';

    const description = document.createElement("textarea");
    description.id = "description-textfield";

    s_description.appendChild(label);
    s_description.appendChild(description);
    form.appendChild(s_description);

    // Resize textarea with text
    description.addEventListener("input", () => {
    description.style.height = "auto";
    description.style.height = description.scrollHeight + "px";
});
}

function add_form_buttons(form) {
    const s_buttons = document.createElement("section");
    s_buttons.className = "buttons";
    s_buttons.setAttribute('aria-label', "Save your To-Do");
    s_buttons.tabIndex = 0;

    // Save Button
    const saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.className = "submit"
    saveButton.textContent = "Save To-Do";
    saveButton.setAttribute("aria-label", `Save the current To-Do from the data with the data from the form`);

    // On Submit
    form.method = 'post';
    form.onsubmit = async (event) => {
        event.preventDefault();
        const title = document.getElementById("title-input").value;

        const dueDate = document.getElementById("date-input").value;

        const currentDate =  new Date().toISOString().split('T')[0];
        
        const priority = document.getElementById("priority-select").value;
        
        const description = document.getElementById("description-textfield").value;

        save_todo(title, currentDate, dueDate, priority, description);
    }

    s_buttons.appendChild(saveButton);
    form.appendChild(s_buttons);
}

function render_input_form() {
    const main = document.getElementsByTagName("main")[0];

    // Form
    const form = document.createElement('form');
    form.method = 'post';

    add_title_input(form);
    add_due_date(form);
    add_priority_selector(form);
    add_description_field(form);
    add_form_buttons(form);

    // Render on document
    main.appendChild(form)
}

(async function on_page_load() {
    render_header('./add_todo.html');
    render_input_form();
})();