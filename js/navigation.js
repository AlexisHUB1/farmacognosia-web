const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Cerrar menú" : "Abrir menú"
    );

});

mainNav.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menú");

    });

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menú");

    }

});