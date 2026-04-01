document.addEventListener("DOMContentLoaded", function () {

    // Scroll event
    window.addEventListener("scroll", function () {

        // Sticky navbar
        if (window.scrollY > 20) {
            document.querySelector('.navbar').classList.add("sticky");
        } else {
            document.querySelector('.navbar').classList.remove("sticky");
        }

        // Show scroll-up button
        if (window.scrollY > 500) {
            document.querySelector('.scroll-up-button').classList.add("show");
        } else {
            document.querySelector('.scroll-up-button').classList.remove("show");
        }
    });

    // Scroll to top
    document.querySelector('.scroll-up-button').addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // smooth animation
        });
    });

    // Typing animation (Typed.js stays the same)
    var typed1 = new Typed(".typing", {
        strings: ["Software Engineer", "Reader", "Traveler"],
        typeSpeed: 100,
        backSpeed: 65,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Software Engineer", "Reader", "Traveler"],
        typeSpeed: 100,
        backSpeed: 65,
        loop: true
    });

    // Menu toggle
    document.querySelector('.menu-btn').addEventListener("click", function () {
        document.querySelector('.navbar .menu').classList.toggle("active");
        document.querySelector('.menu-btn i').classList.toggle("active");
    });

});