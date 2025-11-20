

/**
 * role:menu hinzufügen für nummerierung der Elemete
 * has popup: ? -> Auch beim Model und auf der create todo seite hinzügen
 * is expanded: ?
 * contols anything:
 * Mehr indikatoren für was gerade passiert
*/
function create_nav(header, current_page) {
    const nav = document.createElement('nav');
    
    // Label
    const label = document.createElement('label');
    label.setAttribute('for', 'page-select');
    label.textContent = 'Navigate to:';
    
    nav.id = 'page-select';
    nav.appendChild(label);
    
    
    // Pages
    const pages = [
        { value: './index.html', text: 'Current To-Do' },
        { value: './todo_list.html', text: 'To-Do List' },
        { value: './add_todo.html', text: 'Add To-Do' }
    ];
    
    
    pages.forEach(pageData => {
        const page_link = document.createElement('a');
        page_link.href = pageData.value;
        page_link.textContent = pageData.text;

        // Aktuelle Seite markieren
        if (pageData.value === current_page) {
            page_link.setAttribute('aria-current', 'page');
            page_link.id = 'current-page';
        }

        nav.appendChild(page_link);
    });

    header.appendChild(nav);
}

    
    


    export function render_header(current_page){
        // Header
        const header = document.getElementsByTagName("header")[0];
        
        const nav = create_nav(header, current_page);
        
  // TODO
  //create_settings_button(header);
}