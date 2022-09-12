import { createDiv, appendChildren, createButton } from './low-levels';
import './style.scss';
import bg from './assets/ab.jpg'

function createHome() {
    const mainpage = createDiv("mainpage");
    const contentblock = createDiv("home")
    const ctitle = createDiv("ctitle");
    const tagline = createDiv("tagline");
    const ordernow = createButton("ordernow");
    const toppart = createDiv("toppart");
    
    //setting inner html

    ctitle.id = 'ctitle';
    ctitle.innerHTML = "Sapori & Vini";
    tagline.innerHTML = "The most authentic Italian experience in the South Side.";
    ordernow.innerHTML = "Order Now!"

    appendChildren(toppart, ctitle, tagline);
    appendChildren(contentblock, toppart, ordernow);
    mainpage.appendChild(contentblock);

    return mainpage;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.style.backgroundImage = `url(${bg})`;
    main.appendChild(createHome());
}

export default loadHome;
