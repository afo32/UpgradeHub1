const segundoDiv = document.querySelector('div:nth-of-type(2)');
const padre = segundoDiv.parentNode;

const nuevaP = document.createElement('p');
nuevaP.textContent = 'Voy en medio!';

padre.insertBefore(nuevaP, segundoDiv);
