/// NAVBAR HIDE ON SCROLL
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


// ============ DYNAMIC MENU SYSTEM ============
// All data comes from menuData.js
let currentMenuItem = null;

// ============ LOAD FOOD DATA FROM LOCALSTORAGE ============
document.addEventListener("DOMContentLoaded", () => {
    const selectedId = localStorage.getItem("selectedItem");
    
    if (selectedId) {
        const item = findItemById(selectedId);
        if (item) {
            loadFoodDetailsFromData(item);
        } else {
            console.error("Item not found:", selectedId);
        }
    } else {
        console.error("No selected item found in localStorage");
    }
});


//  Load food details strictly from the menu database
//  @param {Object} menuItem - The menu item object

function loadFoodDetailsFromData(menuItem) {
    if (!menuItem) {
        console.error("Menu item not found");
        return;
    }
    
    // Store current menu item for later use
    currentMenuItem = menuItem;
    
    // Update food name with star if favorite
    const foodNameElement = document.querySelector(".food-header h1");
    if (menuItem.favorite) {
        foodNameElement.innerHTML = `<img src="../assets/images/icons/star.png" style="width:50px; height:50px;"> ${menuItem.name}`;
    } else {
        foodNameElement.textContent = menuItem.name;
    }
    
    // Update tagline/food-tags
    const foodTagsElement = document.querySelector(".food-tags");
    foodTagsElement.textContent = menuItem.tagline;
    
    // Update price - set to first portion price
    const priceElement = document.querySelector(".price");
    if (menuItem.portions && menuItem.portions.length > 0) {
        priceElement.textContent = formatPrice(menuItem.portions[0].price);
    }
    
    // Update main image
    const mainImage = document.getElementById("mainFoodImage");
    mainImage.src = menuItem.image;
    mainImage.alt = menuItem.name;
    
    // Update all thumbnail images from the images array
    const thumbnails = document.querySelectorAll(".carousel-thumbnails .thumb");
    if (menuItem.images && menuItem.images.length > 0) {
        thumbnails.forEach((thumb, index) => {
            if (index < menuItem.images.length) {
                thumb.src = menuItem.images[index];
                thumb.alt = `${menuItem.name} - Image ${index + 1}`;
            } else {
                thumb.src = menuItem.images[0]; // Fallback to first image
                thumb.alt = menuItem.name;
            }
        });
    } else {
        // Fallback if no images array
        thumbnails.forEach(thumb => {
            thumb.src = menuItem.image;
            thumb.alt = menuItem.name;
        });
    }
    
    // Update description
    const descriptionElement = document.querySelector(".description-section p");
    descriptionElement.textContent = menuItem.description;
    
    // Update allergens
    const allergensElement = document.querySelector(".allergens-section p:last-child");
    allergensElement.textContent = menuItem.allergens;
    
    // Update type of dish
    const typeElement = document.querySelector(".type-section p");
    typeElement.textContent = menuItem.type;
    
    // Update cultural background
    const culturalElement = document.querySelector(".cultural-content p");
    if (culturalElement) {
        culturalElement.textContent = menuItem.cultural;
    }
    
    // Update portion buttons dynamically based on the menu item's portions
    updatePortionButtons(menuItem.portions);
    
    // Initialize event listeners for portion buttons
    initializePortionListeners();
    
    // Set first portion as default
    const firstButton = document.querySelector(".portion-btn");
    if (firstButton) {
        firstButton.classList.add("active");
        selectedPortion = menuItem.portions[0].value;
    }
    
    // Reset carousel
    currentImageIndex = 0;
    thumbnails.forEach((thumb, index) => {
        thumb.classList.remove("active");
        if (index === 0) thumb.classList.add("active");
    });
}


// Update portion buttons based on the menu item's actual portions
// Each menu item defines its own portion variations

