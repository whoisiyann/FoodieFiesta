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


// Handle handaan highlight card clicks
document.querySelectorAll('.handaan-highlight-card .card[data-id]').forEach(card => {
    card.addEventListener('click', function() {
        const itemId = this.getAttribute('data-id');
        localStorage.setItem('selectedItem', itemId);
        window.location.href = 'pages/viewDetails.html';
    });
});

// Handle package button clicks
document.querySelectorAll('.fiesta-packages-card .btn[data-id]').forEach(button => {
    button.addEventListener('click', function() {
        const itemId = this.getAttribute('data-id');
        localStorage.setItem('selectedItem', itemId);
        window.location.href = 'pages/packagesDetails.html';
    });
});



// PREVENT ZOOMING
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
