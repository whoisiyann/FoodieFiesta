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