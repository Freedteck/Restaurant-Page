// import './contact.css'
// import account from './card-account-mail.svg'

function insert () {
    const contactBanner = document.createElement('div')
    contactBanner.classList.add('contact-banner')
    const contactBannerElement = document.createElement('h2')
    contactBannerElement.textContent = 'Contact Us'
    contactBanner.appendChild(contactBannerElement)
    return contactBanner
}

export { insert }