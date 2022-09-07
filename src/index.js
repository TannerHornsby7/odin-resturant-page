// handle tab switching here
import { appendChildren, createDiv, createButton } from './low-levels';
import wine from './assets/wine-bottle.png'
import loadMenu from './menu';
import loadHome from './home';
import loadContact from './contact';

const content = createDiv("content");
document.body.appendChild(content);

    // Add Navigation Function
    const addNavigation = function (button) {
        button.addEventListener('click', ()=> {
            //clear current dom elements
            console.log('clicked');
            //navigate to current tab's page
            switch(button.id) {
                case 'home':
                    setActiveButton(home);
                    loadHome();
                    break;
                case 'menu':
                    setActiveButton(menu);
                    loadMenu();
                    break;
                case 'ordernow':
                    setActiveButton(menu);
                    loadMenu();
                    break;
                case 'contact':
                    setActiveButton(contact);
                    loadContact();
                    break;
                default:
            }
        });
    }    


function header() {
    const box = createDiv("header");
    const title = document.createElement('h1');
    const logo = new Image();
    logo.src = wine;

    // creating nav bar content
    const home = createButton("home", true);
    const menu = createButton("menu", true);
    const contact = createButton("contact", true);



    // setting title content
    title.textContent = "Sapori & Vini";

    // setting menu content
    const company = createDiv("company");
    const navbar = createDiv("navbar");

    //adding navigation to the header menu
    addNavigation(home);
    addNavigation(menu);
    addNavigation(contact);

    appendChildren(company, logo, title);
    appendChildren(navbar, home, menu, contact);

    // setting header content
    return appendChildren(box, company, navbar);
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".navbar");
    console.log(buttons);
  
    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });
  
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('div');
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function footer() {
    const box = createDiv("footer");
    const quote = document.createElement('h3');
    const credits = createDiv("credits");
    const contact = createDiv("contact");

    // setting title content
    quote.textContent = "The Best in The West";
    credits.innerHTML = "Created by Tanner Hornsby"
    contact.innerHTML = "(800)-622-2799"

    // setting menu content

    // setting header content
    return appendChildren(box, quote, credits, contact);
}

function initializeWebsite() {
    const context = document.querySelector(".content");
  
    context.appendChild(header());
    context.appendChild(createMain());
    context.appendChild(footer());
  
    setActiveButton(document.getElementById("home"));
    loadHome();
    const ordernow = document.getElementById('ordernow')
    addNavigation(ordernow);
}

initializeWebsite();



