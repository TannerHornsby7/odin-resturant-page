import { createDiv, appendChildren } from "./low-levels";
import bg from './assets/bg.jpg';

function createContact() {
    const contactusblock = createDiv("contactusblock")
    const title = document.createElement('h2');
    const talktous = document.createElement('p');
    
    // setting text contents
    title.textContent = "Contact Us";
    talktous.textContent = "If you would like to set up a reservation, please give us a call at (800)-622-2799."

    return appendChildren(contactusblock, title, talktous);
}

function loadContact() {
    const main = document.getElementById('main');
    main.style.backgroundImage = `url(${bg})`;
    main.textContent = '';
    main.appendChild(createContact());
    return main;
}


export default loadContact;
