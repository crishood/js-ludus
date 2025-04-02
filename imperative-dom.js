const button = document.createElement('button');

button.textContent = 'Action!';

button.addEventListener('click', () => {
  console.log('Imperative Click!');
});

document.body.appendChild(button);
