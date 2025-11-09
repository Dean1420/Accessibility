import { delete_todo } from "./db_requests";



export async function create_dom_todo(renderContainer, todoData) {

  // Create section container
  const s_todo = document.createElement('section');
  s_todo.className = "todo";
  s_todo.id = todoData.id;
  s_todo.setAttribute('aria-label', "This element displays a To-Do. A To-Do has a title, creation and expiration time, priority and a description");

  // Title (h1)
  const s_title = document.createElement("section");
  s_title.className = "title";
  s_title.setAttribute('aria-label', "The name of the To-Do");
  s_title.tabIndex = 0;

  const title = document.createElement("h1");
  title.textContent = "To-Do";

  const p_title = document.createElement("p");
  p_title.innerHTML = `${todoData.title}`
  
  s_title.appendChild(title)
  s_title.appendChild(p_title)
  s_todo.appendChild(s_title);

  // Dates (h2)
  const s_dates = document.createElement("section");
  s_dates.className = "dates";
  s_dates.setAttribute('aria-label', "When was the todo created, and when will it expire is written in this section.");
  s_dates.tabIndex = 0;

  const dates = document.createElement("h2");
  dates.textContent = "Dates";
  
  const p_dates = document.createElement("p");
  p_dates.innerHTML = `Created: <time datetime=${todoData.created}>${todoData.created}</time> <br> Due: <time datetime=${todoData.due}>${todoData.due}</time>`
  
  s_dates.appendChild(dates)
  s_dates.appendChild(p_dates);
  s_todo.appendChild(s_dates)

  // Priority (h3)
  const s_priority = document.createElement("section");
  s_priority.className = "priority";
  s_priority.setAttribute('aria-label', "How important is the todo?");
  s_priority.tabIndex = 0;

  const priority = document.createElement("h3");
  priority.textContent = `Priority`;
  
  const p_priority = document.createElement("p");
  p_priority.innerHTML = `${todoData.priority}`

  s_priority.appendChild(priority)
  s_priority.appendChild(p_priority)
  s_todo.appendChild(s_priority);

  // Description (h4)
  const s_description = document.createElement("section");
  s_description.className = "description";
  s_description.setAttribute('aria-label', "A detailed description of what the To-Do is about.");
  s_description.tabIndex = 0;

  const description = document.createElement("h4");
  description.textContent = `Description`;

  const p_description = document.createElement("p");
  p_description.innerHTML = `${todoData.description}`

  s_description.appendChild(description)
  s_description.appendChild(p_description)
  s_todo.appendChild(s_description);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete"
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete todo: ${todoData.title}`);
  deleteButton.onclick = async () => {
    delete_todo(todoData.id);
    document.getElementById(todoData.id).remove();
  };
  s_todo.appendChild(deleteButton);

  // Append to DOM (adjust selector as needed)
  renderContainer.appendChild(s_todo);
}