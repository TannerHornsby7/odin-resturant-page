import './style.css';
import Background from './bg.jpg';

function home() {
    const element = document.createElement('div');
    const bgImage = new Image();
    element.classList.add('home');
    bgImage.src = Background;

    element.appendChild(bgImage);

    return element;
}

document.body.appendChild(home());

