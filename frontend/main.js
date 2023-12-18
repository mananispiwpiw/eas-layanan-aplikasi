document.addEventListener("DOMContentLoaded", function () {
    const bunnyContainer = document.getElementById("bunny-container");

    // Array of bunny image URLs
    const bunnyImages = [
        "frontend/assets/bunny1.jpeg",
        "bunny2.jpg",
        "bunny3.jpg",
        // Add more image URLs as needed
    ];

    // Add bunny images to the container
    bunnyImages.forEach((imageUrl) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Bunny";
        img.classList.add("bunny-image");
        bunnyContainer.appendChild(img);
    });

    // Generate snowflakes
    for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        bunnyContainer.appendChild(snowflake);
    }
});
