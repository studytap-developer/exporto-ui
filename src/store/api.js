
// const API_URL = "http://localhost:9292"
const API_URL = ""

function callApi(path, data, options={}) {
  options.method ||= 'GET'

  const payload = {}

  payload.method = options.method
  payload.headers = {
    'Content-Type': 'application/json',
  }

  if(data) {
    payload.body = JSON.stringify(data)
  }

  fetch(`${API_URL}/${path}`, payload).then(
      response => response.json()
    ).then(
      responseData => {
      // Handle the response data if needed
        console.log('POST request response:', responseData);
        if(options.succ) {
          options.succ(responseData)
        }
      }
    ).catch(error => {
      // options.err ? options.err(error) : null
      console.error('Error:', error);
    });
}

export function post(path, {data, succ, err}) {
  callApi(path, data, {method: 'POST', succ, err})
}

export function get(path, { succ, err}) {
  callApi(path, {}, {method: 'POST', succ, err})
}