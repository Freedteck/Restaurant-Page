import '../css/menu.css'
import account from '../img/card-account-mail.svg';

const div = document.createElement('div');
const heading = document.createElement('h1');
const card = document.createElement('div');

// Adding Classes
heading.classList.add('heading');
heading.classList.add('contact');
card.classList.add('card');

// Heading
heading.textContent = 'Our Menu';

// Function to add contact Info
function MenuList() {
    // Declaring Variables
    const items = document.createElement('div');
    const icon = document.createElement('div');
    const iconImg = new Image();
    const title = document.createElement('h3');

    // Adding Classes
    title.classList.add('title');
    items.classList.add('items');
    items.classList.add('mail');

    // Top Icon (Contact Image)
    iconImg.src = account;
    iconImg.width = 100;
    icon.appendChild(iconImg);

    // Text Contents
    title.textContent = 'Menu Item';

    // Items
    items.appendChild(icon);
    items.appendChild(title);

    return items;
}

for (let i = 0; i < 9; i++) {
    card.appendChild(MenuList());
}
function menuPage() {
    div.appendChild(heading);
    div.appendChild(card);

    return div;
}
export { menuPage }