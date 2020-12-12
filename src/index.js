import './styles.css';
import menuArray from './menu.json';
import menuTemplate from './templates/menu-templates.hbs';

//console.log(menuArray)
console.log(menuTemplate)
const create = menuTemplate(menuArray)
console.log(create)
//menuTemplate(menuArray)

//const menu = createMenu(menuItemTemplate);
const menu = document.querySelector('.menu')
menu.insertAdjacentHTML('beforeend', create)