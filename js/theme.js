const themeCheckbox = document.querySelector('#theme');

localStorage.getItem('theme') === 'dark'
  ? (themeCheckbox.checked = true)
  : (themeCheckbox.checked = false);

document.querySelector('#theme').addEventListener('change', () => {
  themeCheckbox.checked
    ? localStorage.setItem('theme', 'dark')
    : localStorage.setItem('theme', 'light');
});
