import './home.css'
import { banner } from './home';
import { heading } from './home';
import itemList from './home';

import { insert } from './contact';

const main = document.querySelector('main');

main.appendChild(banner)
main.appendChild(heading)
main.appendChild(itemList())

const contactBtn = document.getElementById('contact')
const home = document.getElementById('home')

home.addEventListener('click', (e) => {
    main.innerHTML = ''
    main.appendChild(banner)
    main.appendChild(heading)
    main.appendChild(itemList())
    e.preventDefault()
})
contactBtn.addEventListener('click', (e) => {

    main.innerHTML = ''
    main.appendChild(insert())
    e.preventDefault()
})