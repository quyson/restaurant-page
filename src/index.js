import { initiallizePage } from "./scripts/initialize.js"
import { menu } from "./scripts/menu.js";
import { home } from "./scripts/home.js";
import { contact } from "./scripts/contact.js";
import "./header.css";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

initiallizePage();
home();

const list1 = document.querySelector('.home');
list1.addEventListener('click', e => {
    const mainContainer = document.querySelector('.mainContainer');
    removeAllChildNodes(mainContainer);
    home()
})

const list2 = document.querySelector('.menu');
list2.addEventListener('click', e => {
    const mainContainer = document.querySelector('.mainContainer');
    removeAllChildNodes(mainContainer);
    menu();
})

const list3 = document.querySelector('.contact');
list3.addEventListener('click', e => {
    const mainContainer = document.querySelector('.mainContainer');
    removeAllChildNodes(mainContainer);
    contact();
})
