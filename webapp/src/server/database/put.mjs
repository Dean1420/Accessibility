


import sqlite3 from "sqlite3";



export async function set_as_current_todo(id) {
    const db = new sqlite3.Database("./webapp/dist/todos.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    
    // First, set all todos to not current (0)
    db.run(`UPDATE todos SET current = 0`);
    
    // Then set the specified todo as current (1)
    db.run(`UPDATE todos SET current = 1 WHERE id = ?`, [id]);
    
    console.log(`Todo ${id} set as current`);
    
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
    });
    
    db.close();
}