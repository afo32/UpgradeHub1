const baseUrl = 'https://api.nationalize.io?name=';

const searchButton = document.querySelector('#searchButton');
searchButton.addEventListener('click', searchName);

function searchName() {
  const nameInput = document.querySelector('#nameInput');
  const name = nameInput.value;
}

function searchName() {
    const nameInput = document.querySelector('#nameInput');
    const name = nameInput.value;
  
    const url = baseUrl + name;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const resultDiv = document.querySelector('#result');
        resultDiv.innerHTML = JSON.stringify(data);
      })
      .catch(error => console.error(error));
  }  