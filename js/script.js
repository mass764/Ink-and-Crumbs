const genreButtons = document.querySelectorAll(".genre-button");
const genreCards = document.querySelectorAll(".genre-card");
const searchInput = document.getElementById("bookSearch");

function showGenre(selectedGenre) {
    genreCards.forEach((card) => {
        if (card.classList.contains(selectedGenre)) {
            card.classList.remove("hidden-book");
        } else {
            card.classList.add("hidden-book");
        }
    });

    genreButtons.forEach((button) => {
        button.classList.remove("active-genre");
    });

    const activeButton = document.querySelector(`[data-genre="${selectedGenre}"]`);
    if (activeButton) {
        activeButton.classList.add("active-genre");
    }
}

genreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedGenre = button.getAttribute("data-genre");
        showGenre(selectedGenre);
        searchInput.value = "";
    });
});

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const searchValue = searchInput.value.toLowerCase();

        genreCards.forEach((card) => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const author = card.querySelector("p").textContent.toLowerCase();

            if (title.includes(searchValue) || author.includes(searchValue)) {
                card.classList.remove("hidden-book");
            } else {
                card.classList.add("hidden-book");
            }
        });

        genreButtons.forEach((button) => {
            button.classList.remove("active-genre");
        });
    });
}