function updatePortionButtons(portions) {
    const portionContainer = document.getElementById("portionButtons");
    
    // Clear existing buttons
    portionContainer.innerHTML = "";
    
    // Create buttons for each portion defined in the menu item
    portions.forEach(portion => {
        const button = document.createElement("button");
        button.className = "portion-btn";
        button.textContent = portion.label;  // Use exact label from document
        button.dataset.price = portion.price;
        button.dataset.portion = portion.value;
        portionContainer.appendChild(button);
    });
}


// ============ DETAILS PAGE FUNCTIONALITY ============

// IMAGE CAROUSEL
let currentImageIndex = 0;
let thumbnails = document.querySelectorAll(".carousel-thumbnails .thumb");

function changeImage(img) {
    const mainImage = document.getElementById("mainFoodImage");
    mainImage.src = img.src;
    
    // Update active thumbnail
    thumbnails.forEach(thumb => thumb.classList.remove("active"));
    img.classList.add("active");
    
    currentImageIndex = Array.from(thumbnails).indexOf(img);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % thumbnails.length;
    thumbnails[currentImageIndex].click();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + thumbnails.length) % thumbnails.length;
    thumbnails[currentImageIndex].click();
}

// PORTION SELECTION
let selectedPortion = null;

function selectPortion(button, portion) {
    // Remove active class from all buttons
    document.querySelectorAll(".portion-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    // Add active class to clicked button
    button.classList.add("active");
    selectedPortion = portion;
    
    // Update the displayed price
    updatePriceDisplay(button);
    
    console.log("Selected portion:", portion, "Price:", button.dataset.price);
}


//Update the displayed price with animation

function updatePriceDisplay(button) {
    const priceElement = document.querySelector(".price");
    const newPrice = button.dataset.price;
    
    if (newPrice && newPrice !== "N/A") {
        // Format price for display - convert to number for proper formatting
        const formattedPrice = formatPrice(parseFloat(newPrice));
        
        // Add animation effect
        priceElement.style.transition = "opacity 0.3s ease-in-out";
        priceElement.style.opacity = "0.7";
        
        setTimeout(() => {
            priceElement.textContent = formattedPrice;
            priceElement.style.opacity = "1";
        }, 150);
    }
}


//Initialize event listeners for portion buttons

function initializePortionListeners() {
    const portionButtons = document.querySelectorAll(".portion-btn");
    portionButtons.forEach(button => {
        // Remove existing listeners by cloning and replacing
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Add event listener
        newButton.addEventListener("click", function(e) {
            e.preventDefault();
            selectPortion(this, this.dataset.portion);
        });
    });
}

// CULTURAL BACKGROUND TOGGLE
let culturalSection = document.querySelector(".cultural-section");

function toggleCultural() {
    if (culturalSection) {
        culturalSection.classList.toggle("collapsed");
    }
}

// BY DEFAULT, CULTURAL SECTION IS EXPANDED
window.addEventListener("DOMContentLoaded", () => {
    culturalSection = document.querySelector(".cultural-section");
    if (culturalSection) {
        culturalSection.classList.add("collapsed");
    }
});

// FESTIVE DETAILS BUTTON CLICK
function handleFestiveDetails() {
    if (!selectedPortion) {
        alert("Please select a portion size first!");
        return;
    }
    
    if (!currentMenuItem) {
        alert("Item data not loaded!");
        return;
    }
    
    // Get price from current selection
    const priceElement = document.querySelector(".price");
    const price = priceElement.innerText;
    
    // Create details object from the loaded menu item data
    const details = {
        name: currentMenuItem.name,
        price: price,
        portion: selectedPortion,
        allergens: currentMenuItem.allergens,
        typeOfDish: currentMenuItem.type,
        timestamp: new Date().toLocaleString()
    };
    
    // Log the details
    console.log("Festive Details:", details);
    
        alert(`
    MISS U:(
    MISS U:(
    MISS U:(
    MISS U:(
    MISS U:(
        `);
    }











