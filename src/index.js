import './style.css';
import Home from './js/home';
import { contactPage } from './js/contact';
import { menuPage } from './js/menu';

// Declaring Variables
const main = document.querySelector('main');
const contactBtn = document.getElementById('contact');
const home = document.getElementById('home');
const menu = document.getElementById('menu');

main.appendChild(Home());

// Event Listeners
home.addEventListener('click', (e) => {
    main.innerHTML = '';
    main.appendChild(Home());
    e.preventDefault();
});

contactBtn.addEventListener('click', (e) => {
    main.innerHTML = '';
    main.appendChild(contactPage());
    e.preventDefault();
});

menu.addEventListener('click', (e) => {
    main.innerHTML = '';
    main.appendChild(menuPage());
    e.preventDefault();
})