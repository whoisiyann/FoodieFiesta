// NAVBAR HIDE ON SCROLL
let lastScroll = 0;
const navbar = document.querySelector(".top-nav");

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

const toggle = document.getElementById("menuToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    links.classList.toggle("show");
});

// CLOSE MENU ON LINK CLICK
const sections = document.querySelectorAll(".menu-section");
const pageText = document.getElementById("page-indicator");
const leftBtn = document.getElementById("arrow-left");
const rightBtn = document.getElementById("arrow-right");
const menuLinks = document.querySelectorAll(".menu-link");

let currentIndex = 0;


// GET SECTION FROM URL
const params = new URLSearchParams(window.location.search);
const sectionFromURL = params.get("section");

if (sectionFromURL !== null) {
    currentIndex = parseInt(sectionFromURL);
}
updateMenu();


// UPDATE MENU FUNCTION
function updateMenu(direction = "right") {

    sections.forEach((sec, index) => {

        sec.classList.remove("active", "slide-left", "slide-right");

        if(index === currentIndex){
            sec.classList.add("active");
        } else if(index < currentIndex){
            sec.classList.add("slide-left");
        } else {
            sec.classList.add("slide-right");
        }
    });

    pageText.textContent = `Page ${currentIndex + 1} of ${sections.length}`;

    menuLinks.forEach((link, index) => {
        link.classList.toggle("active", index === currentIndex);
    });
}

// RIGHT ARROW
rightBtn.addEventListener("click", () => {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        updateMenu("right");
    }
});

// LEFT ARROW
leftBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMenu("left");
    }
});

// CLICK MENU LINKS
menuLinks.forEach((link, index) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = index;
        updateMenu();
    });
});

// SWIPE FUNCTIONALITY
let startX = 0;
let endX = 0;

const sectionsContainer = document.querySelector(".menu-sections");

function nextPage() {
    if (currentIndex < sections.length - 1) {
        currentIndex++;
        updateMenu();
    }
}

function prevPage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateMenu();
    }
}

if (sectionsContainer) {
    sectionsContainer.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
    });

    sectionsContainer.addEventListener("touchend", (e) => {
        endX = e.changedTouches[0].clientX;
        handleSwipe();
    });
}

// HANDLE SWIPE
function handleSwipe() {
    const threshold = 50;

    if (startX - endX > threshold) {
        nextPage(); // swipe left
    } else if (endX - startX > threshold) {
        prevPage(); // swipe right
    }
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




