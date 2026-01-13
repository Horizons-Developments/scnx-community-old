const toggle = document.getElementById("navigation-toggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("no-scroll", toggle.checked);
});