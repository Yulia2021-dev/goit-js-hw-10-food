import menuTemplate from '../templates/menu';
import menuList from '../menu.json';

const menuHtml = menuTemplate(menuList);
const menuDirectory = document.querySelector('.js-menu');

menuDirectory.insertAdjacentHTML('beforeend', menuHtml);