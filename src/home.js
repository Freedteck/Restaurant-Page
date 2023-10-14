import background from './banner.jpg'
import food from './food-fork-drink.svg'

export const banner = document.createElement('div')
banner.classList.add('banner')
const bannerImg = new Image()
bannerImg.src = background
bannerImg.setAttribute('width', '100%')
banner.appendChild(bannerImg)

export const heading = document.createElement('div')
const headingContent = document.createElement('h2')
headingContent.textContent = 'Our Service'
headingContent.classList.add('heading')
heading.appendChild(headingContent)

const card = document.createElement('div')
card.classList.add('card')
export default function itemList() {
    for (let i = 0; i < 6; i++) {
        const items = document.createElement('div')
        items.classList.add('items')
        const icon = document.createElement('div')
        icon.classList.add('icon')
        const iconImg = new Image()
        iconImg.src = food
        iconImg.width = 100
        icon.appendChild(iconImg)
        const title = document.createElement('h3')
        title.textContent = 'Master Chef'
        const para = document.createElement('p')
        para.textContent = 'Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
        title.classList.add('title')
        items.appendChild(icon)
        items.appendChild(title)
        items.appendChild(para)
        card.appendChild(items)
    }
    return card
}