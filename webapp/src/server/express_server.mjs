import express from 'express';
import path from 'path';
import { query_current_todo } from './database/get.mjs';
import { query_delete_todo } from './database/delete.mjs';
import { query_save_todo } from './database/post.mjs';



let PORT = '8080';

if (process.argv.length > 2) {
  PORT = process.argv[2];
}

const BASE_URI = `http://localhost:${PORT}`;

const server = express();

// Server all static files from dist
server.use(express.static(path.join(path.dirname(process.argv[1]),
  '..', '..', 'dist')));

// Parse JSON
server.use(express.json());

// Default route: serve index.html
server.get('/', (req, res) => {
  res.sendFile(path.join(path.dirname(process.argv[1]), '..', '..', 'dist', 'index.html'));
});





server.get('/current_todo', async (req, res) => {
  try {
    const data = await query_current_todo();
    res.json(data); // send JS object directly
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server or DB-Error' });
  }
});

server.delete('/delete_todo/:id', async (request, response) => {
  const todoId = request.params.id;
  try {
    await query_delete_todo(todoId);
    response.end();
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Server or DB-Error' });
  }
});

server.post('/save_todo', async (request, response) => {
  try {
    await query_save_todo(request.query); 
    response.end();
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Server or DB-Error' });
  }
});





server.listen(PORT, () => { console.log('HTTP server listening on port %d.', PORT); });
