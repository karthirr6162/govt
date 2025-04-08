document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-container img");

    const revealImages = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    };

    const options = {
        root: null,
        threshold: 0.1, // Trigger when 10% of the image is visible
    };

    const observer = new IntersectionObserver(revealImages, options);

    images.forEach((image, index) => {
        // Assign alternating directions
        image.classList.add(index % 2 === 0 ? "left" : "right");

        // Add staggered delay
        image.classList.add(`delay-${(index % 3) + 1}`);

        observer.observe(image); // Observe each image
    });
});

