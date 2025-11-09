


import sqlite3 from "sqlite3";



export async function query_save_todo(todoData) {
    const db = new sqlite3.Database("./webapp/dist/todos.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

    db.run(`INSERT INTO todos (title, created, due, priority, description, current) 
              VALUES (?, ?, ?, ?, ?, ?)`,
        [todoData.title, todoData.currentDate, todoData.dueDate, todoData.priority, todoData.description, 0]
    );

    console.log(todoData.title);
    const data = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM todos`, [], (err, rows) => {
            if (err) {
                console.error("Query error:", err.message);
                reject(err);
            } else {
                console.table(rows);
                resolve(rows);
            }
        });
    }
    );

    db.close();
}