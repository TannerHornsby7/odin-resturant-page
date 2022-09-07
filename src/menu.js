import { createDiv, appendChildren, createButton } from "./low-levels.js";
import './style.scss';
import wine from './assets/wine-bottle.png';
import bg from './assets/mbg.jpg';
import bbr from './assets/bbr.png';


function createCard(title, price, image, description) {
    const card = createDiv('card');
    const t = document.createElement('h3');
    const p = document.createElement('h4');
    const i = new Image();
    const d = document.createElement('p');

    t.textContent = title;
    p.textContent = price;
    i.src = image;
    d.textContent = description;

    return appendChildren(card, t, p, i, d);
}

function createMenu() {
    const menu = createDiv("menu")
    const cards = createDiv("cards");
    const ctitle = createDiv("ctitle");

    // 6 wines
    const bbrCard = createCard("Beverly Chamberlain", "$340", bbr, "A rich wine with an oaky afterbirth" );
    const bbbrCard = createCard("Beverly Chamberlain", "$340", bbr, "A rich wine with an oaky afterbirth" );
    const bbbbrCard = createCard("Beverly Chamberlain", "$340", bbr, "A rich wine with an oaky afterbirth" );
    const bbbbbrCard = createCard("Beverly Chamberlain", "$340", bbr, "A rich wine with an oaky afterbirth" );




    appendChildren(cards, bbrCard, bbbrCard, bbbbrCard, bbbbbrCard);
    
    //setting inner html
    ctitle.id = 'ctitle';
    ctitle.innerHTML = "Our Menu";

    appendChildren(menu, ctitle, cards);

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.style.backgroundImage = `url(${bg})`;
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;