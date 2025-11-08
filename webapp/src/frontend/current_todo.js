import { get_current_todo } from "./lib/db_requests";
import { create_dom_todo } from "./lib/dom_todo";
import { render_header } from "./lib/header";

async function render_current_todo() {
  const main = document.getElementsByTagName("main")[0];
  
  const currentTodo = await get_current_todo();
  const todoData = currentTodo[0];
  console.log(currentTodo);

  if(currentTodo.length != 0) create_dom_todo(main, todoData);
}

(async function on_page_load() {
  render_header('./index.html');
  await render_current_todo();
})();
