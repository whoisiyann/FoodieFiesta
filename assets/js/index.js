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
    nav.classList.toggle("show");
}


// document.addEventListener('wheel', function(e) {
//     if (e.ctrlKey) {
//         e.preventDefault();
//     }
// }, { passive: false });


// document.addEventListener('keydown', function(e) {
//     if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
//         e.preventDefault();
//     }
// });



/* ANIMATION SCROLL EFFECT */
const revealElements = document.querySelectorAll(
    ".handang-pinoy-container, .handaan-highlight-container, .fiesta-packages-container, .card"
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