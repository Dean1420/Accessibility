import sqlite3 from "sqlite3";
import path from 'path';
import fs from 'fs';

export async function query_delete_todo(id) {
  const dbPath = path.resolve('./webapp/dist/todos.db');
  console.log('Opening DB at:', dbPath);
  
  if (!fs.existsSync(dbPath)) {
    console.error('DB file not found:', dbPath);
    return { error: 'DB file missing' };
  }
  
  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE);
  
  const data = await new Promise((resolve, reject) => {
    db.run(`DELETE FROM todos WHERE id = ${id}`, [], function(err) {
      if (err) {
        console.error("Query error:", err.message);
        reject(err);
      } else {
        console.log("Deleted rows:", this.changes);
        resolve({ success: true, deletedRows: this.changes });
      }
    });
  });
  
  db.close();
  return data;
}