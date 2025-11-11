


import sqlite3 from "sqlite3";
import path from 'path';
import fs from 'fs';



export async function query_all_todo_titles(){
    const dbPath = path.resolve('./webapp/dist/todos.db'); // absolute path
    console.log('Opening DB at:', dbPath);

    if (!fs.existsSync(dbPath)) {
        console.error('DB file not found:', dbPath);
        return { error: 'DB file missing' };
    }


    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);
    const data = await new Promise((resolve, reject) => {
        db.all(`SELECT id, title FROM todos`, [], (err, rows) => {
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
    
    return data;    
}



export async function query_current_todo() {
    const dbPath = path.resolve('./webapp/dist/todos.db'); // absolute path
    console.log('Opening DB at:', dbPath);

    if (!fs.existsSync(dbPath)) {
        console.error('DB file not found:', dbPath);
        return { error: 'DB file missing' };
    }


    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);
    const data = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM todos WHERE current = 1`, [], (err, rows) => {
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
    
    return data;
}



export async function query_todo_by_id(id) {
    const dbPath = path.resolve('./webapp/dist/todos.db'); // absolute path
    console.log('Opening DB at:', dbPath);

    if (!fs.existsSync(dbPath)) {
        console.error('DB file not found:', dbPath);
        return { error: 'DB file missing' };
    }


    const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);
    const data = await new Promise((resolve, reject) => {
        db.all(`SELECT * FROM todos WHERE id = ?`, [id], (err, rows) => {
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
    
    return data;
}