import menuMarkup from '../templates/menu-card.hbs';
import menuData from './menu.json';

export default function () {
    const menuCardsList = document.querySelector('.js-menu');
    const menuCardsMarkup = createMenuCardsMarkup(menuData);

    menuCardsList.insertAdjacentHTML('afterbegin', menuCardsMarkup);

    function createMenuCardsMarkup(data) {
        return menuMarkup(data);
    }
}