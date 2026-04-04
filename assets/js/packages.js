// ============ LOAD PACKAGE DATA FROM LOCALSTORAGE ============
document.addEventListener("DOMContentLoaded", () => {
    const selectedId = localStorage.getItem("selectedItem");

    if (selectedId) {
        const item = findItemById(selectedId);
        if (item) {
            loadPackageDetails(item);
        } else {
            console.error("Package item not found:", selectedId);
        }
    } else {
        console.error("No selected item found in localStorage");
    }
});


//Load package details from the menu database
//@param {Object} packageItem - The package item object

function loadPackageDetails(packageItem) {
    if (!packageItem) {
        console.error("Package item not found");
        return;
    }

    // Update title with star if favorite
    const titleElement = document.querySelector(".food-header h1");
    if (packageItem.favorite) {
        titleElement.innerHTML = `<img src="../assets/images/icons/star.png" style="width:50px; height:50px;"> ${packageItem.name}`;
    } else {
        titleElement.textContent = packageItem.name;
    }

    // Update tags
    const tagsElement = document.querySelector(".details-tags");
    tagsElement.innerHTML = `
        <li>Set Tier: ${packageItem.tier}</li>
        <li>Good for: ${packageItem.goodFor}</li>
        <li>Ideal for: ${packageItem.idealFor}</li>
    `;

    // Update price
    const priceElement = document.querySelector(".price");
    priceElement.textContent = formatPrice(packageItem.price);

    // Update inclusions
    const inclusionsElement = document.querySelector(".inclusion-section ul");
    inclusionsElement.innerHTML = packageItem.inclusions.map(item => `<li>${item}</li>`).join('');

    // Update allergens
    const allergensElement = document.querySelector(".allergens-section p");
    allergensElement.textContent = packageItem.allergenInfo;

    // Update package overview
    const overviewElement = document.querySelector(".package-overview-content p");
    overviewElement.textContent = packageItem.packageOverview;

    // Update main image
    const mainImage = document.getElementById("mainFoodImage");
    mainImage.src = packageItem.image;
    mainImage.alt = packageItem.name;
}

// ============ TOGGLE PACKAGE OVERVIEW SECTION ============

let packageOverver = document.querySelector(".package-overview-section");

function togglePackageOverview() {
    if (packageOverver) {
        packageOverver.classList.toggle("collapsed");
    }
}

// BY DEFAULT, CULTURAL SECTION IS EXPANDED
window.addEventListener("DOMContentLoaded", () => {
    packageOverver = document.querySelector(".package-overview-section");
    if (packageOverver) {
        packageOverver.classList.add("collapsed");
    }
});

// ============ ORDER BUTTON FUNCTION ============
function handleFestiveDetails() {
    alert("MISS U :(");
}






