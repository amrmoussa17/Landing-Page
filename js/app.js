/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// get data-nav attribute value
function getAttribute(element) {
    return element.getAttribute('data-nav');
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav function
function buildNav() {
    sections.forEach((section) => {
        const navItemName = getAttribute(section);
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a> ${navItemName} </a>`;
        navItem.firstElementChild.classList.add('menu__link');
        fragment.appendChild(navItem);
    })
    navBar.appendChild(fragment);
};

// scroll to section when nav link is clicked function
function scrollToSec(event) {
    if (event.target.nodeName === 'A'){
        const secName = event.target.innerText;
        sections.forEach( (section) => {
            if (getAttribute(section) === secName){
                section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
        }) 
    }  
}

// Add active class function
function addActive() {
    sections.forEach( (section) => {
        const top = section.getBoundingClientRect().top;
        if (top >= 0 && top < 400){
            section.classList.add('your-active-class')
        }
        else{
            section.classList.remove('your-active-class')
        }
    })
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNav);

// Scroll to section on link click
navBar.addEventListener('click',scrollToSec);

// Set sections as active
window.addEventListener('scroll',addActive);

