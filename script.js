// Explore Projects button
document.querySelector(".hero button").addEventListener("click", function() {
    document.querySelector("#projects").scrollIntoView({
        behavior: "smooth"
    });
});


// Contact form
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been submitted.");

    this.reset();
});