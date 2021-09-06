const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme'
}

const body = document.querySelector('body');
const themeSwitch = document.querySelector('.theme-switch__toggle');

const savedTheme = () => {
    if (localStorage.getItem('Theme') === Theme.DARK) {
      setDarkTheme();
      themeSwitch.setAttribute('checked', true)
   }
 }

savedTheme();
  
function setDarkTheme() {
  body.classList.add(Theme.DARK) || body.classList.remove(Theme.LIGHT)    
  localStorage.setItem('Theme', Theme.DARK);
 }

 function setLightTheme() {
   body.classList.remove(Theme.DARK) || body.classList.add(Theme.LIGHT)
   localStorage.setItem('Theme', Theme.LIGHT)
 }


 body.classList.add(Theme.LIGHT);

themeSwitch.addEventListener('change', (e) => {
  (e.target.checked) ? setDarkTheme() : setLightTheme();   
});

