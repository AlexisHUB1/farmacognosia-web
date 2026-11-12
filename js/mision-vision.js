const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach(card => {

    card.addEventListener("click", () => {

        const isFlipped = card.classList.toggle("is-flipped");

        card.setAttribute("aria-pressed", String(isFlipped));

        const name = card.classList.contains("mission-card")
            ? "Misión"
            : "Visión";

        card.setAttribute(
            "aria-label",
            isFlipped
                ? `${name}. Volver al título`
                : `${name}. Girar para leer`
        );

    });

});
