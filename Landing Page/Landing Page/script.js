// script.js

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentSlideIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });

        dots.forEach((dot, dotIndex) => {
            if (dotIndex === index) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    dots.forEach((dot, dotIndex) => {
        dot.addEventListener("click", function () {
            currentSlideIndex = dotIndex;
            showSlide(currentSlideIndex);
        });
    });

    showSlide(currentSlideIndex);
});
