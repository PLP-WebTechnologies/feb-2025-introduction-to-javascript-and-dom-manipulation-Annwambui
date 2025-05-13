// Change text content
document.getElementById('change-text-btn').addEventListener('click', () => {
  document.getElementById('text').textContent = 'The text has been updated!';
});

// Modify CSS styles
document.getElementById('change-style-btn').addEventListener('click', () => {
  const box = document.getElementById('box');
  box.style.backgroundColor = 'lightblue';
  box.style.border = '2px solid navy';
});

// Add or remove an element
const section = document.getElementById('dynamic-section');

document.getElementById('add-element-btn').addEventListener('click', () => {
  const newPara = document.createElement('p');
  newPara.textContent = 'A new element has been added!';
  newPara.id = 'new-para';
  section.appendChild(newPara);
});

document.getElementById('remove-element-btn').addEventListener('click', () => {
  const existingPara = document.getElementById('new-para');
  if (existingPara) {
    section.removeChild(existingPara);
  }
});
