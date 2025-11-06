


// Request types
const GET = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}

const DELETE = {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
}



// Requests
export async function get_current_todo() {
  return await fetch(`/current_todo`, GET)
    .then(check_response)
    .then(log_and_return_data)
    .catch(log_error);
}

export async function delete_todo(_todoId) {
  console.log(_todoId);
  //const queryParam = new URLSearchParams({todoID: _todoId});
  return await fetch(`/delete_todo/${_todoId}`, DELETE)
    .catch(log_error);
}

// Requests response checks
function check_response(response) {
  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();

}

function log_and_return_data(data) {
  console.log('Success', data);
  return data;
}

function log_error(error) {
  console.error(error.toString());
}
