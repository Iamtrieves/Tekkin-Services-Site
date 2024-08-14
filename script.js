function enableFixedNavigationBar() {
    const navBar = document.getElementById('nav-bar');
    const isScrolledPastThreshold = window.scrollY >= 49;

    // Toggle fixed navbar and box-shadow based on scroll position
    navBar.classList.toggle("fixed-nav-bar", !isScrolledPastThreshold);
    navBar.classList.toggle("nav-bar-box-shadow", isScrolledPastThreshold);
}

function setLinkColor(color) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
    link.style.color = color;
    link.style.border.bottom = "1px solid var(--tekins-green)";
});
}

// Event Listeners
window.addEventListener('scroll', () => {
    if (!navMenu.classList.contains("active") && window.scrollY < 49) {
    setLinkColor('var(--tekins-white)');
    } else {
        setLinkColor('var(--tekins-green');
    }
    enableFixedNavigationBar();
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const body = document.querySelector('#body');
const header = document.querySelector('#header');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("hamburger-menu-blur-effect");
    // Update link color based on navMenu state
    setLinkColor(navMenu.classList.contains("active") ? 'var(--tekins-green)' : 'var(--tekins-white)');

    // Prevent scrolling when navMenu is active
    document.body.classList.toggle("no-scroll", navMenu.classList.contains("active"));
    // document.body.classList.toggle("hamburger-menu-blur-effect", navMenu.classList.contains("active"));
});

// Targets the hamburger & navMenu variable and removes the class active attached to them i.e closes by clicking any of them or the links it takes away the navMenu from the page
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("hamburger-menu-blur-effect");
}))
// Targets the the body element and removes the class no-scroll on the it when any of the nav-link is clicked
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    body.classList.remove("no-scroll");
}))


// Current Year 
const displayCurrentYear = () => {
    const currentYearElement = document.querySelector('.current-year');
    const actualCurrentYear = new Date().getFullYear();
    currentYearElement.textContent = actualCurrentYear;
};
displayCurrentYear(); 
