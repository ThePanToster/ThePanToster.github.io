const languageCheckbox = document.querySelector('#language');
translateElements();

function translateElements() {
  const elements = document.querySelectorAll('[class^="t-"]');
  let translations;

  switch (localStorage.getItem('language')) {
    case 'pl':
      translations = pl;
      localStorage.setItem('language', 'pl');
      languageCheckbox.checked = true;
      break;
    default:
      translations = en;
      localStorage.setItem('language', 'en');
      languageCheckbox.checked = false;
      break;
  }

  elements.forEach((elem) => {
    elem.textContent = translations[parseInt(elem.className.slice(2, 5))];
  });
}

languageCheckbox.addEventListener('change', () => {
  languageCheckbox.checked
    ? localStorage.setItem('language', 'pl')
    : localStorage.setItem('language', 'en');
  translateElements();
});
