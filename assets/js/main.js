document.querySelectorAll('.character').forEach(char => {
  const desc = char.querySelector('.description');
  const text = char.dataset.description;

  char.addEventListener('click', () => {
    if (desc.innerText === text) {
      desc.innerText = '';
    } else {
      desc.innerText = text;
    }
  });
});