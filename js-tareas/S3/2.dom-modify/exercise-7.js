const elementsToRemove = document.querySelectorAll('.fn-remove-me');

for (let i = 0; i < elementsToRemove.length; i++) {
  elementsToRemove[i].remove();
}
