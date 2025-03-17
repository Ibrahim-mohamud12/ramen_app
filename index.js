// Sample ramen data
const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "gyukotsu.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "nirvana.jpg", rating: 3, comment: "Rich broth!" }
];

// Function to display ramen images in the menu
function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = ""; // Clear existing images

    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        menu.appendChild(img);
    });
}

// Function to display ramen details when clicked
function handleClick(ramen) {
    document.getElementById("detail-image").src = ramen.image;
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("restaurant-name").textContent = ramen.restaurant;
    document.getElementById("ramen-rating").textContent = ramen.rating || "N/A";
    document.getElementById("ramen-comment").textContent = ramen.comment || "N/A";
}

// Function to handle form submission
function addSubmitListener() {
    const form = document.getElementById("new-ramen");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        ramens.push(newRamen);
        displayRamens(); // Refresh menu
        form.reset();
    });
}

// Initialize app
function main() {
    displayRamens();
    addSubmitListener();
}

// Ensure DOM is loaded before running
document.addEventListener("DOMContentLoaded", main);
