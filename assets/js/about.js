// NAVBAR HIDE ON SCROLL
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        // scroll down
        navbar.classList.add("nav-hidden");
    } else {
        // scroll up
        navbar.classList.remove("nav-hidden");
    }

    lastScroll = currentScroll;
});

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const toggle = document.querySelector(".menu-toggle");
    nav.classList.toggle("show");
    toggle.classList.toggle("active");
}


// ANIMATION SCROLL EFFECT
const revealElements = document.querySelectorAll(
    ".team-section, .team-cards, .team-card, .card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
});
