document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery-container");
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");
    const closeBtn = document.querySelector(".close");

    // Generate image gallery
    for (let i = 1; i <= 28; i++) {
        let img = document.createElement("img");
        img.src = `achievements_${i}.jpg`;
        img.alt = `Achievement ${i}`;
        img.addEventListener("click", function () {
            openModal(img.src);
        });
        galleryContainer.appendChild(img);
    }

    // Open Modal
    function openModal(imageSrc) {
        modal.style.display = "flex";
        fullImage.src = imageSrc;
    }

    // Close Modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
