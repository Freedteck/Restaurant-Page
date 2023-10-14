import '../css/home.css';
import background from '../img/banner.jpg';
import food from '../img/food-fork-drink.svg';

// Declaring Variables
const div = document.createElement('div');
const banner = document.createElement('div');
const heading = document.createElement('div');
const headingContent = document.createElement('h2');
const card = document.createElement('div');
const bannerImg = new Image();

// Adding Classes
banner.classList.add('banner');
headingContent.classList.add('heading');
card.classList.add('card');

// Banner
bannerImg.src = background;
bannerImg.setAttribute('width', '100%');
banner.appendChild(bannerImg);

// Heading
headingContent.textContent = 'Our Service';
heading.appendChild(headingContent);

// Function to handle Each Item
function itemList() {
    // Declaring Variables
    const items = document.createElement('div');
    const icon = document.createElement('div');
    const iconImg = new Image();
    const title = document.createElement('h3');
    const desc = document.createElement('p');

    // Adding Classes
    items.classList.add('items');
    title.classList.add('title');

    // Top Icon (Item Image)
    iconImg.src = food;
    iconImg.width = 100;
    icon.appendChild(iconImg);

    // Text Contents
    title.textContent = 'Master Chef';
    desc.textContent = 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'

    // Items
    items.appendChild(icon);
    items.appendChild(title);
    items.appendChild(desc);

    return items;
}

// Logic to create multiple Items
for (let i = 0; i < 6; i++) {
    // Adding items tothe card 6 Times
    card.appendChild(itemList());
}

// Function to be exported
export default function Home() {
    div.appendChild(banner);
    div.appendChild(heading);
    div.appendChild(card);

    return div;
}