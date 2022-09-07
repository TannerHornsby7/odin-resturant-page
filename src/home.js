import { createDiv, appendChildren, createButton } from './low-levels';
import './style.scss';
import wine from './assets/wine-bottle.png'
import bg from './assets/bg.jpg'



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

    appendChildren(company, logo, title);
    appendChildren(navbar, home, menu, contact);

    // setting header content
    return appendChildren(box, company, navbar);
}

function mainpage(type) {
    const mainpage = createDiv("mainpage");
    const contentblock = createDiv(type)
    const ctitle = createDiv("ctitle");
    const tagline = createDiv("tagline");
    const ordernow = createDiv("ordernow");
    const toppart = createDiv("toppart");
    
    //setting inner html

    ctitle.id = 'ctitle';
    ctitle.innerHTML = "Sapori & Vini";
    tagline.innerHTML = "The most authentic Italian experience in the South Side.";
    ordernow.innerHTML = "Order Now!"



    ordernow.addEventListener('click', ()=> {
        while(document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    appendChildren(toppart, ctitle, tagline);
    appendChildren(contentblock, toppart, ordernow);
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

function home() {
    const contain = createDiv("container");
    contain.style.backgroundImage = `url(${bg})`;
    return document.body.appendChild(appendChildren(createDiv("container"), header(), mainpage("home"), footer()));
}

export default home;