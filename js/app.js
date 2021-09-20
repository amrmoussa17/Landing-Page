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

function getAttribute(element) {
    return element.getAttribute('data-nav');
}

// scroll to section if nav link is clicked 
// advantage of Event delegation instead of instancing event listeners on every link  

function scrollToSec(event) {
    if (event.target.nodeName === 'A') {
        const secName = event.target.innerText;
        sections.forEach((section) => {
            if (getAttribute(section) === secName) {
                section.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
            }
        }) 
    }  
}

function buildNav() {
    sections.forEach((section) => {
        const navItemName = getAttribute(section);
        const navItem = document.createElement('li');
        navItem.innerHTML = `<a> ${navItemName} </a>`;
        navItem.firstElementChild.classList.add('menu__link');
        fragment.appendChild(navItem);
    })
    navBar.appendChild(fragment);
    navBar.addEventListener('click',scrollToSec)
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.addEventListener('DOMContentLoaded', buildNav);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


