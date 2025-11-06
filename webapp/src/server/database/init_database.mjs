import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./webapp/dist/todos.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);

db.exec(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    created TEXT,
    due TEXT,
    priority TEXT,
    description TEXT,
    current INTEGER  
  )`
);

console.log("\nTable created\n")

db.run(`INSERT INTO todos (title, created, due, priority, description, current) 
          VALUES (?, ?, ?, ?, ?, ?)`,
    ['Adding more To-Dos', '2025-11-03', '2026-01-01', 'High', 'Because you have no todos, your task will be to create more To-Dos', 1]
);

console.log("\nData inserted\n")


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

console.log(data[0]);
db.close();

