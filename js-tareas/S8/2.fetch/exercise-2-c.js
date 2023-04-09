const baseUrl = 'https://api.nationalize.io?name=';

const resultsContainer = document.getElementById('results-container');
const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', async () => {
  const nameInput = document.getElementById('name-input');
  const name = nameInput.value;
  const response = await fetch(`${baseUrl}${name}`);
  const data = await response.json();
  const nationalities = data.country.map(c => `${c.country_id} ${c.probability * 100}%`);
  nationalities.forEach(nat => {
    const p = document.createElement('p');
    p.textContent = `El nombre ${name} tiene un ${nat} de ser de esa nacionalidad.`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', () => p.remove());
    p.appendChild(deleteBtn);
    resultsContainer.appendChild(p);
  });
  nameInput.value = '';
});