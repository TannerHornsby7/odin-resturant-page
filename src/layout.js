// import { createDiv, appendChildren } from './low-levels';
// // import home from './home'
// import about from './about';
// // import reserve from './reserve';
// // import contact from './contact';

// import './style.scss';
// import wine from './assets/wine-bottle.png'

// function header(active) {
//     const box = createDiv("header");
//     const title = document.createElement('h1');
//     const logo = new Image();
//     logo.src = wine;

//     // setting title content
//     title.textContent = "Sapori & Vini";

//     // setting menu content
//     const company = createDiv("company");
//     const navbar = createDiv("navbar");
//     const home = createDiv("home", true);
//     const menu = createDiv("menu", true);
//     const about = createDiv("about", true)
//     const contact = createDiv("contact", true);

//     //setting default active menu item to active
//     switch (active) {
//         case "home":
//             home.classList.add('activetab');
//             break;
//         case "menu":
//             menu.classList.add('activetab');
//             break;
//         case "about":
//             about.classList.add('activetab');
//             break;
//         case "contact":
//             contact.classList.add('activetab');
//             break;
//         default:
//             home.classList.add('activetab');
//     }
    
//     // clear menu actives
//     const cb = function clearButtons() {
//         home.classList.remove('active');
//         menu.classList.remove('active');
//         reserve.classList.remove('active');
//         contact.classList.remove('active');
//    }

//    // add navigation function
//     const addNavigation = function (button) {
//         button.addEventListener('click', ()=> {
//             //clear active status of all buttons
//             cb();
//             //clear current dom elements
//             while(document.body.firstChild) {
//                 document.body.removeChild(document.body.firstChild);
//             }
//             //add current to active
//             button.classList.add('activetab');

//             //navigate to current tab's page

//             pushPage(button.textContent); // builds given string's page
//         });
//     }

//     //adding navigation to the header menu
//     addNavigation(home);
//     addNavigation(menu);
//     addNavigation(about);
//     addNavigation(contact);



//     appendChildren(company, logo, title);
//     appendChildren(navbar, home, menu, about, contact);

//     // setting header content
//     return appendChildren(box, company, navbar);
// }

// function footer() {
//     const box = createDiv("footer");
//     const quote = document.createElement('h3');
//     const credits = createDiv("credits");


//     // setting title content
//     quote.textContent = "The Best in The West";
//     credits.innerHTML = "Created by Tanner Hornsby"

//     // setting menu content
//     const navbar = createDiv("navbar");
//     const home = createDiv("home", true);
//     const menu = createDiv("menu", true);
//     const reserve = createDiv("reserve", true)
//     const contact = createDiv("contact", true);
//     appendChildren(navbar, home, menu, reserve, contact);

//     // setting header content
//     return appendChildren(box, quote, credits, navbar);
// }

// export default function layout(c, m) {
//     return appendChildren(c, header(), m, footer());
// }