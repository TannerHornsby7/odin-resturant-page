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

function header(active) {
    const box = createDiv("header");
    const title = document.createElement('h1');
    const logo = new Image();
    logo.src = wine;

    // setting title content
    title.textContent = "Sapori & Vini";

    // setting menu content
    const company = createDiv("company");
    const navbar = createDiv("navbar");
    const home = createButton("home", true);
    const menu = createButton("menu", true);
    const contact = createButton("contact", true);

    //setting default active menu item to active
    switch (active) {
        case "home":
            home.classList.add('activetab');
            break;
        case "menu":
            menu.classList.add('activetab');
            break;
        case "contact":
            contact.classList.add('activetab');
            break;
        default:
            home.classList.add('activetab');
    }
    
    // clear menu actives
    const cb = function clearButtons() {
        home.classList.remove('active');
        menu.classList.remove('active');
        contact.classList.remove('active');
   }

   // add navigation function
    const addNavigation = function (button) {
        button.addEventListener('click', ()=> {
            //clear active status of all buttons
            cb();
            //clear current dom elements
            while(document.body.firstChild) {
                document.body.removeChild(document.body.firstChild);
            }
            //add current to active
            button.classList.add('activetab');

            //navigate to current tab's page

            //pushPage(button.textContent); // builds given string's page
        });
    }

    //adding navigation to the header menu
    addNavigation(home);
    addNavigation(menu);
    addNavigation(contact);



    appendChildren(company, logo, title);
    appendChildren(navbar, home, menu, contact);

    // setting header content
    return appendChildren(box, company, navbar);
}

function mainpage(type) {
    const mainpage = createDiv("mainpage");
    const contentblock = createDiv(type);
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

    appendChildren(contentblock, ctitle, cards);
    mainpage.appendChild(contentblock);

    return mainpage
}

function footer() {
    const box = createDiv("footer");
    const quote = document.createElement('h3');
    const credits = createDiv("credits");
    const contact = createDiv("contact");



    // setting title content
    quote.textContent = "The Best in The West";
    credits.innerHTML = "Created by Tanner Hornsby"
    contact.innerHTML = "(800)-775-2699"

    // setting menu content

    // setting header content
    return appendChildren(box, quote, credits, contact);
}

function menu() {
    const contain = createDiv("container");
    contain.style.backgroundImage = `url(${bg})`;
    return document.body.appendChild(appendChildren(contain, header(), mainpage("menu"), footer()));
}

export default menu;