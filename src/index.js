import './styles.css';
import menuArray from './menu.json';
import menuTemplate from './templates/menu-templates.hbs';
const create = menuTemplate(menuArray)
const menu = document.querySelector('.menu')
const bodyTeg = document.querySelector('body');
const input = document.querySelector('#theme-switch-toggle');
const loadTheme = localStorage.getItem('theme')


menu.insertAdjacentHTML('beforeend', create)

//------localStorage------//
input.addEventListener('change', changeTheme)

function loadPageTheme() {
  bodyTeg.classList.toggle(loadTheme)
  if (loadTheme === 'dark-theme') {
    input.checked=true
}
}

loadPageTheme()

function changeTheme(event) { 
  let setTheme
  let saveTheme
  if (event.target.checked == false) {
      setTheme = 'light-theme'; 
   }
    else{setTheme = 'dark-theme';  
 }
  bodyTeg.className = setTheme;
  saveTheme=localStorage.setItem('theme',setTheme)  
}







const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
