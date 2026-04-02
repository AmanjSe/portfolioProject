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
function sentToWhatsApp(e)
{
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const note = document.getElementById("note").value.trim();

    emailjs.send('service_jiv3x5a', 'template_u2p14mg', {
        name: name,
        email: email,
        subject: subject,
        message: note
    }).then( () => {
        alert('Message sent to your gmail account');
    }).catch((error) => {
        alert('failed to sent ~ Try again');
        console.error(error);
    })

    const message =
        `👤 *Name:* ${name}\n` +
        `📧 *Email:* ${email}\n` +
        `📌 *Subject:* ${subject}\n` +
        `📝 *Message:* ${note}`;

    const phone = '9647824891640';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

}