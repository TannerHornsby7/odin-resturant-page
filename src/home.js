import { appendChildren, createDiv } from "./low-levels";
import bgpic from './assets/bg.jpg';
import layout from "./layout";

const container = createDiv("container");
container.style.backgroundImage = `url(${bgpic})`;

function homeBody() {
    const mainpage = createDiv("mainpage");
    const contentblock = createDiv("home")
    const ctitle = createDiv("ctitle");
    const tagline = createDiv("tagline");
    const ordernow = createDiv("ordernow");
    const toppart = createDiv("toppart");
    
    //setting inner html
    ctitle.id = 'ctitle';
    ctitle.innerHTML = "Sapori & Vini";
    tagline.innerHTML = "The most authentic Italian experience in the south side.";
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

const home = layout(container, "home", homeBody());

export default home;