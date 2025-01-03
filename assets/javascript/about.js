// Dictionary containing image links and footer content
const certificateData = {
    "https://drive.google.com/thumbnail?id=1nDDvxd2TXKcAwbfjb2WQvYeb1pYMviJo&sz=w1000": "Docker Foundations Professional Certificate",
    "https://drive.google.com/thumbnail?id=1MU1NDoPiIjWnPjKjAGFT0vz2d2W-IWZv&sz=w1000": "Freelance Work",
    "https://drive.google.com/thumbnail?id=12345EXAMPLE&sz=w1000": "Another Certificate Example"
};

// Reference to the carousel-inner container
const carouselInner = document.getElementById("carouselInner");

// Function to create carousel items
function createCarouselItems(data) {
    let isFirstItem = true; // Flag to set the first item as active
    for (const [imageSrc, footerText] of Object.entries(data)) {
        // Create the carousel-item div
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");
        if (isFirstItem) {
            carouselItem.classList.add("active"); // Set the first item as active
            isFirstItem = false;
        }

        // Create the card div
        const card = document.createElement("div");
        card.classList.add("card");

        // Create the img element
        const img = document.createElement("img");
        img.src = imageSrc;
        img.alt = footerText;

        // Create the card-footer div
        const cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");
        cardFooter.textContent = footerText;

        // Append img and footer to the card
        card.appendChild(img);
        card.appendChild(cardFooter);

        // Append card to carousel-item
        carouselItem.appendChild(card);

        // Append carousel-item to carousel-inner
        carouselInner.appendChild(carouselItem);
    }
}

// Call the function to populate the carousel
createCarouselItems(certificateData);
