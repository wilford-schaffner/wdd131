const themeSelector = document.querySelector('#theme');
const body = document.body;
const logo = document.querySelector('#logo');

function toggleTheme() {
    if (themeSelector.value === 'dark') {
      body.classList.add('dark');
      logo.src = 'images/byui-logo_white.png';
    } else {
      body.classList.remove('dark');
      logo.src = 'images/byui-logo_blue.webp';
    }
  }
  
  themeSelector.addEventListener('change', toggleTheme);