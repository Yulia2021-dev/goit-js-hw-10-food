const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

 const body = document.querySelector('body')
 const themeSwitch = document.querySelector('.theme-switch__toggle')  

 body.classList.add(Theme.LIGHT)

 const SavedTheme = function () {
    if(localStorage.getItem('Theme') === Theme.DARK) {
    setDarkTheme()
    themeSwitch.setAttribute('checked', true)
   }
 }

  SavedTheme()

 function setDarkTheme () {
   body.classList.add(Theme.DARK)||body.classList.remove(Theme.LIGHT)    
   localStorage.setItem('Theme', Theme.DARK);
 }

 function setLightTheme () {
   body.classList.remove(Theme.DARK)||body.classList.add(Theme.LIGHT)
   localStorage.setItem('Theme', Theme.LIGHT)
 }

themeSwitch.addEventListener('change', onChangeTheme) 

 function onChangeTheme (e) {
   setDarkTheme ()
     if(!e.target.checked) {setLightTheme ()
    }    
 }