// import { createDiv, appendChildren } from "./low-levels";
// import layout from "./layout";
// // import contact from "./contact";
// import bgpic from './assets/tuscany.jpg';
// import wine from './assets/wine-bottle.png'

// const container = createDiv("container");
// container.style.backgroundImage = `url(${bgpic})`;


// function ab() {
//     const mainpage = createDiv("mainpage");
//     const contentblock = createDiv("home")
//     const ctitle = createDiv("ctitle");
//     const tagline = createDiv("tagline");
//     const contactus = createDiv("ordernow");
//     const toppart = createDiv("toppart");
    
//     //setting inner html
//     ctitle.id = 'ctitle';
//     ctitle.innerHTML = "Sapori & Vini";
//     tagline.innerHTML = "Dedicated to Top Quality Italian Wine Since 1999";
//     contactus.innerHTML = "Contact Us!"

//     contactus.addEventListener('click', ()=> {
//         while(document.body.firstChild) {
//             document.body.removeChild(document.body.firstChild);
//         }
//     });

//     appendChildren(toppart, ctitle, tagline);
//     appendChildren(contentblock, toppart, contactus);
//     mainpage.appendChild(contentblock);

//     return mainpage
// };

//  const about = layout(container, ab);

// // export default about;