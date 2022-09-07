// handle tab switching here
import { appendChildren, createDiv } from './low-levels';
import home from './home';
import menu from './menu';

home();

const homebtn = document.querySelector('#home');
const menubtn = document.querySelector('#menu');

// clear menu actives
const cb = function clearButtons() {
    homebtn.classList.remove('active');
    menubtn.classList.remove('active');
    // contactbtn.classList.remove('active');
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
        switch(button.textContent) {
            case 'HOME':
                home();
                break;
            case 'MENU':
                menu();
                break;
            default:
                home();
        }
    });
}

    //adding navigation to the header menu
    addNavigation(homebtn);
    addNavigation(menubtn);



