const base = 'https://rancid-tomatillos-api.onrender.com'

function fetchData(endpoint) {
  return fetch(base + endpoint)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

function editData(endpoint, body) {
  return fetch(base + endpoint, {
    method: "PATCH",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}

export {
  fetchData,
  editData
}