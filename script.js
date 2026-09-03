function sayHello() {
    alert("Welcome to my website!");
}


// Dark Mode Toggle
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }

    });

}
// Back to Top Button
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// Scroll Animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    observer.observe(element);
});
