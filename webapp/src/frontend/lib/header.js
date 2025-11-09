


function create_nav(header) {
    const nav = document.createElement('nav');

    // Label
    const label = document.createElement('label');
    label.setAttribute('for', 'page-select');
    label.textContent = 'Choose a page:';

    // Select
    const select = document.createElement('select');
    select.name = 'page-select';
    select.id = 'page-select';

    // Options
    const options = [
        { value: './index.html', text: 'Current To-Do' },
        { value: './todo_list.html', text: 'To-Do List' },
        { value: './add_todo.html', text: 'Add To-Do' }
    ];

    options.forEach(optionData => {
        const option = document.createElement('option');
        option.value = optionData.value;
        option.textContent = optionData.text;
        select.appendChild(option);
    });

    // On option selected
    select.addEventListener('change', function () {
        const selectedPage = this.value;
        if (selectedPage) {
            window.location.href = selectedPage;
        }
    });

    // Append label and select to nav
    nav.appendChild(label);
    nav.appendChild(select);
    header.appendChild(nav);

    return select
}


function create_settings_button(header) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = ' Open Display Settings';

    header.appendChild(button);
}



export function render_header(current_select_value){
  // Header
  const header = document.getElementsByTagName("header")[0];

  const nav = create_nav(header);
  nav.value = current_select_value;

  create_settings_button(header);
}