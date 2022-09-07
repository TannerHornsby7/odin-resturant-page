// Low Level useful functions
function createDiv(cname) {
    const element = document.createElement('div');
    element.classList.add(cname);

    if(arguments[1] == true) {
        element.textContent = cname.toUpperCase();
    }
    return element;
}

function appendChildren(parent) {
    //adding children to parent
    for (let i = 1; i < arguments.length; i++) {
        parent.appendChild(arguments[i]);
    }

    return parent;
}




export { createDiv, appendChildren};