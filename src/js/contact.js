import '../css/contact.css';
import account from '../img/card-account-mail.svg';

// Declaring Variables
const div = document.createElement('div');
const contactBanner = document.createElement('div');
const contactBannerElement = document.createElement('h2');
const heading = document.createElement('h1');
const card = document.createElement('div');

// Adding Classes
contactBanner.classList.add('contact-banner');
heading.classList.add('heading');
heading.classList.add('contact');
card.classList.add('card');

// Contact Banner
contactBannerElement.textContent = 'Contact Us';
contactBanner.appendChild(contactBannerElement);

// Heading
heading.textContent = 'Contact For Any Query';

// Function to add contact Info
function contactList() {
    // Declaring Variables
    const items = document.createElement('div');
    const icon = document.createElement('div');
    const iconImg = new Image();
    const title = document.createElement('h3');
    const desc = document.createElement('p');

    // Adding Classes
    title.classList.add('title');
    items.classList.add('items');
    items.classList.add('mail');

    // Top Icon (Contact Image)
    iconImg.src = account;
    iconImg.width = 100;
    icon.appendChild(iconImg);

    // Text Contents
    title.textContent = 'Booking Query';
    desc.textContent = 'olanrewajumubarak3@gmail.com';

    // Items
    items.appendChild(title);
    items.appendChild(icon);
    items.appendChild(desc);

    return items;
}

for (let i = 0; i < 3; i++) {
    card.appendChild(contactList());
}
function contactPage() {
    div.appendChild(contactBanner);
    div.appendChild(heading);
    div.appendChild(card);

    return div;
}
export { contactPage }