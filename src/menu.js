import { createDiv, appendChildren, } from "./low-levels.js"
import { header, mainpage, footer } from "./layout";
import bgpic from './assets/mbg.jpg';

const container = createDiv("container");
container.style.backgroundImage = `url(${bgpic})`;

document.body.appendChild(appendChildren(container, header("menu"), mainpage("home"), footer()));
