import menuMarkup from './templates/menu-card.hbs'
import menuData from './menu.json'
import './styles.css';

const menuCardsList = document.querySelector('.js-menu');
const menuCardsMarkup = createMenuCardsMarkup(menuData);

menuCardsList.insertAdjacentHTML('afterbegin', menuCardsMarkup);

function createMenuCardsMarkup(data) {
    return data.map(menuMarkup).join('');
}