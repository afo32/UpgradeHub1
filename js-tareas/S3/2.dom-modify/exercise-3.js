const body = document.querySelector('body');
const div = document.createElement('div');
for (let i = 1; i <= 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Párrafo ${i}`;
  div.appendChild(p);
}
body.appendChild(div);
